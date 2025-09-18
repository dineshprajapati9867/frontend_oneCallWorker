import { useState } from 'react';
import {
  CloseIconWhite,
  WhiteBackIcon,
  DownloadWhiteIcon,
  SliderWhiteLeftIcon,
  SliderWhiteRightIcon,
} from '@Icons';
import { Box, Dialog, IconButton, Typography, styled } from '@mui/material';

interface AttachmentI {
  attachmentUrl: string;
  attachments: string;
  length: number;
  comment?: string;
}
interface PropsI {
  index?: number;
  open: boolean;
  close: () => void;
  previewImageUrl: AttachmentI[];
}

const ImagePreviewModal = styled(Dialog)(({ theme }) => ({
  '.MuiPaper-root': {
    backgroundColor: 'rgba(31, 31, 31, 0.8)',
  },
  '.selected_image_name': {
    fontSize: theme.spacing(11),
    fontWeight: 600,
    lineHeight: theme.spacing(13),
    color: theme.palette.primary.contrastText,
  },
  '.selected_image_comment': {
    fontSize: theme.spacing(11),
    fontWeight: 600,
    lineHeight: theme.spacing(13),
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    bottom: 50,
    '.Mui-disabled': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  '.left-arrow': {
    position: 'fixed',
    top: '50%',
    left: '5%',
  },
  '.right-arrow': {
    position: 'fixed',
    top: '50%',
    right: '5%',
  },
  '.image_preview_header': {
    position: 'fixed',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100vw',
    background: 'linear-gradient(to bottom,rgba(0,0,0,.65) 0%,transparent 100%)',
    padding: theme.spacing(15, 30, 0),
    '.header_content': {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(6),
    },
  },
  '.zoom_icons': {
    position: 'fixed',
    left: '25%',
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    gap: theme.spacing(8),
    bottom: 50,
    '.Mui-disabled': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  '.image_container': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    borderRadius: theme.spacing(2.5),
  },
  '.selected_image': {
    borderRadius: theme.spacing(2.5),
  },
}));

const RoundIconButton = styled(IconButton)(({ theme }) => ({
  border: `1px solid ${theme.misc.borderColor}`,
  borderRadius: theme.spacing(24),
  backgroundColor: theme.palette.secondary.light,
  color: theme.palette.primary.main,
  height: theme.spacing(16),
  width: theme.spacing(16),
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}));

export function ImagePreview({ index, open, close, previewImageUrl }: PropsI) {
  const [zoom, setZoom] = useState(80);
  const [currentImage, setCurrentImage] = useState(Number(index));
  /**
   * Handles Next
   * @returns None
   */
  const nextImage = () => {
    setZoom(80);
    const nextIndex = Number(currentImage + 1) % previewImageUrl.length;
    setCurrentImage(Number(nextIndex));
  };

  /**
   * Handles Previous
   * @returns None
   */
  const prevImage = () => {
    setZoom(80);
    const prevIndex = (currentImage + previewImageUrl.length - 1) % previewImageUrl.length;
    setCurrentImage(prevIndex);
  };

  /**
   * Increases the zoom level by 25%
   * @returns None
   */
  const handleZoomIn = () => {
    setZoom(zoom + 20);
  };

  /**
   * Decreases the zoom level by 25%
   * @returns None
   */
  const handleZoomOut = () => {
    setZoom(zoom - 20);
  };

  /**
   * Decreases the zoom level by 25%
   * @returns None
   */
  const downloadImage = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.click();
  };

  return (
    <ImagePreviewModal open={open} onClose={close} fullScreen>
      <Box className='image_preview_header'>
        <Box className='header_content'>
          <IconButton onClick={close}>
            <WhiteBackIcon />
          </IconButton>
          <Typography className='selected_image_name'>
            {previewImageUrl[currentImage]?.attachments}
          </Typography>
        </Box>
        <Box className='header_content'>
          <IconButton />
          <IconButton onClick={() => downloadImage(previewImageUrl[currentImage]?.attachmentUrl)}>
            <DownloadWhiteIcon />
          </IconButton>
          <IconButton onClick={close}>
            <CloseIconWhite />
          </IconButton>
        </Box>
      </Box>
      <Box>
        <Box className='image_container'>
          {previewImageUrl.length > 1 && currentImage !== 0 && (
            <IconButton onClick={prevImage} className='left-arrow'>
              <SliderWhiteLeftIcon />
            </IconButton>
          )}
          <img
            alt=''
            src={previewImageUrl[currentImage]?.attachmentUrl}
            className='selected_image'
            style={{
              width: 'auto',
              height: `${zoom}%`,
            }}
          />
          {previewImageUrl.length > 1 && previewImageUrl.length - 1 !== currentImage && (
            <IconButton onClick={nextImage} className='right-arrow'>
              <SliderWhiteRightIcon />
            </IconButton>
          )}
        </Box>
        <Typography className='selected_image_comment'>
          {previewImageUrl[currentImage]?.attachments}
        </Typography>
      </Box>
      <Box className='zoom_icons'>
        <RoundIconButton disabled={zoom === 200} onClick={handleZoomIn}>
          +
        </RoundIconButton>
        <RoundIconButton disabled={zoom === 80} onClick={handleZoomOut}>
          -
        </RoundIconButton>
      </Box>
    </ImagePreviewModal>
  );
}
