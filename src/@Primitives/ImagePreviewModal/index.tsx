import { CloseIcon } from '@Icons';
import { BasicModal } from '@Primitives';
import { Avatar, Box, styled } from '@mui/material';

interface PropsI {
  imageUrl: string;
  open: boolean;
  close: () => void;
}

const ImageBoxContainer = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  '.preview_image': {
    borderRadius: theme.spacing(2),
    width: 'auto',
    height: 'auto',
  },
  '.close_button': {
    position: 'absolute',
    background: theme.palette.primary.contrastText,
    height: theme.spacing(12),
    width: theme.spacing(12),
    borderRadius: theme.spacing(6),
    border: `1px solid ${theme.misc.borderColor}`,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 0,
  },
}));

export function ImagePreviewModal({ imageUrl, open, close }: PropsI) {
  return (
    <BasicModal maxWidth='xl' open={open} close={close}>
      <ImageBoxContainer>
        <Avatar alt='preview-image' className='preview_image' src={imageUrl} />
        <Box className='close_button' onClick={close}>
          <CloseIcon height={16} width={16} />
        </Box>
      </ImageBoxContainer>
    </BasicModal>
  );
}
