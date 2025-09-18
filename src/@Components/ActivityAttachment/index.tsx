/* eslint-disable react/jsx-no-useless-fragment */
import { PaperClipIcon } from '@Assets/@Icons/PaperClip';
import { hooks } from '@Utils';
import { Box, IconButton } from '@mui/material';
import * as React from 'react';
import { useDropzone } from 'react-dropzone';

interface PropsI {
  onChange: (file: any) => void;
}

/**
 * A React component that renders a dropzone for uploading files.
 * @param {PropsI} props - The props for the component.
 * @returns A React component that renders a dropzone for uploading files.
 */
export function ActivityAttachment({ onChange }: PropsI) {
  const [file, setFile] = React.useState<any[]>([]);
  const { ShowErrorSnackBar, ShowCautionSnackBar } = hooks.useSnackBar();

  /**
   * A React hook that returns the props for the dropzone component.
   * @param {Object} props - The props to pass to the dropzone component.
   * @returns {Object} The props to pass to the dropzone component.
   */
  const { getRootProps, getInputProps } = useDropzone({
    accept: `.png, .jpg`,
    multiple: true,
    onDrop: (acceptedFiles, fileRejections) => {
      setFile(
        acceptedFiles.map((currentFile) =>
          Object.assign(file, {
            preview: URL.createObjectURL(currentFile),
          }),
        ),
      );
      onChange(acceptedFiles);
      if (fileRejections?.length > 5) {
        ShowErrorSnackBar('You can select only 5 images!');
      }
    },
    onDropRejected: (err) => {
      if (err[0].errors[0].code === 'file-invalid-type') {
        ShowCautionSnackBar('Only JPG or PNG format files are accepted');
      }
    },
    maxFiles: 5,
  });

  return (
    <Box {...getRootProps({ className: 'dropzone' })}>
      <IconButton>
        <PaperClipIcon />
      </IconButton>
      <input {...getInputProps()} />
    </Box>
  );
}
