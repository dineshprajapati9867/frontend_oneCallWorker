import React from 'react';
import { Typography, Box, styled } from '@mui/material';
import { ThreeDots, BlackEmailIcon } from '../../@Assets/@Icons';

export interface UserInfoCardI {
  name: string;
  roleName: string;
  email: string;
  mobile: string;
  handleShowInfo?: any;
  showInfo?: boolean;
}
const CardWrapper = styled(Box)(({ theme }) => ({
  maxWidth: theme.spacing(190),
  height: theme.spacing(75.5),
  border: `1px solid ${theme.palette.primary.light}`,
  boxShadow: 'none',
  display: 'flex',
  borderRadius: `${theme.spacing(5)}`,
}));
const CardContentWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10),
  width: '100%',
}));

const NameStyle = styled(Typography)(({ theme }) => ({
  color: theme.text.primary,
  lineHeight: theme.spacing(10),
  marginBottom: theme.spacing(2.5),
}));

/**
 * User Info card component
 * @param param0
 * @returns
 */
export function UserInfoCard({
  name,
  roleName,
  email,
  mobile,
  showInfo,
  handleShowInfo,
}: UserInfoCardI) {
  return (
    <CardWrapper>
      <CardContentWrapper>
        <Box
          display='flex'
          justifyContent='space-between'
          sx={(theme) => ({
            mb: theme.spacing(10),
          })}
        >
          <Box>
            <NameStyle variant='h6'>{name}</NameStyle>

            <Typography
              variant='body1'
              sx={(theme) => ({
                color: theme.text.light,
              })}
            >
              {roleName}
            </Typography>
          </Box>
          <Box display='flex' justifyContent='space-between'>
            <Box sx={(theme) => ({ mr: theme.spacing(10), cursor: 'pointer' })}>
              <a href={`mailto:${email}`}>
                <BlackEmailIcon />
              </a>
            </Box>
            {showInfo ? (
              <Box sx={{ cursor: 'pointer' }} onClick={handleShowInfo}>
                <ThreeDots />
              </Box>
            ) : null}
          </Box>
        </Box>
        <Box>
          <Box>
            <Typography variant='body1'>{email}</Typography>
          </Box>
          <Box>
            <Typography variant='body1'>+91 {mobile}</Typography>
          </Box>
        </Box>
      </CardContentWrapper>
    </CardWrapper>
  );
}
