import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, Typography, FormHelperText } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { DragAndDropContainerStyles ,DragAndDropEditContainer} from '@Constants/CommonStyledComponents.tsx'; 

import { hooks } from '@Utils';
import TextInput from '../../@Primitives/Input/TextInput/TextInput';
import {
  ErrorIcon,
  FileIcon,
  InputCloseIcon,
  // DownloadIcon,
  DeleteIcon,
} from '../../@Assets/@Icons';

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

export interface DragAndDropMultiFormatI {
  onChange: string | ChangeEvent<Element>;
  label?: string;
  error?: boolean;
  helperText?: string | null;
  disabled?: boolean;
  customer?: any;
  formData?: string | null;
}

function DragAndDropMultiFormat({
  onChange,
  label,
  error,
  helperText,
  disabled = false,
  customer,
  formData,
}: DragAndDropMultiFormatI) {
  const [file, setFile] = React.useState<any[]>([]);
  const [removedDocument, setRemovedDocument] = React.useState(false);
  const { ShowApiErrorSnackBar } = hooks.useSnackBar();

  const { getRootProps, getInputProps } = useDropzone({
    accept: ['.pdf', '.png', '.jpg', '.jpeg'],
    multiple: false,
    onDrop: (acceptedFiles) => {
      const filesWithoutFolders = acceptedFiles.filter((fileType) => fileType.type !== 'directory');
      if (filesWithoutFolders.length > 0) {
        setFile(
          filesWithoutFolders.map((_file) =>
            Object.assign(_file, {
              preview: URL.createObjectURL(_file),
            }),
          ),
        );
        onChange(filesWithoutFolders[0]);
        setRemovedDocument(true);
      } else {
        ShowApiErrorSnackBar('The uploaded file format is invalid!');
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
    <BoxContainer>
      {label && (
        <Typography variant='subtitle2' color='secondary.dark'>
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
        <Box>
          {file && (
            <Typography variant='body2'>
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
                        <FileIcon />
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
            </Typography>
          )}
        </Box>
      )}
    </BoxContainer>
  );
}

export default DragAndDropMultiFormat;
