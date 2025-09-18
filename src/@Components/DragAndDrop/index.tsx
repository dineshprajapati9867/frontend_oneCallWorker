import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { UploadImage } from '@Icons';
import { useSnackBar } from '../../@Utils/hooks';

export interface DragAndDropI {
  isModal?: boolean;
  handleAddImages: (files: any[]) => void;
  subHeaderText?: string;
  allowAllExtension?: boolean;
}

const maxSize = 5242880;

function DragAndDrop({
  isModal,
  handleAddImages,
  subHeaderText,
  allowAllExtension = false,
}: DragAndDropI) {
  const { ShowCautionSnackBar } = useSnackBar();

  const [files, setFiles] = React.useState<any[]>([]);

  const acceptType = allowAllExtension ? `.png, .jpg, .jpeg, .pdf` : `.png, .jpg`;

  /**
   * A custom hook that returns the props for the dropzone component.
   * @returns {object} - The props for the dropzone component.
   */
  const { getRootProps, getInputProps } = useDropzone({
    accept: acceptType,
    maxSize,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
      handleAddImages(acceptedFiles);
    },
    onDropRejected: (err) => {
      if (err[0].errors[0].code === 'file-invalid-type') {
        ShowCautionSnackBar(
          allowAllExtension
            ? `Could not read the selected file. Please upload a valid file!`
            : 'Could not read the selected file. Please upload only JPG or PNG format file!',
        );
      }
      if (err[0].errors[0].code === 'file-too-large') {
        ShowCautionSnackBar('File should not exceed more than 5mb!');
      }
    },
  });

  /**
   * Revokes the object URL for each file in the files array.
   * @param {File[]} files - the files array to revoke the object URL for.
   * @returns None
   */
  React.useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        height: '100%',
        border: `1px dashed ${theme.misc.darkGray}`,
        borderRadius: theme.spacing(4),
        backgroundColor: 'secondary.light',
        padding: theme.spacing(15, 20),
        cursor: 'pointer',
      })}
      {...getRootProps({ className: 'dropzone' })}
    >
      <Typography
        variant='h6'
        sx={(theme) => ({
          fontWeight: 600,
          lineHeight: theme.spacing(10),
          color: 'primary.dark',
        })}
      >
        {!isModal ? `Photos: ${files.length}` : null}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100%',
          textAlign: 'center',
        }}
      >
        <UploadImage />
        <Box>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '125%',
              marginTop: '30px',
            }}
            variant='h6'
          >
            No Photos Found!
          </Typography>
          <Typography
            sx={(theme) => ({
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '145%',
              paddingTop: '8px',
              color: theme.palette.secondary.dark,
            })}
          >
            {subHeaderText || 'Please upload photos using one option from those given below'}
          </Typography>
        </Box>
        <Box
          sx={(theme) => ({
            marginTop: theme.spacing(20),
            backgroundColor: 'primary.contrastText',
            borderRadius: theme.spacing(2),
            padding: theme.spacing(4, 8),
            display: 'flex',
            alignItems: 'center',
            textTransform: 'none',
          })}
        >
          <Typography
            variant='body1'
            sx={(theme) => ({
              color: theme.palette.secondary.dark,
            })}
          >
            Drag and drop files here or
          </Typography>
          <Typography
            variant='body1'
            sx={(theme) => ({
              textDecoration: 'underline',
              marginLeft: theme.spacing(2),
              color: theme.text.lightBlue,
              lineHeight: theme.spacing(9),
            })}
          >
            Select files
          </Typography>
        </Box>
        <Box
          sx={(theme) => ({
            marginTop: theme.spacing(9),
            padding: theme.spacing(4, 8),
            display: 'flex',
            alignItems: 'center',
            textTransform: 'none',
          })}
        >
          <Typography
            variant='body1'
            sx={(theme) => ({
              lineHeight: theme.spacing(11),
              color: theme.palette.secondary.dark,
            })}
          >
            {allowAllExtension ? 'Format: JPG, PNG, JPEG, PDF.' : 'Format: JPG, PNG.'} Max Size: 5MB
          </Typography>
        </Box>

        <input {...getInputProps()} />
      </Box>
    </Box>
  );
}

export default DragAndDrop;
