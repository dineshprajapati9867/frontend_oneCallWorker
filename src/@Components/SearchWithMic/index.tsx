import React, { useEffect, useState } from "react";
import {
  Box,
  ClickAwayListener,
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
  TrendingUpIconMui,
} from "@Icons";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { HorizonatDotsLoading, MicAnimation } from "@Primitives/index";
import { hooks } from "@Utils/index";
import { skills } from "@Constants/Home";
import { useLocation, useSearchParams } from "react-router-dom";

interface PropsI {
  onClickOnDropdown: (value: string) => void;
  onChange?: (value: string) => void;
}
const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "relative",
  alignItems: "center",
  ".dropDownBox": {
    border: `1px solid ${theme.misc.darkBlue}`,
    borderRadius: theme.spacing(3),
    marginTop: theme.spacing(2),
    position: "absolute",
    width: "100%",
    background: "#fff",
    padding: theme.spacing(5, 6),
    boxSizing: "border-box",
    overflowY: "auto",
    height: "50vh",
    "&::-webkit-scrollbar": {
      width: "6px",
    },

    "&::-webkit-scrollbar-thumb": {
      background: "#ccc",
      borderRadius: "10px",
    },

    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
  },

  ".title": {
    fontSize: "12px",
    color: "gray",
    marginBottom: theme.spacing(2),
  },

  ".item": {
    display: "flex",
    gap: theme.spacing(6),
    alignItems: "center",
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
    cursor: "pointer",

    "&:hover": {
      background: "#f5f5f5",
    },
  },

  ".iconBox": {
    width: theme.spacing(10),
    height: theme.spacing(10),
    padding: theme.spacing(1, 1.5),
    background: "#e0e0e0",
    borderRadius: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  ".name": {
    fontWeight: 500,
  },

  ".category": {
    fontSize: "12px",
    color: "gray",
  },
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
export default function SearchWithMic({ onClickOnDropdown, onChange }: PropsI) {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const [openDropDown, setOpenDropDown] = useState(false);
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
  console.log(searchText, "searchText")
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
      const searchValue = transcript
        .replace(/[.,!?]/g, "")
        .trim();

      onClickOnDropdown(searchValue);
    }
  }, [listening, transcript]);

  const handleSearch = () => {
    if (!searchText.trim()) return;

    onClickOnDropdown(searchText);
    setOpenDropDown(false);
  };



  useEffect(() => {
    if (location.pathname === "/search") {
      setSearchText(searchParams.get("q") || "");
    } else {
      setSearchText("");
    }
  }, [location.pathname, searchParams]);


  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      ShowInfoSnackBar(
        "Browser doesn't support speech recognition."
      );
    }
  }, [browserSupportsSpeechRecognition]);
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
      <ClickAwayListener onClickAway={() => setOpenDropDown(false)}>
        <Box className="searchInput">
          <CustomInputStyled
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              const value = e.target.value;
              setSearchText(value);
              onChange?.(value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            onFocus={() => setOpenDropDown(true)}
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
                <button className="searchIcon" onClick={handleSearch}>
                  <SearchMuiIcon width={24} height={24} />
                </button>
              </InputAdornment>
            }
          />
          {openDropDown && (
            <Box className="dropDownBox">
              <Typography className="title">TRENDING SEARCHES</Typography>

              {skills.filter((val) => !searchText || val.value.toLowerCase().includes(searchText.trim().toLowerCase())).slice(0, 11).map((item) => (
                <Box
                  key={item.id}
                  className="item"
                  onClick={() => {
                    onClickOnDropdown(item.value);
                    setSearchText(item.value);
                    setOpenDropDown(false);
                  }}
                >
                  <TrendingUpIconMui className="iconBox" fontSize="large" />
                  <Box>
                    <Typography className="name">{item.label}</Typography>
                    <Typography className="category">Category</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </ClickAwayListener>
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
              paddingTop: theme.spacing(10),
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
