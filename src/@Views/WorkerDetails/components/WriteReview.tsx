import StarRating from "@Components/StarRating";
import UploadImage from "@Components/UploadImage";
import { ChevronLeftIconDarkBlack } from "@Icons/LeftArrow";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Address } from "@Primitives/Address";
import React, { useCallback, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import ImageCard from "./ImageCard";
import { hooks } from "@Utils/index";
import { Controller, useForm, useWatch } from "react-hook-form";
import { pattern } from "@Utils/pattern";
const ratingLabels = {
  1: { text: "Terrible", emoji: "😡" },
  2: { text: "Bad", emoji: "😕" },
  3: { text: "Average", emoji: "😐" },
  4: { text: "Good", emoji: "🙂" },
  5: { text: "Excellent", emoji: "😍" },
};
const StyleWrite = styled("form")<{ isMobile: boolean }>(
  ({ theme, isMobile }) => ({
    // padding: isMobile && theme.spacing(0, 10),
    ".fW500": {
      fontWeight: 500,
    },
    ".fS20": {
      fontSize: isMobile ? ` ${theme.spacing(8)}!important` : theme.spacing(10),
    },
    ".mt20": {
      marginTop: theme.spacing(10),
    },
    ".writeReviewBox": {
      ...(isMobile && {
        padding: theme.spacing(5, 5, 5, 2.5),
      }),
      ...(!isMobile && {
        padding: theme.spacing(10, 10, 0, 10),
        paddingLeft: 0,
      }),
    },
    // ".contentData": {
    //   ...(isMobile && {
    //    // height: "calc(100vh - 60px)",
    //    // overflowY: "auto",
    //     marginBottom: theme.spacing(10),
    //   }),
    // },
    ".main": {
      ...(!isMobile&&{
      display:"flex",
      justifyContent:"center"
      })
  
    },
    ".content": {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(10),
    },
    ".header": {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(10),

      " .subHeadingText": {
        fontSize: ` ${theme.spacing(7.5)}!important`,
        color: theme.text.darkGrey,
        marginTop: theme.spacing(2.5),
      },
    },
    ".image": {
      widht: theme.spacing(50),
      borderRadius: theme.spacing(5),
      minHeight: theme.spacing(50),
    },
    ".ratingBox": {
      display: "inline-flex",
      width: "fit-content",
      padding: theme.spacing(5, 9),
      height: theme.spacing(20),
      borderRadius: theme.spacing(10),
      border: `1px solid ${theme.misc.borderColor}`,
      boxSizing: "border-box",
      gap: theme.spacing(5),
      alignItems: "center",
    },
    ".submitBtn": {
      width: isMobile ? "100%" : theme.spacing(120),
      marginBottom: !isMobile && theme.spacing(10),
    },
    ".submitBox": {
      ...(isMobile && {
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 4,
        backgroundColor: theme.misc.lightGrayBG,
        padding: theme.spacing(5, 10),
        boxSizing: "border-box",
      }),
    },
  }),
);
function WriteReview() {
  const [params] = useSearchParams();

  const { id } = useParams();
  const { isCreateReviewLoading, handleCreateReview } = hooks.useMisc();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  const [rating, setRating] = useState(Number(params.get("rating")));
  const location = useLocation();
  const navigate = useNavigate();
  const isModal = location.state?.modal;

  const handleClose = () => {
    navigate(-1);
  };

  const {
    handleSubmit,
    control,
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      rating: Number(params.get("rating")) || 0,
      description: "",
      images: [],
    },
  });
  const images = useWatch({
    control: control,
    name: "images",
  });


  const onSubmit = (data) => {
    handleCreateReview({ ...data, workerId: id });
  };

  const handleRemoveImage = (url: string) => {
  const updatedImages = images.filter(
    (image) => image.url !== url
  );

  setValue("images", updatedImages, {
    shouldValidate: true,
  });
};
  const content = () => {
    return (
      <StyleWrite onSubmit={handleSubmit(onSubmit)} isMobile={isMobile}>
        <Box className="main">
          <Box className="content">
            <Box>
              <Box className="writeReviewBox header">
                {isMobile && (
                  <IconButton onClick={handleClose}>
                    <ChevronLeftIconDarkBlack />
                  </IconButton>
                )}
                <Typography variant="h3" className="fW500">
                  Write Review
                </Typography>
              </Box>
              {isMobile && <Divider />}
            </Box>
            <Box
              className="content contentData"
              padding={isMobile && 7.5}
              paddingTop={0}
            >
              <Box className="header">
                <img className="image" src={params.get("url")} />
                <Box>
                  <Typography variant="h5" className="fS20">
                    {params.get("name")}
                  </Typography>
                  <Typography variant="body1" className="subHeadingText">
                    {params.get("area")}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="h5" className="fW500">
                How would you rate your experience?
              </Typography>
              <Controller
                name="rating"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <StarRating
                    {...field}
                    value={field.value ?? rating}
                    onChange={(e, newValue) => {
                      setRating(newValue);
                      field.onChange(newValue);
                    }}
                  />
                )}
              />

              <Box className="ratingBox">
                <Typography variant="h5" className=" fW500">
                  {ratingLabels[rating]?.text}
                </Typography>
                <span>{ratingLabels[rating]?.emoji}</span>
              </Box>
              <Box className="experience">
                <Typography variant="body1" className="fS20">
                  Tell us about your experience
                </Typography>

                <Controller
                  name="description"
                  control={control}
                  rules={{
                    required: "Address is required",
                    minLength: {
                      value: 20,
                      message: "Address must be at least 20 characters",
                    },
                    pattern: {
                      value: pattern.noSpace,
                      message: "Space not allowed",
                    },
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <Address
                      label=""
                      {...field}
                      minRows={5}
                      placeholder="Tell us about your experience"
                      error={error ? error.message : null}
                    />
                  )}
                />
              </Box>
              <Typography variant="body1" className="fS20 fW500">
                Upload Photos
              </Typography>
              <Controller
                name="images"
                control={control}
                render={({ field }) => <UploadImage {...field} />}
              />

              <Box display={"flex"} flexWrap={"wrap"} gap={5} pb={isMobile?15:0}>
                {images?.map((val: { url: string }) => {
                  return (
                    <ImageCard
                      key={val.url}
                      link={val.url}
                      handleCrossIcon={handleRemoveImage}
                    />
                  );
                })}
              </Box>
              <Box className="submitBox">
                <Button
                  type="submit"
                  disabled={isCreateReviewLoading}
                  className="submitBtn"
                  variant="contained"
                >
                  Submit Review{isCreateReviewLoading && "..."}
                </Button>
              </Box>
            </Box>
          </Box>
    </Box>
      </StyleWrite>
    );
  };

  if (!isMobile) {
    return content();
  }
  return (
    <Drawer
      sx={{
        ".MuiPaper-root": {
          width: "100vw",
        },
      }}
      anchor="right"
      open={isModal && isMobile}
      onClose={handleClose}
    >
      {content()}
    </Drawer>
  );
}

export default WriteReview;
