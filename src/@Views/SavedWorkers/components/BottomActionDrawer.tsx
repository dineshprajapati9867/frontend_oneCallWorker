import React from "react";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { BlackSmallCrossIcon } from "@Icons/CrossIcon";
import { CopyIcon, CrossBigIcon } from "@Icons/index";
interface propsI {
  open: boolean;
  onClose: () => void;
}
export default function BottomActionDrawer({ open, onClose }: propsI) {
  const listItems = [
    {
      id: 1,
      name: "Unsave",
      icon: <CrossBigIcon  width={20} height={20}/>,
    },
    {
      id: 2,
      name: " Copy Link",
      icon: <CopyIcon />,
    },
  ];
  return (
    <Drawer
      anchor="bottom"
      open={true}
      onClose={onClose}
      sx={{
        ".MuiPaper-root": {
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          padding: "20px",
        },
      }}
    >
      {listItems.map((val) => {
        return (
          <>
            <Box display={"flex"} alignItems={"center"} gap={10} pb={4}>
              <IconButton>
                {val.icon}
              </IconButton>
              <Typography variant="h6" fontWeight={400}>{val.name}</Typography>
            </Box>
          </>
        );
      })}
    </Drawer>
  );
}
