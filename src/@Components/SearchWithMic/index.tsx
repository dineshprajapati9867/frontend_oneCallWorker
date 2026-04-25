import React, { useEffect, useState } from "react";
import {
  Box,
  Dialog,
  Drawer,
  IconButton,
  Input,
  InputAdornment,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  BlackSmallCrossIcon,
  CloseIcon,
  MicMuiIcon,
  SearchMuiIcon,
} from "@Icons";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { HorizonatDotsLoading, MicAnimation } from "@Primitives/index";
import { hooks } from "@Utils/index";

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  ".searchInput": {
    height: theme.spacing(20),
    width: "100%",
  },
  ".filterIcon": {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    marginLeft: theme.spacing(8),
  },
}));

const CustomInputStyled = styled(Input)(({ theme }) => ({
  ...theme.typography.inputValue,
  height: "100%",
  width: "100%",
  border: `1px solid ${theme.misc.borderColor}`,
  borderRadius: theme.spacing(3),
  padding: theme.spacing(5, 4),
  fontSize: "14px",
  letterSpacing: theme.spacing(0.5),
  lineHeight: theme.spacing(10),
  color: theme.misc.inputPlaceholder,
  "&:before, &:after, &:hover:not(.Mui-disabled):before": {
    border: "0",
  },
  "&.Mui-disabled": {
    opacity: 0.6,
  },
  "&.Mui-focused": {
    backgroundColor: theme.palette.primary.contrastText,
    border: `1px solid ${theme.misc.darkBlue}`,
  },
  "&.Mui-error": {
    border: `2px solid ${theme.misc.darkRed}`,
  },
  ".MuiInputAdornment-positionEnd": {
    display: "flex",
    gap: theme.spacing(0.5),
    marginRight: "-2px",
  },
  ".searchIcon": {
    display: "flex",
    borderRadius: theme.spacing(2),
    cursor: "pointer",
    backgroundColor: theme.text.primary,
    color: theme.palette.primary.contrastText,
  },
  ".micIcon": {
    color: theme.misc.darkBlue,
    cursor: "pointer",
  },
}));

/**
 * The main component for the search with filter component.
 * @param {SearchWithFilterPropsI} props - The props for the component.
 * @returns A React component.
 */
export default function SearchWithMic() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { ShowInfoSnackBar } = hooks.useSnackBar();
  if (!browserSupportsSpeechRecognition) {
    return alert("Browser doesn't support speech recognition.");
  }
  const handleMicClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((track) => track.stop());
      setOpen(true);
      resetTranscript();
      SpeechRecognition.startListening();
    } catch (error) {
      ShowInfoSnackBar(
        "Permission denied. Please give access to microphone and try again.",
      );
      // }
    }
  };

  const handleClose = () => {
    setOpen(false);
    SpeechRecognition.stopListening();
  };

  useEffect(() => {
    if (listening) {
      setSearchText(transcript);
    }
    if (!listening && transcript) {
      setOpen(false);
    }
  }, [listening, transcript]);

  const renderData = () => {
    return (
      <>
        <IconButton
          sx={{
            top: "5px",
            right: " 10px",
            position: "absolute",
            cursor: "pointer",
            zIndex: 199,
          }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <Typography
          textAlign={"center"}
          fontSize={22}
          fontWeight={500}
          className="listening"
        >
          {listening
            ? "Listening....."
            : "Didn’t catch that.Try speaking again."}
        </Typography>
        {listening ? (
          <Box
            position={"absolute"}
            top={0}
            left={0}
            className="HorizonatDotsLoading"
          >
            <HorizonatDotsLoading />
          </Box>
        ) : (
          <Box textAlign={"center"}>
            <IconButton
              sx={(theme) => ({
                height: theme.spacing(60),
                width: theme.spacing(60),
                marginTop: theme.spacing(10),
              })}
              onClick={handleMicClick}
            >
              <MicAnimation />
            </IconButton>

            <Typography
              onClick={handleMicClick}
              fontSize={14}
              fontWeight={600}
              mt={5}
              sx={{ cursor: "pointer" }}
            >
              Click here to Speak
            </Typography>
          </Box>
        )}
      </>
    );
  };
  return (
    <MainBox>
      <Box className="searchInput">
        <CustomInputStyled
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          endAdornment={
            <InputAdornment position="end">
              {searchText && (
                <IconButton onClick={() => setSearchText("")}>
                  <BlackSmallCrossIcon />
                </IconButton>
              )}
              <IconButton onClick={handleMicClick}>
                <MicMuiIcon className="micIcon" />
              </IconButton>
              <button className="searchIcon">
                <SearchMuiIcon width={24} height={24} />
              </button>
            </InputAdornment>
          }
        />
      </Box>
      {isMobile ? (
        <Drawer
          open={open}
          onClose={handleClose}
          anchor="bottom"
          sx={(theme) => ({
            "& .MuiDrawer-paper": {
              borderRadius: "15px 15px 0 0",
              height: theme.spacing(100),
              width: "100%",
              paddingTop:theme.spacing(10)
            },
          })}
        >
          {renderData()}
        </Drawer>
      ) : (
        <Dialog
          open={open}
          onClose={handleClose}
          sx={(theme) => ({
            ".MuiPaper-root": {
              height: theme.spacing(130),
              width: theme.spacing(275),
              padding: theme.spacing(15),
              borderRadius: theme.spacing(7.5),
              margin: theme.spacing(0),
              boxSizing: "border-box",
              overflow: "hidden",
            },
          })}
        >
          {renderData()}
        </Dialog>
      )}
    </MainBox>
  );
}
