import React from 'react';
import { hooks } from '@Utils';
import { Box, styled } from '@mui/system';
import { Loader } from '@Primitives';
import BasicButton from '../../@Primitives/Button/BasicButton/BasicButton';

export interface WithPermissionI {
  isView: boolean;
  message: string;
  children: JSX.Element;
  onGoBackClick: () => void;
  isLoading?: boolean;
}

interface MessageI {
  message: string;
  onGoBackClick: () => void;
}

const BoxContainer = styled(Box)(({ theme }) => ({
  height: `calc(100vh - ${theme.spacing(35)})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

function Message({ message = 'Access denied', onGoBackClick }: MessageI) {
  return (
    <BoxContainer>
      <h1>{message}</h1>
      <BasicButton onClick={onGoBackClick}>Go Back</BasicButton>
    </BoxContainer>
  );
}

/**
 * A React component that renders its children if the user has the required role.
 * @param {WithPermissionI} props - The props for the component.
 * @returns A React component that renders its children if the user has the required role.
 */
export function WithRolePermission({
  isView,
  message,
  children,
  onGoBackClick,
  isLoading = false,
}: WithPermissionI) {
  const { user } = hooks.useAuth();
  const renderWithPermission = () => {
    if (user) {
      return isView ? children : <Message message={message} onGoBackClick={onGoBackClick} />;
    }
    return null;
  };
  return isLoading ? <Loader type='table' /> : renderWithPermission();
}
