import React from 'react';
import { Box } from '@mui/material';
import DragAndDrop from '../../DragAndDrop';

export interface VisualTourUploadImagesI {
  handleAddImages: (files: any[]) => void;
  subHeaderText?: string;
}

export function VisualTourUploadImages({
  handleAddImages,
  subHeaderText,
}: VisualTourUploadImagesI) {
  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        height: '100%',
        maxHeight: theme.spacing(407.5),
        borderRadius: '8px',
      })}
    >
      <DragAndDrop isModal subHeaderText={subHeaderText} handleAddImages={handleAddImages} />
    </Box>
  );
}
