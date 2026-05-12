import React, { useMemo, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  styled,
  Drawer,
  useMediaQuery,
} from "@mui/material";

import SearchWithFilter from "@Components/SearchWithFilter";
import { CrossBigIcon } from "@Icons/index";
import { useNavigate } from "react-router-dom";
import { IKImage } from "imagekitio-react";
import { serviceCategoryI } from "@Utils/interfaces";
import { Loader } from "@Primitives/Loader";
import searchNotFound from "@Assets/Images/search_notfound.svg";
import { ChevronLeftIconDarkBlack } from "@Icons/LeftArrow";
interface PropI {
  open: boolean;
  handleClose: () => void;
  categories: serviceCategoryI[];
  isLoading: boolean;
}
const StyledModalContainer = styled(Drawer)<{ isMobile: boolean }>(
  ({ theme, isMobile }) => ({
    ".MuiPaper-root": {
      width: isMobile ? "100%" : "70%",
      padding: !isMobile && "20px",
    },

    ".card": {
      cursor: "pointer",

      width: isMobile ? "80px" : "80px",

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    ".header": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      marginBottom: theme.spacing(8),

      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "start",
        // gap: theme.spacing(4),
        padding: theme.spacing(2.5, 7.5),
      },
      ".titleBox": {
        display: "flex",
        gap: theme.spacing(5),
        alignItems: "center",
      },
    },

    ".image": {
      width: isMobile ? 45 : 60,
      height: isMobile ? 45 : 60,
      objectFit: "cover",
      borderRadius: isMobile ? theme.spacing(2) : theme.spacing(4),
    },

    ".service-name": {
      marginTop: theme.spacing(3),
      textAlign: "center",
      fontWeight: 500,
      fontSize: isMobile ? theme.spacing(5) : theme.spacing(6),
    },
    ".emptyBox": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: theme.spacing(10),
    },

    ".notFoundImage": {
      width: isMobile ? 180 : 250,
    },
    ".emptyText": {
      marginTop: theme.spacing(5),
      fontWeight: 500,
    },
  }),
);
const PopularCategoriesModal = ({
  open,
  handleClose,
  categories,
  isLoading,
}: PropI) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const filteredCategories = useMemo(() => {
    return categories?.filter((item: serviceCategoryI) =>
      item.title.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [categories, searchText]);

  return (
    <StyledModalContainer
      open={open}
      onClose={handleClose}
      anchor="right"
      isMobile={isMobile}
      //onClick={handleClick}
    >
      <Box className="header">
        <Box className="titleBox">
          <IconButton onClick={handleClose}>
           {isMobile?<ChevronLeftIconDarkBlack />: <CrossBigIcon />}
          </IconButton>

          <Typography variant="h5" fontWeight={600}>
            Popular Categories
          </Typography>
        </Box>

        <Box width={isMobile?"100%":'50%'}>
          <SearchWithFilter
            handleSearchValue={(e: React.ChangeEvent<HTMLInputElement>) => {
              const val = e.target.value;
              setSearchText(val);
            }}
            searchText={searchText}
            isFilter={false}
          />
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        gap={7.5}
        justifyContent={isMobile ? "center" : "normal"}
      >
        {isLoading ? (
          <Box textAlign={"center"} width={"100%"}>
            <Loader type="table" />
          </Box>
        ) : filteredCategories.length > 0 ? (
          filteredCategories?.map((val: serviceCategoryI) => (
            <Box
              className="card"
              key={val._id}
              onClick={() => {
                navigate(`/workers/${val.title.split(" ").join("-")}`);
              }}
            >
              <Box className="imageBox">
                <IKImage
                  loading="lazy"
                  src={val.image_kit_url}
                  alt={val.title}
                  className="image"
                />
              </Box>
              <Typography
                className="service-name"
                variant={isMobile ? "body1" : "h6"}
              >
                {val.title}
              </Typography>
            </Box>
          ))
        ) : (
          <Box className="emptyBox">
            <img
              loading="lazy"
              src={searchNotFound}
              alt="No categories found"
              className="notFoundImage"
            />

            <Typography
              variant={isMobile ? "body1" : "h6"}
              className="emptyText"
            >
              No categories found
            </Typography>
          </Box>
        )}
      </Box>
    </StyledModalContainer>
  );
};

export default PopularCategoriesModal;
