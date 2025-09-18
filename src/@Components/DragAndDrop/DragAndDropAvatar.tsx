/* eslint-disable react/jsx-no-useless-fragment */
import * as React from 'react';
import Box from '@mui/material/Box';
import { Avatar, Divider, styled, Typography } from '@mui/material';

import { useDropzone } from 'react-dropzone';
import { hooks } from '@Utils';

export interface DragAndDropAvatarI {
  onChange: any;
  displayPicture: any;
}

const MainContainer = styled(Box)(({ theme }) => ({
  width: theme.spacing(62),
  height: theme.spacing(62),
  cursor: 'pointer',
  backgroundColor: theme.palette.primary.light,
  borderRadius: theme.spacing(30),
  '.Wraper': {
    padding: theme.spacing(27, 15),
  },
  '.uploadPic': {
    color: theme.text.lightBlue,
  },
}));

const EditContainer = styled(Box)(({ theme }) => ({
  width: theme.spacing(62),
  height: theme.spacing(62),
  cursor: 'pointer',
  '.editWraper': {},
  '.profileAvatar': {
    width: theme.spacing(62),
    height: theme.spacing(62),
    marginBottom: theme.spacing(4),
    img: {
      objectFit: 'cover',
    },
  },
  '.avatarOptions': {
    width: theme.spacing(43.5),
    textAlign: 'center',
    cursor: 'pointer',
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
}));

const maxSize = 5242880;

/**
 * A component that allows the user to upload a display picture.
 * @param {DragAndDropAvatarI} props - The props for the component.
 * @returns A component that allows the user to upload a display picture.
 */
export function DragAndDropAvatar({ onChange, displayPicture }: DragAndDropAvatarI) {
  const [file, setFile] = React.useState<any[]>([]);
  const [removedDisplayPicture, setRemovedDisplayPicture] = React.useState(false);
  const { ShowCautionSnackBar } = hooks.useSnackBar();

  const { getRootProps, getInputProps } = useDropzone({
    accept: `.png, .jpg`,
    multiple: false,
    maxSize,
    onDrop: (acceptedFiles) => {
      setFile(
        acceptedFiles.map((currentFile) =>
          Object.assign(file, {
            preview: URL.createObjectURL(currentFile),
          }),
        ),
      );
      onChange(acceptedFiles[0]);
      setRemovedDisplayPicture(true);
    },
    onDropRejected: (err) => {
      if (err[0].errors[0].code === 'file-too-large') {
        ShowCautionSnackBar('File should not exceed more than 5mb!');
      }
      if (err[0].errors[0].code === 'file-invalid-type') {
        ShowCautionSnackBar(
          'Could not read the selected file. Please upload only JPG or PNG format file!',
        );
      }
    },
  });

  const handleDelete = () => {
    setFile([]);
    setRemovedDisplayPicture(true);
    onChange('');
  };

  const showUploadPic = () => {
    if (removedDisplayPicture) {
      if (file[0]) {
        return false;
      }
      return true;
    }
    if (!displayPicture?.url && !file[0]) {
      return true;
    }
    return false;
  };

  return (
    <>
      {showUploadPic() ? (
        <MainContainer {...getRootProps({ className: 'dropzone' })}>
          <Box className='Wraper'>
            <Typography variant='caption' className='uploadPic'>
              UPLOAD PIC
            </Typography>
            <input {...getInputProps()} />
          </Box>
        </MainContainer>
      ) : (
        <EditContainer>
          <Avatar
            alt='profile pic'
            className='profileAvatar'
            src={file[0]?.preview || displayPicture.url}
          />

          <Box display='flex' className='editWrapper'>
            <Box {...getRootProps({ className: 'dropzone' })} className='avatarOptions'>
              <Typography variant='button' className='replace'>
                Replace
              </Typography>
              <input {...getInputProps()} />
            </Box>
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
          </Box>
        </EditContainer>
      )}
    </>
  );
}
