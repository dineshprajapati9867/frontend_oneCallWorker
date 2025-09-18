import * as React from 'react';
import Box from '@mui/material/Box';
import { Avatar, Divider, FormHelperText, styled, Typography } from '@mui/material';

import { useDropzone } from 'react-dropzone';
import { ErrorIcon } from '@Icons';
import { hooks } from '@Utils';

export interface DragAndDropLogoI {
  onChange: (files: {}) => void;
  label?: string;
  error?: boolean;
  helperText?: string | null;
  displayPicture?: any;
  isHidden?: boolean;
  hideReplace?: boolean;
}

const BoxContainer = styled(Box)(({ theme }) => ({
  '.dropzone': {
    width: '175px',
    height: '175px',
    border: '1px dashed #B0B0B0',
    borderRadius: '5px',
    backgroundColor: theme.palette.secondary.light,
    padding: theme.spacing(21, 8, 12.5, 7),
    cursor: 'pointer',
  },
  '.mainWrapper': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    textAlign: 'center',
  },
  '.subtitle': {
    color: theme.palette.secondary.dark,
    fontWeight: 400,
    marginBottom: theme.spacing(10),
  },
  '.colorSubtitle': {
    color: theme.misc.selectedBlue,
    fontWeight: 400,
  },
  '.body2': {
    color: theme.misc.inactive,
    lineHeight: '145%',
  },
}));

const EditContainer = styled(Box)(({ theme }) => ({
  '.profileAvatar': {
    width: '175px',
    height: '175px',
    borderRadius: '5px',
    marginBottom: theme.spacing(4),
  },
  '.avatarWrap': {
    width: '175px',
    height: '175px',
    cursor: 'pointer',
    marginBottom: theme.spacing(4),
  },
  '.editWrapper': {
    display: 'flex',
    marginBottom: theme.spacing(10),
  },
  '.replace': {
    color: theme.misc.statusBlue,
    textTransform: 'none',
    paddingRight: theme.spacing(5),
  },
  '.delete': {
    color: theme.misc.cardRed,
    textTransform: 'none',
    paddingLeft: theme.spacing(5),
  },
  '.avatarOptions': {
    width: theme.spacing(43.5),
    textAlign: 'center',
    cursor: 'pointer',
  },
}));

const maxSize = 5242880;

/**
 * A component that allows the user to upload a picture to their profile.
 * @param {DragAndDropLogoI} props - The props for the component.
 * @returns A component that allows the user to upload a picture to their profile.
 */
function DragAndDropLogo({
  onChange,
  label,
  displayPicture,
  error,
  helperText,
  isHidden = true,
  hideReplace = true,
}: DragAndDropLogoI) {
  const [file, setFile] = React.useState<any[]>([]);
  const [removedLogoPicture, setRemovedLogoPicture] = React.useState(false);
  const { ShowCautionSnackBar } = hooks.useSnackBar();

  /**
   * A custom hook that creates a dropzone that accepts images.
   * @param {Object} options - The options for the dropzone.
   * @returns {Object} - The props for the dropzone.
   */
  const { getRootProps, getInputProps } = useDropzone({
    accept: `.png, .jpg`,
    maxSize,
    multiple: false,
    onDrop: (acceptedFiles) => {
      setFile(
        acceptedFiles.map((currentFile) =>
          Object.assign(file, {
            preview: URL.createObjectURL(currentFile),
          }),
        ),
      );
      onChange(acceptedFiles[0]);
      setRemovedLogoPicture(true);
    },
    onDropRejected: (err) => {
      if (err[0].errors[0].code === 'file-invalid-type') {
        ShowCautionSnackBar(
          'Could not read the selected file. Please upload only JPG or PNG format file!',
        );
      }
      if (err[0].errors[0].code === 'file-too-large') {
        ShowCautionSnackBar('File should not exceed more than 5mb!');
      }
    },
  });

  const handleDelete = () => {
    const filterd = file.filter((d) => d[0] !== undefined && d[1] !== undefined);
    setFile(filterd);
    setRemovedLogoPicture(true);
    onChange('');
  };

  const showUploadLogoPic = () => {
    if (removedLogoPicture) {
      if (file[0]) {
        return false;
      }
      return true;
    }
    if (displayPicture?.path) {
      displayPicture = { ...displayPicture, url: URL.createObjectURL(displayPicture) };
      return false;
    }
    if (!displayPicture?.url && !file[0]) {
      return true;
    }
    return false;
  };

  return (
    <BoxContainer>
      {label && (
        <Typography
          variant='subtitle2'
          color='secondary.dark'
          sx={(theme) => ({ mb: theme.spacing(4.5) })}
        >
          {label}
        </Typography>
      )}

      {showUploadLogoPic() ? (
        <Box {...getRootProps({ className: 'dropzone' })}>
          <Box>
            <Typography className='subtitle' variant='subtitle2'>
              Drag and Drop to upload
            </Typography>
            <Box display='flex' justifyContent='space-evenly'>
              <Typography className='subtitle' variant='subtitle2'>
                the file or
              </Typography>
              <Typography className='colorSubtitle' variant='subtitle2' component='p'>
                Select file
              </Typography>
            </Box>
            <Typography display='flex' justifyContent='center' className='body2' variant='body2'>
              500px(w) x 500px(h) <br />
              Only JPG or PNG file
            </Typography>
            <input {...getInputProps()} />
          </Box>
        </Box>
      ) : (
        <EditContainer>
          <Box className='avatarWrap'>
            <Avatar
              alt='profile pic'
              className='profileAvatar'
              src={file[0]?.preview || displayPicture.url}
              sx={{
                img: {
                  objectFit: 'cover',
                },
              }}
            />
          </Box>
          <Box className='editWrapper'>
            {hideReplace && (
              <Box {...getRootProps({ className: 'dropzone' })} className='avatarOptions'>
                <Typography variant='button' className='replace'>
                  Replace
                </Typography>
                <input {...getInputProps()} />
              </Box>
            )}
            {isHidden && (
              <>
                <Divider
                  orientation='vertical'
                  flexItem
                  sx={(theme) => ({ color: theme.misc.borderColor })}
                />
                <Box onClick={handleDelete} className='avatarOptions'>
                  <Typography variant='button' className='delete'>
                    Delete
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </EditContainer>
      )}
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
            sx={(theme) => ({
              marginLeft: theme.spacing(1.25),
              color: theme.palette.error.main,
            })}
          >
            {helperText}
          </Typography>
        </FormHelperText>
      ) : null}
    </BoxContainer>
  );
}

export default DragAndDropLogo;
