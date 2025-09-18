import React from 'react';
import Card from '@mui/material/Card';
import { AddIcon } from '../../@Assets/@Icons/AddIcon';

export interface OwnersAddCardI {
  handleAdd: () => void;
}

/**
 * Owners add card components
 * @param param0
 * @returns
 */
function OwnersAddCard({ handleAdd }: OwnersAddCardI) {
  return (
    <Card
      sx={(theme) => ({
        minWidth: theme.spacing(150),
        maxWidth: theme.spacing(151.5),
        height: theme.spacing(142.5),
        backgroundColor: 'misc.cardBG',
        border: '1px solid',
        borderColor: 'secondary.main',
        boxShadow: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        cursor: 'pointer',
      })}
      onClick={handleAdd}
    >
      <AddIcon />
    </Card>
  );
}

export default OwnersAddCard;
