import { styled, Box, Input } from "@mui/material";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import React, { useRef } from "react";


const UploadContainer = styled(Box)(({ theme }) => ({
  width: theme.spacing(40),
  height: theme.spacing(40),
  border: `1px dashed ${theme.palette.primary.main}`,
  borderRadius: theme.spacing(3),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",

  "& svg": {
    fontSize: 40,
    color: theme.palette.primary.main,
  },
}));

interface PropsI{
    onChange:(e: React.ChangeEvent<HTMLInputElement>)=>void
}

function UploadImage({ onChange }: PropsI) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <UploadContainer onClick={handleClick}>
        <AddAPhotoOutlinedIcon />
      </UploadContainer>

      {/* hidden input */}
      <input
        type="file"
        hidden
        ref={inputRef}
        onChange={onChange}
      />
    </>
  );
}

export default UploadImage;