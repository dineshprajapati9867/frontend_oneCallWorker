import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, Typography, SxProps, FormHelperText } from '@mui/material';

import { useDropzone } from 'react-dropzone';
import { Variant } from '@mui/material/styles/createTypography';
import {
  DragAndDropContainerStyles,
  DragAndDropEditContainer,
} from '@Constants/CommonStyledComponents';
import TextInput from '@Primitives/Input/TextInput/TextInput';
import {
  ErrorIcon,
  FileIcon,
  InputCloseIcon,
  // DownloadIcon,
  DeleteIcon,
} from '@Assets/@Icons';
import { hooks } from '@Utils';

export interface DragAndDropDocumentsI {
  onChange: (files: {}) => void;
  label?: string;
  labelVariant?: Variant;
  error?: boolean;
  helperText?: string | null;
  labelsx?: SxProps;
  formData?: any;
  customer?: any;
  disabled?: boolean;
  className?: any;
  fileType?: string;
}

const BoxContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(20),
  '.mainWrapper': {
    border: '1px dashed',
    padding: theme.spacing(19),
    borderRadius: '5px',
    backgroundColor: theme.palette.secondary.light,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '.customerMainWrapper': {
    border: '1px dashed',
    padding: theme.spacing(19),
    borderRadius: '5px',
    backgroundColor: theme.palette.primary.contrastText,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ...DragAndDropContainerStyles(theme),
}));

/**
 * A component that allows the user to upload a document.
 * @param {DragAndDropDocumentsI} props - The props for the component.
 * @returns A component that allows the user to upload a document.
 */
function DragAndDropDocuments({
  onChange,
  label,
  labelVariant,
  labelsx,
  helperText,
  error,
  formData,
  customer,
  disabled = false,
  className,
  fileType = 'application/pdf',
}: DragAndDropDocumentsI) {
  const [file, setFile] = React.useState<any[]>([]);
  const [removedDocument, setRemovedDocument] = React.useState(false);

  const { ShowCautionSnackBar } = hooks.useSnackBar();

  /**
   * A React hook that returns a dropzone component that accepts a single file.
   * @param {Object} options - The options for the dropzone component.
   * @returns {Object} - The dropzone component.
   */
  const { getRootProps, getInputProps } = useDropzone({
    accept: fileType === 'profile' ? '.png, .jpg' : 'application/pdf',
    multiple: false,
    onDrop: (acceptedFiles) => {
      setFile(
        acceptedFiles.map((_file) =>
          Object.assign(_file, {
            preview: URL.createObjectURL(_file),
          }),
        ),
      );
      onChange(acceptedFiles[0]);
      setRemovedDocument(true);
    },
    onDropRejected: (err) => {
      if (err[0].errors[0].code === 'file-invalid-type') {
        ShowCautionSnackBar(
          `Could not read the selected file. Please upload only ${
            fileType === 'profile' ? 'JPG or PNG' : 'PDF'
          }  format file!`,
        );
      }
      if (err[0].errors[0].code === 'file-too-large') {
        ShowCautionSnackBar('File should not exceed more than 5mb!');
      }
    },
  });

  /**
   * Handles the deletion of a document from the file array.
   * @returns None
   */
  const handleDelete = () => {
    const filterd = file.filter((d) => d[0] !== undefined);
    setFile(filterd);
    setRemovedDocument(true);
    onChange('');
  };

  /**
   * Returns true if the upload document is not visible.
   * @returns {boolean} - true if the upload document is not visible.
   */
  const showUploadDoc = () => {
    if (removedDocument) {
      if (file[0]) {
        return false;
      }
      return true;
    }

    if (!formData && !file[0]) {
      return true;
    }
    return false;
  };

  return (
    <BoxContainer className={className}>
      {label && (
        <Typography
          className='title'
          variant={labelVariant || 'subtitle2'}
          color='secondary.dark'
          // marginBottom={4.5}
          sx={labelsx}
        >
          {label}
        </Typography>
      )}

      {showUploadDoc() ? (
        <Box>
          <Box {...getRootProps({ className: 'dropzone' })}>
            <Box
              className={customer ? 'customerMainWrapper' : 'mainWrapper'}
              sx={(theme) => ({
                borderColor: error
                  ? `${theme.palette.error.main} !important`
                  : `${theme.misc.darkGray} !important`,
              })}
            >
              <Typography className='subtitle' variant='body1'>
                Drag and drop files here or{' '}
                <Typography className='colorSubtitle' variant='body1' component='p' paddingLeft={4}>
                  Select files
                </Typography>
              </Typography>
            </Box>
            <input disabled={disabled} {...getInputProps()} />
          </Box>
          {error && helperText ? (
            <FormHelperText
              sx={() => ({
                display: 'flex',
                marginLeft: 0,
              })}
            >
              <ErrorIcon />{' '}
              <Typography
                variant='body2'
                component='span'
                sx={(theme) => ({ marginLeft: '2.5px', color: theme.palette.error.main })}
              >
                {helperText}
              </Typography>
            </FormHelperText>
          ) : null}
        </Box>
      ) : (
        <DragAndDropEditContainer>
          <Box className='documentWrap'>
            <TextInput
              type='text'
              // placeholder="Enter Account Number"
              variant='outlined'
              size='medium'
              value={file[0]?.name || formData}
              disabled={disabled}
              preContent={
                <Box onClick={handleDelete} className='iconWrap'>
                  <FileIcon />
                </Box>
              }
              postContent={
                !disabled &&
                (customer ? (
                  <Box className='iconWrap'>
                    {/* <Box className='innerIconWrap'>
                      <DownloadIcon />
                    </Box> */}
                    <Box onClick={handleDelete} className='innerIconWrap'>
                      <DeleteIcon />
                    </Box>
                  </Box>
                ) : (
                  <Box onClick={handleDelete} className='iconWrap'>
                    <InputCloseIcon />
                  </Box>
                ))
              }
              sx={(theme) => ({
                '.MuiInputBase-root': {
                  padding: theme.spacing(0, 5),
                },
              })}
            />
          </Box>
          {/* <Box className="editWrapper">
            <Box
              {...getRootProps({ className: "dropzone" })}
              className="avatarOptions"
            >
              <Typography variant="button" className="replace">
                {" "}
                Replace{" "}
              </Typography>
              <input {...getInputProps()} />
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={(theme) => ({ color: theme.misc.borderColor })}
            />
            <Box onClick={handleDelete} className="avatarOptions">
              <Typography variant="button" className="delete">
                {" "}
                Delete{" "}
              </Typography>
            </Box>
          </Box> */}
        </DragAndDropEditContainer>
      )}
    </BoxContainer>
  );
}

export default DragAndDropDocuments;
