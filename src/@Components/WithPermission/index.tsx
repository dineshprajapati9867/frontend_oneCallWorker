import React from 'react';
import { hooks } from '@Utils';
import { Box, styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import BasicButton from '../../@Primitives/Button/BasicButton/BasicButton';

export interface WithPermissionI {
  roleNameRequired: string[];
  message: string;
  children: any;
}

const BoxContainer = styled(Box)(({ theme }) => ({
  height: `calc(100vh - ${theme.spacing(35)})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

function Message({ message = 'Access denied' }) {
  const navigate = useNavigate();
  return (
    <BoxContainer>
      <h1>{message}</h1>
      <BasicButton onClick={() => navigate(-1)}>Go Back</BasicButton>
    </BoxContainer>
  );
}

/**
 * A React component that renders its children if the user has the required role.
 * @param {WithPermissionI} props - The props for the component.
 * @returns A React component that renders its children if the user has the required role.
 */
export const WithPermission = ({ roleNameRequired, message, children }: WithPermissionI) => {
  const { user } = hooks.useAuth();
  const renderWithPermission = () => {
    if (user) {
      return roleNameRequired.includes(user.role.name) ? children : <Message message={message} />;
    }
    return null;
  };
  return renderWithPermission();
};
