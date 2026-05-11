import React from "react";
import {
  Box,
  Skeleton,
  styled,
  useMediaQuery,
} from "@mui/material";

const StyledSkeletonCard = styled(Box)<{
  isMobile: boolean;
}>(({ isMobile }) => ({
  width: isMobile ? "22%" : "150px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ServiceCategoryCardSkeleton = () => {
  const isMobile = useMediaQuery((theme) =>
    theme.breakpoints.only("xs"),
  );

  return (
    <StyledSkeletonCard isMobile={isMobile}>
      <Skeleton
        variant="rounded"
        width={isMobile ? 45 : 120}
        height={isMobile ? 45 : 120}
      />

      <Skeleton
        variant="text"
        width={isMobile ? 55 : 100}
        height={30}
        sx={{
          marginTop: 1,
        }}
      />
    </StyledSkeletonCard>
  );
};