import * as React from 'react';
import Box from '@mui/material/Box';
import { Avatar, Divider, styled, Typography } from '@mui/material';
import { ErrorIcon } from '@Icons';
import { useDropzone } from 'react-dropzone';
import { hooks } from '@Utils';

export interface DragAndDropCoverPicI {
  onChange: (files: {}) => void;
  label?: string;
  error?: boolean;
  helperText: string | null | undefined;
  displayPicture?: any;
}

const BoxContainer = styled(Box)(({ theme }) => ({
  '.dropzone': {
    width: theme.spacing(262),
    height: theme.spacing(47),
    borderRadius: theme.spacing(2.5),
    backgroundColor: theme.palette.secondary.light,
    padding: theme.spacing(18, 8, 12.5, 7),
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
    marginBottom: theme.spacing(3.5),
    marginLeft: theme.spacing(2),
  },
  '.bottomText': {
    color: theme.palette.secondary.dark,
    fontWeight: 400,
  },
  '.colorSubtitle': {
    color: theme.misc.selectedBlue,
    fontWeight: 400,
    padding: theme.spacing(2, 0, 0, 3.5),
  },
  '.body2': {
    color: theme.misc.inactive,
    lineHeight: '145%',
  },
  '.error_': {
    display: 'flex',
    alignItems: 'center',
  },
  '.error_text': {
    color: theme.palette.error.main,
  },
}));

const EditContainer = styled(Box)(({ theme }) => ({
  '.avatarOptions': {
    width: theme.spacing(43.5),
    textAlign: 'center',
    cursor: 'pointer',
  },
  '.avatarWrap': {
    width: theme.spacing(262),
    height: theme.spacing(47),
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
  '.profileAvatar': {
    width: '100%',
    height: '100%',
    borderRadius: '5px',
    marginBottom: theme.spacing(4),
  },
}));

/**
 * A component that allows the user to upload a profile picture.
 * @param {DragAndDropCoverPicI} props - The props for the component.
 * @returns A component that allows the user to upload a profile picture.
 */
function DragAndDropCoverPic({
  onChange,
  label,
  displayPicture,
  error,
  helperText,
}: DragAndDropCoverPicI) {
  const [file, setFile] = React.useState<any[]>([]);
  const [removedCoverPicture, setRemovedCoverPicture] = React.useState(false);
  const { ShowCautionSnackBar } = hooks.useSnackBar();

  const { getRootProps, getInputProps } = useDropzone({
    accept: `.png, .jpg`,
    maxSize: 5242880,
    multiple: false,
    onDrop: (acceptedFiles) => {
      onChange(acceptedFiles[0]);
      setFile(
        acceptedFiles.map((currentFile) =>
          Object.assign(file, {
            preview: URL.createObjectURL(currentFile),
          }),
        ),
      );
      setRemovedCoverPicture(true);
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
    const filtered = file.filter((d) => d[0] !== undefined && d[1] !== undefined);
    setFile(filtered);
    setRemovedCoverPicture(true);
    onChange('');
  };

  const showUploadCoverPic = () => {
    if (removedCoverPicture) {
      if (file[0]) {
        return false;
      }
      return true;
    }
    if (displayPicture?.path) {
      displayPicture = { ...displayPicture, url: URL.createObjectURL(displayPicture) };
      return false;
    }
    if (!displayPicture) {
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

      {showUploadCoverPic() ? (
        <Box
          {...getRootProps({ className: 'dropzone' })}
          sx={(theme) => ({
            border: error
              ? `1px dashed ${theme.palette.error.main}`
              : `1px dashed ${theme.misc.darkGray}`,
          })}
        >
          <Box>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Typography className='subtitle' variant='body1'>
                Drag and Drop to upload
              </Typography>
              <Box display='flex' justifyContent='space-evenly'>
                <Typography className='subtitle' variant='body1'>
                  the file or
                </Typography>
                <Typography className='colorSubtitle' variant='subtitle2'>
                  Select file
                </Typography>
              </Box>
            </Box>
            <Box display='flex' justifyContent='center'>
              <Typography className='bottomText' variant='subtitle2'>
                Image size: 900px (h) x 400px (w)
              </Typography>
            </Box>
            <input {...getInputProps()} />
          </Box>
        </Box>
      ) : (
        <EditContainer>
          <Box className='avatarWrap'>
            <Avatar
              alt='profile pic'
              className='profileAvatar'
              src={file[0]?.preview || displayPicture}
              sx={{
                img: {
                  objectFit: 'cover',
                },
              }}
            />
          </Box>
          <Box className='editWrapper'>
            <Box {...getRootProps({ className: 'dropzone' })} className='avatarOptions'>
              <Typography className='replace' variant='button'>
                Replace
              </Typography>
              <input {...getInputProps()} />
            </Box>
            <Divider
              flexItem
              orientation='vertical'
              sx={(theme) => ({ color: theme.misc.borderColor })}
            />
            <Box className='avatarOptions' onClick={handleDelete}>
              <Typography className='delete' variant='button'>
                Delete
              </Typography>
            </Box>
          </Box>
        </EditContainer>
      )}
      {error && (
        <Box className='error_'>
          <ErrorIcon />
          <Typography variant='body2' className='error_text'>
            {helperText}
          </Typography>
        </Box>
      )}
    </BoxContainer>
  );
}

export default DragAndDropCoverPic;
