import { EnquiryCard, WorkerCard } from "@Components/Card";
import WorkerCardSkeleton from "@Components/Card/WorkerCardSkelton";
import { Box, Button, styled, Typography, useMediaQuery } from "@mui/material";
import { hooks, interfaces } from "@Utils/index";
import React from "react";
import { useSearchParams } from "react-router-dom";
import noSearchResult from '@Assets/Images/error-no-search-results_2353c5.png'
const WorkerListStyle = styled(Box)<{
  hideEnquiry: boolean;
  isMobile: boolean;
}>(({ theme, hideEnquiry, isMobile }) => ({
  padding: !isMobile && theme.spacing(10),
  ".Card": {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    gap: theme.spacing(10),
  },
  ".CardContainer": {
    display: "flex",
    flexDirection: "column",
    gap: !isMobile && theme.spacing(10),
    //width: hideEnquiry ? "calc(100% - 336px)" : "100%",
  },
  '.LoadMoreBtn': {
    width: "100%",
    margin: theme.spacing(10)
  }
}));
const WorkerList = () => {
  const [searchParams] = useSearchParams();
  const skill = searchParams.get("q") || "";
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"))
  const { useSearchWorkersBySkills } = hooks.useMisc()
  const {
    data: listWorkersData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading
  } = useSearchWorkersBySkills(skill, 10);

  const workers =
    listWorkersData?.pages.flatMap(
      (page) => page.workers
    ) || [];


  return (
    <WorkerListStyle hideEnquiry={!isMobile} isMobile={isMobile}>
      {workers.length > 0 && <Typography mb={8} variant="h4">Popular {searchParams.get("q")}</Typography>
      }
      <Box className="Card">
        <Box className="CardContainer" width={`${!isMobile && workers.length > 0 ? "calc(100% - 336px)" : "100%"}`}>
          {isLoading ? Array.from({ length: 10 }).map((_, index) => (
            <WorkerCardSkeleton key={index} />
          )) :
            workers.length ?
              workers?.map((val: interfaces.createProfileI) => (
                <WorkerCard data={val} key={val._id} />
              )) : <Box textAlign={'center'}>

                <img src={noSearchResult} alt="Search not found" />
                <Typography variant="h3" fontWeight={500} mt={10} mb={5}>Sorry, no results found!</Typography>
                <Typography variant="body1"
                  sx={(theme) => ({
                    fontSize: "20px",
                    color: theme.text.darkGrey
                  })}
                >Please check your spelling or search again with a different word</Typography>
              </Box>}

          {hasNextPage && (
            <Button
              disabled={isFetchingNextPage}
              onClick={() => fetchNextPage()}
              className="loadMoreBtn"
              variant="outlined"
            >
              {isFetchingNextPage ? "Loading..." : "Load More"}
            </Button>
          )}
        </Box>
        {(!isMobile && workers.length > 0) && <EnquiryCard />}
      </Box>

    </WorkerListStyle>
  );
};

export default WorkerList;
