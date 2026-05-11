import { styled, Box } from "@mui/material";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import { useDropzone } from "react-dropzone";
import { hooks } from "@Utils/index";
import React, { memo } from "react";
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

interface PropsI {
  onChange?: (files: any[]) => void;
}
const maxSize = 5242880;

function UploadImage({ onChange}: PropsI) {
  const { ShowCautionSnackBar } = hooks.useSnackBar();

  const { getRootProps, getInputProps } = useDropzone({
    accept: `.png, .jpg`,
    multiple: true,
    maxSize,
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles.map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));

       onChange?.(newFiles);
    },
    onDropRejected: (err) => {
      if (err[0].errors[0].code === "file-too-large") {
        ShowCautionSnackBar("File should not exceed more than 5mb!");
      }
      if (err[0].errors[0].code === "file-invalid-type") {
        ShowCautionSnackBar(
          "Could not read the selected file. Please upload only JPG or PNG format file!",
        );
      }
    },
  });

  return (
    <Box {...getRootProps()}>
      <UploadContainer>
        <AddAPhotoOutlinedIcon />
      </UploadContainer>

      <input {...getInputProps()} />
    </Box>
  );
}

export default memo(UploadImage);
