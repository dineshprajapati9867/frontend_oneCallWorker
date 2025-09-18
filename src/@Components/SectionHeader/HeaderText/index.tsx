import React from 'react';
import { Box, Typography } from '@mui/material';

interface HeaderTextI {
  totalCustomers?: string | number;
  headerText?: string;
}

/**
 * A component that displays the header text for the page.
 * @param {HeaderTextI} props - The props for the component.
 * @returns A component that displays the header text for the page.
 */
export function HeaderText({ totalCustomers, headerText }: HeaderTextI) {
  return (
    <Box
      style={{ fontSize: '20px' }}
      display='flex'
      sx={(theme) => ({
        letterSpacing: theme.spacing(0.3),
      })}
    >
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Typography variant='h4' position='relative'>
          {headerText}
        </Typography>
        {totalCustomers && (
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            sx={(theme) => ({
              height: theme.spacing(1.5),
              width: theme.spacing(1.5),
              color: theme.misc.mediumGrey,
              px: theme.spacing(5),
              pb: theme.spacing(5),
            })}
          >
            .
          </Box>
        )}
        {totalCustomers && (
          <Typography
            variant='h5'
            sx={(theme) => ({
              color: theme.text.secondary,
            })}
          >
            {totalCustomers}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
