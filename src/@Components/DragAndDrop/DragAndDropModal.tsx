import React from 'react';
import { Box, IconButton } from '@mui/material';
import { CloseIcon } from '@Icons';
import { BasicModal } from '../../@Primitives/Modal';

import DragAndDrop from './index';

export interface DragAndDropModalI {
  open: boolean;
  close: () => void;
  handleAddImages: (files: any[]) => void;
  subHeaderText?: string;
  allowAllExtension?: boolean;
}

/**
 * A modal that allows the user to drag and drop images onto the page.
 * @param {DragAndDropModalI} props - The props for the modal.
 * @returns None
 */
export function DragAndDropModal({
  open,
  close,
  handleAddImages,
  subHeaderText,
  allowAllExtension,
}: DragAndDropModalI) {
  return (
    <Box>
      <BasicModal open={open} close={close} maxWidth='xl'>
        <Box
          sx={(theme) => ({
            width: theme.spacing(609.5),
            height: theme.spacing(378.5),
            position: 'relative',
          })}
        >
          <Box
            sx={() => ({
              position: 'absolute',
              top: '10px',
              right: '10px',
            })}
            onClick={close}
          >
            <IconButton>
              <CloseIcon />
            </IconButton>
          </Box>
          <DragAndDrop
            allowAllExtension={allowAllExtension}
            isModal
            handleAddImages={handleAddImages}
            subHeaderText={subHeaderText}
          />
        </Box>
      </BasicModal>
    </Box>
  );
}
