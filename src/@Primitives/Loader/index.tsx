import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';

export interface LoaderI {
  type?:"window" | "section"| "table" | "button";
  color?: any;
  size?: any;
}

export function Loader({ type = 'window', color, size }: LoaderI) {
  /**
   * Renders a loader based on the type of loader that is being rendered.
   * @param {string} type - the type of loader to render.
   * @param {string} color - the color of the loader.
   * @param {number} size - the size of the loader.
   * @returns None
   */
  const renderLoader = () => {
    if (type === 'window') {
      return (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
          <CircularProgress color={color} size={size} />
        </Backdrop>
      );
    }
    if (type === 'section') {
      return (
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress color={color} size={size} />
        </Box>
      );
    }
    if (type === 'table') {
      return (
        <Box
          sx={{
            height: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress color={color} size={size} />
        </Box>
      );
    }
    if (type === 'button') {
      return (
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 5px',
          }}
        >
          <CircularProgress color={color} size={size} />
        </Box>
      );
    }
    return null;
  };
  return <>{renderLoader()}</>;
}
