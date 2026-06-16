import { useState } from "react";
import {
  WhiteBackIcon,
  DownloadWhiteIcon,
  SliderWhiteLeftIcon,
  SliderWhiteRightIcon,
} from "@Icons";
import {
  Box,
  Dialog,
  IconButton,
  styled,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import ImageCard from "@Views/WorkerDetails/components/ImageCard";
import { handleDownloadImage } from "@Utils/helpers";
interface AttachmentI {
  url: string;
  file: any;
}
interface PropsI {
  index?: number;
  open: boolean;
  close: () => void;
  previewImageUrl: AttachmentI[];
}

const ImagePreviewModal = styled(Dialog)<{ isMobile: boolean }>(
  ({ theme, isMobile }) => ({
    ".MuiPaper-root": {
      backgroundColor: "rgba(31, 31, 31, 0.8)",
      overflow:"hidden",
    },
    ".left-arrow": {
      position: "fixed",
      top: "50%",
      left: "5%",
    },
    ".right-arrow": {
      position: "fixed",
      top: "50%",
      right: "5%",
    },
    ".image_preview_header": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background:
        "linear-gradient(to bottom,rgba(0,0,0,.65) 0%,transparent 100%)",
      padding: isMobile ? theme.spacing(2.5, 5, 0) : theme.spacing(15, 30, 0),
      ".header_content": {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(6),
      },
    },
    ".preview_content": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100%",
      width:"100%"
    },

    ".image_cards": {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(isMobile ? 1 : 4),
      position: "absolute",
      bottom: 0,
      width: "100%",
      overflowX: "auto",
      "&::-webkit-scrollbar": {
        height: theme.spacing(isMobile ? 1.5 : 3),
      },
      "&::-webkit-scrollbar-thumb": {
        background: "white",
        borderRadius: "5px",
      },
    },
    ".selected_image": {
      borderRadius: theme.spacing(2.5),
    },
  }),
);

export function ImagePreview({ index, open, close, previewImageUrl }: PropsI) {
  const [currentImage, setCurrentImage] = useState(Number(index));
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  const nextImage = () => {
    const nextIndex = Number(currentImage + 1) % previewImageUrl.length;
    setCurrentImage(Number(nextIndex));
  };

  const prevImage = () => {
    const prevIndex =
      (currentImage + previewImageUrl.length - 1) % previewImageUrl.length;
    setCurrentImage(prevIndex);
  };


  return (
    <ImagePreviewModal
      open={open}
      onClose={close}
      fullScreen
      isMobile={isMobile}
    >
      <Box className="image_preview_header">
        <IconButton onClick={close}>
          <WhiteBackIcon />
        </IconButton>
        <Box className="header_content">
          <IconButton />
          <IconButton
            onClick={() =>
              handleDownloadImage(previewImageUrl[currentImage]?.url)
            }
          >
            <DownloadWhiteIcon />
          </IconButton>
        </Box>
      </Box>
      {previewImageUrl.length > 1 && currentImage !== 0 && (
        <IconButton onClick={prevImage} className="left-arrow arrow">
          <SliderWhiteLeftIcon />
        </IconButton>
      )}
      <Box className="preview_content">
        <img
          alt=""
          src={previewImageUrl[currentImage]?.url}
          className="selected_image"
          style={{
            width: isMobile ? "100%" : "auto",
           // height: isMobile ? "100%" : `70%`,
            height: "100%" ,
          }}
        />

        <Box className="image_cards">
          {previewImageUrl.map((val, i) => (
            <ImageCard
              handleClickImage={() => setCurrentImage(i)}
              link={val.url}
            />
          ))}
        </Box>
      </Box>
      {previewImageUrl.length > 1 &&
        previewImageUrl.length - 1 !== currentImage && (
          <IconButton onClick={nextImage} className="right-arrow arrow">
            <SliderWhiteRightIcon />
          </IconButton>
        )}
    </ImagePreviewModal>
  );
}
