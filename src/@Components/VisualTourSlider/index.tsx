import React, { useState } from 'react';
import { Box, IconButton, styled, Typography } from '@mui/material';
import { interfaces } from '@Utils';
import { SliderLeftIcon, SliderRightIcon } from '@Icons';
import { ImagePreview } from '@Primitives/ImagePreviewModal/imagePreview';

const BoxContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  '.property_images': {
    width: '100%',
    overflowX: 'scroll',
    animationDuration: '4s',
    paddingTop: theme.spacing(11),
    scrollBehavior: 'smooth',
    display: 'flex',
  },

  '.visual_image': {
    height: theme.spacing(80),
    borderRadius: theme.spacing(2.5),
    paddingRight: theme.spacing(7.5),
    display: 'inline-block',
    width: theme.spacing(125),
    objectFit: 'cover',
  },

  '.left_slider': {
    position: 'absolute',
    left: 0,
    top: 75,
    border: `2px solid ${theme.palette.secondary.dark}`,
    padding: theme.spacing(4.5, 7.5, 4.5, 6),
    background: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  '.right_slider': {
    position: 'absolute',
    right: 0,
    top: 75,
    border: `2px solid ${theme.palette.secondary.dark}`,
    padding: theme.spacing(4.5, 6, 4.5, 7.5),
    background: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  '.image_preview': {
    cursor: 'zoom-in',
  },
  '.image_TagName': {
    ...theme.typography.imageHeader,
    color: theme.text.tagColor,
  },
  '.no_visual_images': {
    display: 'flex',
    justifyContent: 'center',
  },
}));

interface VisualTourSliderI {
  visualTourImages: interfaces.VisualTourImageIWithOther[];
}
interface AttachmentI {
  attachmentUrl: string;
  attachments: string;
}

type TypeOfPositions = 'left' | 'none' | 'right';

export function VisualTourSlider({ visualTourImages }: VisualTourSliderI) {
  const ref = React.useRef(null) as any;
  const [checkCurrentPosition, setCheckCurrentPosition] = useState<TypeOfPositions>('left');
  const [openPreviewModal, setOpenPreviewModal] = useState(false);
  const [previewImageUrl, setpreviewImageUrl] = useState<AttachmentI[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>();

  /**
   * Scrolls the page in the given direction.
   * @param {string} scrollDirection - the direction to scroll the page.
   * @returns None
   */
  const scroll = (scrollDirection: string) => {
    if (scrollDirection === 'right') {
      ref.current.scrollLeft += 500;
    }
    if (scrollDirection === 'left') {
      ref.current.scrollLeft -= 500;
    }
  };

  /**
   * Handles the onScroll event for the page.
   * @param {any} e - the event object
   * @returns None
   */
  const handleOnScroll = (e: any) => {
    const isLeft = !e.target.scrollLeft;
    const isRight = e.target.scrollLeft + ref.current.offsetWidth === e.target.scrollWidth;
    if (!isLeft && !isRight && checkCurrentPosition !== 'none') {
      setCheckCurrentPosition('none');
    }
    if (isLeft && checkCurrentPosition !== 'left') {
      setCheckCurrentPosition('left');
    }
    if (isRight && checkCurrentPosition !== 'right') {
      setCheckCurrentPosition('right');
    }
  };

  /**
   * Handles prview image function
   * @param imageUrl - image url to preview
   */
  const handlePreviewImage = (imageUrl: { image: string; tag_name: string }[], index: number) => {
    const previewImageData = imageUrl.map((urls: { image: string; tag_name: string }) => ({
      attachmentUrl: urls.image,
      attachments: urls.tag_name,
    }));
    setpreviewImageUrl(previewImageData);
    setSelectedIndex(index);
    setOpenPreviewModal(true);
  };

  return (
    <BoxContainer>
      {visualTourImages?.length ? (
        <>
          <Box
            className='property_images'
            ref={ref}
            onScroll={handleOnScroll}
            sx={{
              '&::-webkit-scrollbar': {
                width: '10px',
                height: '0.1px',
              },
            }}
          >
            {visualTourImages?.map((visualTourImage, index: number) => (
              <Box
                key={visualTourImage.id}
                display='inline-block'
                className='image_preview'
                onClick={() => handlePreviewImage(visualTourImages, index)}
              >
                <img src={visualTourImage.image} alt='visualImage' className='visual_image' />
                <Typography className='image_TagName'>
                  {visualTourImage.tag_name.toUpperCase()}
                </Typography>
              </Box>
            ))}
          </Box>
          {visualTourImages.length >= 3 && (
            <>
              {checkCurrentPosition !== 'left' && (
                <IconButton className='left_slider' onClick={() => scroll('left')}>
                  <SliderLeftIcon />
                </IconButton>
              )}
              {checkCurrentPosition !== 'right' && (
                <IconButton className='right_slider' onClick={() => scroll('right')}>
                  <SliderRightIcon />
                </IconButton>
              )}
            </>
          )}
        </>
      ) : (
        <Box className='no_visual_images'>
          <Typography variant='body2'>No Images Added</Typography>
        </Box>
      )}

      {openPreviewModal && (
        <ImagePreview
          open={openPreviewModal}
          close={() => setOpenPreviewModal(false)}
          index={selectedIndex}
          previewImageUrl={previewImageUrl}
        />
      )}
    </BoxContainer>
  );
}
