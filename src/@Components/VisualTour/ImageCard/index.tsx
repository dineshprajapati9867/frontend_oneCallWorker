import React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import EllipsisText from 'react-ellipsis-text';

export interface ImageCardI {
  VisualTourImage: string | File;
  tagName: string;
  isSelected?: boolean;
}

export function ImageCard({ VisualTourImage, tagName, isSelected = false }: ImageCardI) {
  return (
    <Box
      sx={(theme) => ({
        width: 266,
        height: 191,
        alignItems: 'center',
        marginTop: theme.spacing(11),
        border: isSelected ? `8px solid ${theme.palette.primary.main}` : 0,
        borderRadius: theme.spacing(2.5),
      })}
    >
      <Box
        sx={() => ({
          position: 'relative',
        })}
      >
        <CardMedia
          component='img'
          height='176'
          width='250px'
          alt={tagName || 'Untagged'}
          image={VisualTourImage as string}
          sx={(theme) => ({
            // border: isSelected ? `8px solid ${theme.palette.primary.dark}` : 0,
            // borderRadius: theme.spacing(2.5),
            paddingTop: isSelected ? 10.5 : 0,
            background: theme.palette.primary.main,
            borderRadius: isSelected ? 0 : theme.spacing(2.5),
            objectFit: 'cover',
          })}
        />
        <Typography
          align='center'
          sx={(theme) => ({
            ...theme.typography.imageHeader,
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            top: isSelected ? 6 : -15,
            padding: theme.spacing(0, 2),
            minWidth: 91,
            minHeight: 15,
            maxHeight: '15px !important',
            alignItems: 'center',
            fontWeight: 600,
            color: theme.palette.primary.contrastText,
            textTransform: 'capitalize',
            backgroundColor:
              tagName === 'Not Saved' || '' ? theme.misc.selectedBlue : theme.text.label,
            border:
              tagName === 'Not Saved' || ''
                ? `1px dashed ${theme.palette.primary.contrastText}`
                : null,
            borderRadius: tagName === '' ? theme.spacing(2.5) : theme.spacing(1.5),
          })}
        >
          <EllipsisText
            text={(tagName || 'Untagged').toUpperCase()}
            length='15'
            tooltip={tagName}
          />
        </Typography>
      </Box>
    </Box>
  );
}
