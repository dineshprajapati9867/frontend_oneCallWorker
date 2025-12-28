import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, Typography, SxProps, FormHelperText } from '@mui/material';

import { useDropzone } from 'react-dropzone';
import { Variant } from '@mui/material/styles/createTypography';
import { DragAndDropContainerStyles ,DragAndDropEditContainer} from '@Constants/CommonStyledComponents.tsx'; 

import TextInput from '../../@Primitives/Input/TextInput/TextInput';
import { ErrorIcon, InputCloseIcon, DeleteIcon, PaperClipIcon } from '../../@Assets/@Icons';

export interface ImageAttachmentI {
  onChange: (files: {}) => void;
  label?: string;
  labelVariant?: Variant;
  error?: boolean;
  helperText?: string | null;
  labelsx?: SxProps;
  formData?: string | null;
  customer?: boolean;
  disabled?: boolean;
}

const BoxContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(20),
  '.customerMainWrapper': {
    border: '1px solid',
    padding: theme.spacing(5),
    borderRadius: '5px',
    backgroundColor: theme.misc.lightAsSilver,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
  },
  ...DragAndDropContainerStyles(theme),
}));

/**
 * A component that allows the user to upload a image.
 * @param {ImageAttachmentI} props - The props for the component.
 * @returns A component that allows the user to upload a image.
 */
function ImageAttachment({
  onChange,
  label,
  labelVariant,
  labelsx,
  helperText,
  error,
  formData,
  customer,
  disabled = false,
}: ImageAttachmentI) {
  const [file, setFile] = React.useState<any[]>([]);
  const [removedDocument, setRemovedDocument] = React.useState(false);

  /**
   * A React hook that returns a dropzone component that accepts a single image.
   * @param {Object} options - The options for the dropzone component.
   * @returns {Object} - The dropzone component.
   */
  const { getRootProps, getInputProps } = useDropzone({
    accept: ['.jpeg', '.jpg', '.png'],
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
  });

  /**
   * Handles the deletion of a image from the file array.
   * @returns None
   */
  const handleDelete = () => {
    const filterd = file.filter((d) => d[0] !== undefined);
    setFile(filterd);
    setRemovedDocument(true);
    onChange('');
  };

  /**
   * Returns true if the upload image is not visible.
   * @returns {boolean} - true if the upload image is not visible.
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
    <BoxContainer>
      {label && (
        <Typography
          className='title'
          variant={labelVariant || 'subtitle2'}
          color='secondary.dark'
          sx={labelsx}
        >
          {label}
        </Typography>
      )}

      {showUploadDoc() ? (
        <Box>
          <Box {...getRootProps({ className: 'dropzone' })}>
            <Box
              className='customerMainWrapper'
              sx={(theme) => ({
                borderColor: error
                  ? `${theme.palette.error.main} !important`
                  : `${theme.misc.darkGray} !important`,
              })}
            >
              <Typography className='subtitle' variant='body1'>
                Upload File
              </Typography>
              <PaperClipIcon />
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
              variant='outlined'
              size='medium'
              value={file[0]?.name || formData}
              disabled={disabled}
              preContent={
                <Box onClick={handleDelete} className='iconWrap'>
                  {/* <FileIcon /> */}
                </Box>
              }
              postContent={
                !disabled &&
                (customer ? (
                  <Box className='iconWrap'>
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
        </DragAndDropEditContainer>
      )}
    </BoxContainer>
  );
}

export default ImageAttachment;
