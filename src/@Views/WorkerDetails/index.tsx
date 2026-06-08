import React, { useState } from "react";

import new_thumb_icon from "@Assets/Images/new_thumb_icon.svg";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Snackbar,
  styled,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  BlackNormalLocationIcon,
  CallMuiIcon,
  CopyIcon,
  StarMuiIcon,
  WhatsAppIcon,
  BookmarkIconMui,
} from "@Icons/index";
import verified from "@Assets/Images/verified.gif";
import ImageCard from "./components/ImageCard";
import UserReview from "./components/UserReview";
import StarRating from "@Components/StarRating";
import { useNavigate, useParams } from "react-router-dom";
import CircleDaySelector from "@Components/CircleDaySelector";
import { days } from "@Constants/Home";
import { ImagePreview } from "@Primitives/ImagePreviewModal/imagePreview";
import { hooks } from "@Utils/index";
import { Loader } from "@Primitives/Loader";


const DetailsStyle = styled(Box)<{ isMobile: boolean }>(
  ({ theme, isMobile }) => ({
    overflowX: "hidden",
    ".mX10": {
      margin: theme.spacing(0, 10),
    },
    ".header": {
      margin: theme.spacing(10),
      padding: !isMobile && theme.spacing(10),
      border: !isMobile && `1px solid ${theme.misc.borderColor}`,
      borderRadius: !isMobile && theme.spacing(3),

      ".bookMark": {
        padding: theme.spacing(2),
        border: `1px solid ${theme.misc.borderColor}`,
        borderRadius: theme.spacing(3),
      },
    },
    ".commonStyle": {
      padding: !isMobile && theme.spacing(10),
      border: !isMobile && `1px solid ${theme.misc.borderColor}`,
      borderRadius: !isMobile && theme.spacing(5),
    },
    ".main": {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(10),
    },
    ".pB10": {
      paddingBottom: theme.spacing(7.5),
    },
    ".fS16": {
      fontSize: theme.spacing(8),
    },
    ".flex": {
      display: "flex",
    },
    ".justifySpaceBetween": {
      justifyContent: "space-between",
    },
    ".fW500": {
      fontWeight: "500",
    },
    ".left": {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(4),
    },
    ".flexBox": {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(4),
    },
    ".ratingBox": {
      gap: theme.spacing(6),
    },
    ".commonIconStyle": {
      width: theme.spacing(7.5),
      height: theme.spacing(7.5),
    },
    ".starRatingBox": {
      display: "flex",
      alignItems: "center",
      minHeight: theme.spacing(13.5),
      // width: theme.spacing(26),
      gap: theme.spacing(1),
      backgroundColor: theme.misc.verdantGreen,
      padding: theme.spacing(0, 2.5),
      borderRadius: theme.spacing(3),
      justifyContent: "center",
      color: theme.graph.secondary,
      boxSizing: "border-box",
      ".rating": {
        color: theme.graph.secondary,
      },
    },
    ".ratings": {
      color: theme.text.darkGrey,
      fontSize: theme.spacing(7.5),
    },
    ".iconBox": {
      gap: theme.spacing(2),
    },
    ".btnGroup": {
      display: "flex",
      gap: theme.spacing(6),
      ".btn": {
        padding: theme.spacing(0, 8),
        height: theme.spacing(17.5),
        fontSize: theme.spacing(7.5),
        fontWeight: 500,
        maxWidth: theme.spacing(80),
        width: "100%",
      },
      ".shareIcon": {
        border: "1px solid",
        borderRadius: theme.spacing(2.5),
        height: theme.spacing(17.5),
      },
    },
    ".imageContainer": {
      boxSizing: "border-box",
      width: isMobile ? "" : "60%",
      ".imageBox": {
        display: "flex",
        gap: theme.spacing(10),
        alignItems: "center",
        overflowX: "auto",
      },
    },
    ".contact": {
      width: isMobile ? "" : "30%",

      ".contactList": {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(10),
      },

      ".contactItem": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(5),
        border: `1px solid ${theme.misc.borderColor}`,
        borderRadius: theme.spacing(5),
      },

      ".iconWrapper": {
        width: 48,
        height: 48,
        borderRadius: "50%",
        backgroundColor: theme.misc.lightGrayBG,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: theme.spacing(4),
      },
      ".label": {
        color: theme.text.darkGrey,
        marginBottom: theme.spacing(2),
      },

      ".value": {
        color: theme.misc.selectedBlue,
        fontWeight: 500,
      },

      ".copyBtn": {
        color: theme.misc.selectedBlue,
      },
    },
    ".leftSection": {
      width: "60%",
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(5),
    },
    ".availableDays": {
      width: "100%",
      padding: theme.spacing(10),
      boxSizing: "border-box",
    },
    ".address": {
      width: isMobile ? "100vw" : "30%",
      //boxSizing: "border-box",

      ".gap8": {
        gap: theme.spacing(4),
      },
      ".addressCard": {
        flexDirection: "column",
        gap: theme.spacing(4),
      },
      ".label": {
        fontWeight: "bold",
      },
      ".value": {
        color: theme.text.darkGrey,
      },
    },
    ".reviewAndRatingBox": {
      boxSizing: "border-box",
      padding: theme.spacing(10),
      margin: theme.spacing(10, 0),
      borderRadius: !isMobile && theme.spacing(3),

      border: !isMobile && `1px solid ${theme.misc.borderColor}`,
      ".startYourReview": {
        paddingTop: theme.spacing(8),
      },
    },
  }),
);
export default function WorkerDetails() {
  const { id } = useParams();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  const navigate = useNavigate();
  const [isCopy, setIsCopy] = useState(false);
  const [isOpenImagePreview, setIsOpenImagePreview] = useState(false);

  const { useGetWorkerDetailsById,useGetAllWorkerReviews } = hooks.useMisc();
  const { data: workerDetailsData, isLoading: isWorkerDetailsDataLoading } = useGetWorkerDetailsById(id);
 const {data:reviewData,isLoading:isReviewLoading}=useGetAllWorkerReviews(id)
 
  const handleRating = (rating) => { 
    const fullName = `${workerDetailsData?.first_name} ${workerDetailsData?.last_name}`;   
    navigate(`/worker/write-review/${id}?rating=${rating}&name=${fullName}&area=${workerDetailsData?.area}&url=${encodeURIComponent(workerDetailsData?.profile?.url)}`, { state: { modal: true } });
  };
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopy(true);
  };

  const [selectedIndex, setSelectedIndex] = useState(0);


  const contactData = [
    {
      label: "Mobile Number",
      value: workerDetailsData?.mobile_number,
      icon: <CallMuiIcon />,
      copyIcon: <CopyIcon />,
    },
    {
      label: "WhatsApp Number",
      value: workerDetailsData?.whatsApp_number,
      icon: <WhatsAppIcon width={24} height={24} />,
      copyIcon: <CopyIcon />,
    },
  ];
  const addressData = [
    { label: "Address", value: workerDetailsData?.address_one },
    { label: "Area", value: workerDetailsData?.area },
...(workerDetailsData?.landmark
    ? [{ label: "Landmark", value: workerDetailsData.landmark }]
    : []),    { label: "Pincode", value: workerDetailsData?.pincode },
    { label: "City", value: workerDetailsData?.city },
    { label: "State", value: workerDetailsData?.state },
  ];
  return (
    <>
      {isWorkerDetailsDataLoading ? <Box height={`calc(100vh - ${isMobile ? '95px' : "80px"})`}><Loader type="section" /></Box> :

        <>
          {workerDetailsData &&
            <DetailsStyle isMobile={isMobile}>
              <Box className="header">
                <Box className="left">
                  <Box className="flexBox justifySpaceBetween">
                    <Box className="flexBox">
                      <img className="thumbIcon" src={new_thumb_icon} alt="thumb" />
                      <Typography variant="h5">
                        {workerDetailsData.first_name}  {workerDetailsData.last_name}
                      </Typography>
                    </Box>
                    {!isMobile && (
                      <IconButton className="bookMark">
                        <BookmarkIconMui />
                      </IconButton>
                    )}
                  </Box>

                  <Box className="ratingBox flexBox">
                    <Box className="starRatingBox" width={52}>
                      <Typography className="rating font15" variant="h5">
                        4.2
                      </Typography>
                      <StarMuiIcon className="commonIconStyle" />
                    </Box>

                    <Typography className="ratings" variant="body1">
                      50 Ratings
                    </Typography>
                    <Tooltip
                      arrow={true}
                      title={"This Profile Information is verified by oneCallWorker."}
                    >
                      <img height={30} src={verified} />
                    </Tooltip>
                  </Box>
                  <Box className="location iconBox flexBox">
                    <BlackNormalLocationIcon />
                    <Typography className="font15" variant="body1">
                      MALAD WEST Malad West, Mumbai
                    </Typography>
                  </Box>
                  <Box className="languages flexBox justifySpaceBetween">
                    <Typography className="font15" variant="body1">
                      Languages Spoken: {workerDetailsData.languages.join(", ")}
                    </Typography>
                    {!isMobile && (
                      <Typography className="fW500" variant="body1">
                        Click to Rate
                      </Typography>
                    )}
                  </Box>
                  <Box className="flexBox justifySpaceBetween">
                    <Box className="btnGroup">
                      <Button
                        className="btn"
                        variant="contained"
                        startIcon={<CallMuiIcon className="commonIconStyle" />}
                        onClick={(e: React.MouseEvent<HTMLElement>) => {
                          e.stopPropagation();
                          window.location.href = `tel:${workerDetailsData.mobile_number}`;
                        }}
                      >
                        {workerDetailsData.mobile_number}
                      </Button>

                      <Button
                        className="btn"
                        variant="outlined"
                        startIcon={<WhatsAppIcon width={15} height={15} />}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(`https://wa.me/${workerDetailsData.mobile_number}`, "_blank");
                        }}
                      >
                        WhatsApp
                      </Button>
                      {/* <ToolTip
     type="custom"
      title={
        <Box className="flexBox">

          <Box textAlign="center">
            <IconButton>
              <WhatsAppIcon />
            </IconButton>
            <Typography variant="caption">Whatsapp</Typography>
          </Box>

          <Box textAlign="center">
            <IconButton>
             l
            </IconButton>
            <Typography variant="caption">Copy Link</Typography>
          </Box>
        </Box>
      }
    >
      <IconButton>
        <ShareIcon sx={{ color: "black" }} />
      </IconButton>
    </ToolTip> */}
                    </Box>

                    {!isMobile && <StarRating onChange={(event, value) => handleRating(value)} size="large" />}
                  </Box>
                </Box>
              </Box>
              {isMobile && <Divider />}
              <Box className="main" px={isMobile ? 0 : 10}>
                <Box
                  className="justifySpaceBetween flex"
                  flexDirection={isMobile ? "column" : "row"}
                >
                  <Box
                    className="imageContainer commonStyle "
                    padding={isMobile ? 10 : 0}
                  >
                    <Typography className="pB10" variant="h4">
                      Photos
                    </Typography>
                    <Box className="imageBox ">
                      <ImageCard
                        name="By Owner"
                        link={workerDetailsData.profile.url}
                        handleClickImage={() => {
                          setIsOpenImagePreview(true);
                        }}
                      />
                      <ImageCard
                        name="By User"
                        link="https://wallpapers.com/images/hd/link-hd-wallpaper-and-background-image-71mfep3ai8bib1mn.jpg"
                      />
                    </Box>
                  </Box>
                  {isMobile && <Divider />}
                  <Box className="contact commonStyle" padding={isMobile ? 10 : 0}>
                    <Typography className="pB10" variant="h4">
                      Contact Information
                    </Typography>

                    <Box className="contactList">
                      {contactData.map((val, index) => (
                        <Box key={index} className="contactItem">
                          <Box className="flexBox">
                            <Box className="iconWrapper">{val.icon}</Box>

                            <Box className="textBox">
                              <Typography className="label">{val.label}</Typography>

                              <Typography className="value">{val.value}</Typography>
                            </Box>
                          </Box>
                          <IconButton
                            className="copyBtn"
                            onClick={() => handleCopy(val.value)}
                          >
                            {val.copyIcon}
                          </IconButton>
                        </Box>
                      ))}
                      {isCopy && (
                        <Snackbar
                          open={isCopy}
                          onClose={() => setIsCopy(false)}
                          autoHideDuration={2000}
                          message="Copied to clipboard!"
                        />
                      )}
                    </Box>
                  </Box>
                  {isMobile && <Divider />}
                </Box>
                <Box
                  className="justifySpaceBetween flex"
                  alignItems={"flex-start"}
                  flexDirection={isMobile ? "column-reverse" : "row"}
                >
                  <Box width={isMobile ? "100%" : "60%"}>
                    {isMobile && <Divider />}
                    <Box className="availableDays commonStyle leftSection">
                      <Typography className={`${isMobile ? "" : "pB10"}`} variant="h4">
                        Available Days
                      </Typography>
                      <Box className="flexBox">
                        {days.map((day: string) => (
                          <CircleDaySelector
                            key={day}
                            name={day}
                            selectedDays={workerDetailsData.days}
                            onChange={() => { }}
                          />
                        ))}
                      </Box>
                    </Box>
                    {isMobile && <Divider />}
                    <Box className="reviewAndRatingBox">
                      <Typography className="pB10" variant="h4">
                        Reviews & Ratings
                      </Typography>
                      <Box className="flexBox" gap={"20px !important"}>
                        <Box
                          className="starRatingBox"
                          width={isMobile ? 50 : 72}
                          height={isMobile ? 50 : 72}
                        >
                          <Typography
                            className="rating"
                            variant={isMobile ? "h3" : "h1"}
                          >
                            4.2
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="h4">9 Ratings</Typography>
                          <Typography variant="body1" className="ratings">
                            Ocw rating index based on 9 ratings across the web
                          </Typography>
                        </Box>
                      </Box>
                      <Box className="startYourReview">
                        <Typography className="pB10" variant="h4">
                          Start your Review
                        </Typography>
                        <StarRating
                          onChange={(event, value) => handleRating(value)}
                          size={isMobile ? "medium" : "large"}
                        />
                      </Box>
                    </Box>
                  </Box>
                  {isMobile && <Divider />}
                  <Box className="address commonStyle" padding={isMobile ? 10 : 0}>
                    <Typography className="pB10" variant="h4">
                      Address
                    </Typography>

                    <Box className="addressCard flex">
                      {addressData.map((val) => {
                        return <>
                          <Box className="flex gap8">
                            <Typography className="label">{val.label}:</Typography>
                            <Typography className="value">
                              {val.value}
                            </Typography>
                          </Box>
                          <Divider />
                        </>
                      })}
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Divider />
              <Box className="userReview" padding={10}>
            
                {reviewData?.reviews&&reviewData.reviews.map((val)=>{
                  return <UserReview isLoading={isReviewLoading} data={val} key={val._id} />
                })}
              </Box>
              <Divider />

              {isOpenImagePreview && (
                <ImagePreview
                  open={isOpenImagePreview}
                  close={() => setIsOpenImagePreview(false)}
                  previewImageUrl={workerDetailsData.images}
                  index={selectedIndex}
                />
              )}
            </DetailsStyle>}
        </>}
    </>
  );
}
