import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { Box } from '@mui/material';
import { DocumentIcon } from '../../@Assets/@Icons/DocumentIcon';
import { CloseIcon } from '../../@Assets/@Icons/CloseIcon';

export interface DocumentCardI {
  pdfName: string;
  handleUpdate: () => void;
}

/**
 * A component that displays a card that can be used to update a document.
 * @param {DocumentCardI} props - The props for the component.
 * @returns A component that displays a card that can be used to update a document.
 */
function DocumentUpdateCard({ pdfName, handleUpdate }: DocumentCardI) {
  return (
    <Card
      sx={(theme) => ({
        width: theme.spacing(300),
        minWidth: theme.spacing(161),
        border: '1px solid',
        borderColor: theme.misc.inactive,
        boxShadow: 'none',
        display: 'flex',
        borderRadius: theme.spacing(2.5),
        padding: theme.spacing(6, 7.5),
        background: theme.palette.secondary.light,
      })}
    >
      <CardContent sx={{ padding: 0, width: '100%' }}>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 0,
          }}
        >
          <Box
            sx={() => ({
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            })}
          >
            <DocumentIcon />
            <Typography
              variant='body1'
              sx={(theme) => ({
                color: theme.text.primary,
                m: theme.spacing(0, 0, 0, 7),
              })}
              gutterBottom
            >
              {pdfName}
            </Typography>
          </Box>
          <Box sx={{ cursor: 'pointer' }} onClick={handleUpdate}>
            <CloseIcon />
          </Box>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default DocumentUpdateCard;
