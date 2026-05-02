import React, { useState } from "react";

import new_thumb_icon from "@Assets/Images/new_thumb_icon.svg";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Rating,
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
  CopyLinkIcon,
  PhoneIconBlue,
  StarMuiIcon,
  WhatsAppIcon,
} from "@Icons/index";
import verified from "@Assets/Images/verified.gif";
import ImageCard from "./components/ImageCard";
import UserReview from "./components/UserReview";
import BookmarkBorderTwoToneIcon from "@mui/icons-material/BookmarkBorderTwoTone";
import StarRating from "@Components/StarRating";
import { useNavigate } from "react-router-dom";
import CircleDaySelector from "@Components/CircleDaySelector";
import { days } from "@Constants/Home";

const contactData = [
  {
    label: "Mobile Number",
    value: "7039824933",
    icon: <CallMuiIcon />,
    copyIcon: <CopyIcon />,
  },
  {
    label: "WhatsApp Number",
    value: "8765456789",
    icon: <WhatsAppIcon width={24} height={24} />,
    copyIcon: <CopyIcon />,
  },
];
const DetailsStyle = styled(Box)<{ isMobile: boolean }>(
  ({ theme, isMobile }) => ({
    padding: theme.spacing(10),
    ".header": {
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
      width: theme.spacing(26),
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
      width: "60%",
      ".imageBox": {
        display: "flex",
        gap: theme.spacing(10),
        alignItems: "center",
        overflowX: "auto",
      },
    },
    ".contact": {
      width: "30%",

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
    },
    ".address": {
      width: "30%",
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
  }),
);
export function WorkerDetails() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  const navigate = useNavigate();
  const [isCopy, setIsCopy] = useState(false);
  const handleRating = () => {
    navigate("/worker/write-review/9876567");
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopy(true);
  };
  return (
    <DetailsStyle isMobile={isMobile}>
      <Box className="header">
        <Box className="left">
          <Box className="flexBox justifySpaceBetween">
            <Box className="flexBox">
              <img className="thumbIcon" src={new_thumb_icon} alt="thumb" />
              <Typography variant="h5">
                Shakti Electronics & Appliances (JioMart Digital Partner)
              </Typography>
            </Box>
            {!isMobile && (
              <IconButton className="bookMark">
                <BookmarkBorderTwoToneIcon />
              </IconButton>
            )}
          </Box>

          <Box className="ratingBox flexBox">
            <Box className="starRatingBox">
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
              Languages Spoken: Gujarati, Tamil
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
                }}
              >
                7039824822
              </Button>

              <Button
                className="btn"
                variant="outlined"
                startIcon={<WhatsAppIcon width={15} height={15} />}
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

            {!isMobile && <StarRating onClick={handleRating} size="large" />}
          </Box>
        </Box>
      </Box>
      <Box className="main">
        <Box className="justifySpaceBetween flex">
          <Box className="imageContainer commonStyle">
            <Typography className="pB10" variant="h4">
              Photos
            </Typography>
            <Box className="imageBox ">
              <ImageCard />
              <ImageCard />
            </Box>
          </Box>
          <Box className="contact commonStyle">
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
        </Box>
        <Box className="justifySpaceBetween flex" alignItems={"flex-start"}>
          <Box width={"60%"}>
            <Box className="availableDays commonStyle leftSection">
              <Typography className="pB10" variant="h4">
                Available Days
              </Typography>
              <Box className="flexBox">
                {days.map((day: string) => (
                  <CircleDaySelector
                    key={day}
                    name={day}
                    selectedDays={[]}
                    onChange={() => {}}
                  />
                ))}
              </Box>
            </Box>

            <Box className="Reviews&Ratings">
              <Typography className="pB10" variant="h4">Reviews & Ratings
</Typography>

            </Box>
          </Box>
          <Box className="address commonStyle">
            <Typography className="pB10" variant="h4">
              Address
            </Typography>

            <Box className="addressCard flex">
              <Box className="flex gap8">
                <Typography className="label">Address:</Typography>
                <Typography className="value">
                  ganpat patil nagar new link road borivali west
                </Typography>
              </Box>

              <Divider />

              <Box className="flex gap8">
                <Typography className="label">Area:</Typography>
                <Typography className="value">ganpat patil nagar</Typography>
              </Box>

              <Divider />

              <Box className="flex gap8">
                <Typography className="label">Landmark:</Typography>
                <Typography className="value">Navkar wood mall</Typography>
              </Box>

              <Divider />

              <Box className="flex gap8">
                <Typography className="label">Pincode:</Typography>
                <Typography className="value">400104</Typography>
              </Box>

              <Divider />

              <Box className="flex gap8">
                <Typography className="label">State:</Typography>
                <Typography className="value">Maharashtra</Typography>
              </Box>

              <Divider />

              <Box className="flex gap8">
                <Typography className="label">City:</Typography>
                <Typography className="value">Mumbai</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="userReview">
        <UserReview />
      </Box>
    </DetailsStyle>
  );
}
