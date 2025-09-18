import React from 'react';
import { Box, styled, Typography } from '@mui/material';

interface NoDataAddedCardI {
  icon: React.ReactNode;
  title: string;
  description?: string;
  width?: number | string;
  height?: number | string;
  searchLabel?: string;
}

const MainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.spacing(1.5),
  background: theme.palette.secondary.light,
  '.icon-box': {
    background: theme.palette.primary.light,
    borderRadius: theme.spacing(25),
    width: theme.spacing(21),
    height: theme.spacing(21),
    marginBottom: theme.spacing(6.5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '.title': {
    marginBottom: theme.spacing(2.5),
  },
}));

/**
 * A component that displays a message when no data is added to the page.
 * @param {string} icon - the icon to display in the component.
 * @param {string} title - the title to display in the component.
 * @param {string} description - the description to display in the component.
 * @param {number} [width=638] - the width of the component.
 * @param {number} [height=270] - the height of the component.
 * @param {string} [searchLabel] - the label to display in the component.
 * @returns A component that displays a message when no data is
 */
export default function NoDataAddedCard({
  icon,
  title,
  description,
  width = 638,
  height = 270,
  searchLabel,
}: NoDataAddedCardI) {
  return (
    <MainBox width={width} height={height}>
      <Box className='icon-box'>{icon}</Box>
      <Typography variant='subtitle1' color='secondary.dark' className='title'>
        {title || searchLabel}
      </Typography>
      <Typography variant='body1' color='secondary.dark'>
        {description}
      </Typography>
    </MainBox>
  );
}
