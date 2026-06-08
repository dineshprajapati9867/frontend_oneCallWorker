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
    value?: any[];
  onChange?: (files: any[]) => void;
}
const maxSize = 10 * 1024 * 1024;

function UploadImage({ onChange,value}: PropsI) {
  const { ShowCautionSnackBar } = hooks.useSnackBar();

  const { getRootProps, getInputProps } = useDropzone({
    accept: ".png, .jpg, .jpeg",
    multiple: true,
    maxSize,
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles.map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));

       onChange?.([...(value || []), ...newFiles]);
    },
    onDropRejected: (err) => {
      if (err[0].errors[0].code === "file-too-large") {
        ShowCautionSnackBar("File should not exceed more than 10mb!");
      }
      if (err[0].errors[0].code === "file-invalid-type") {
        ShowCautionSnackBar(
          "Could not read the selected file. Please upload only JPG or PNG or JPEG format file!",
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
