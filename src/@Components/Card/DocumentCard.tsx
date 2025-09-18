import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { Box } from '@mui/material';
import { DocumentIcon, DownloadIcon } from '@Icons';
import EllipsisText from 'react-ellipsis-text';

export interface DocumentCardI {
  pdfName: string | null;
  handleDownload: () => void;
  customer?: boolean;
  documentType?: string;
}

/**
 * A component that displays a document card.
 * @param {DocumentCardI} props - The props for the component.
 * @returns A document card.
 */
function DocumentCard({ pdfName, handleDownload, customer, documentType }: DocumentCardI) {
  return (
    <Card
      sx={(theme) => ({
        width: customer ? theme.spacing(131) : theme.spacing(300),
        minWidth: theme.spacing(161),
        maxHeight: theme.spacing(66),
        border: '1px solid',
        borderColor: theme.misc.inactive,
        boxShadow: 'none',
        display: 'flex',
        borderRadius: theme.spacing(2.5),
        padding: theme.spacing(11, 12, 0, 12),
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
              display: customer ? '' : 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            })}
          >
            <DocumentIcon />
            {customer ? (
              <Typography
                variant='h6'
                sx={(theme) => ({
                  color: theme.text.primary,
                  m: customer ? null : theme.spacing(0, 0, 0, 7),
                })}
                gutterBottom
              >
                {documentType}
              </Typography>
            ) : null}
            <Typography
              variant='h6'
              sx={(theme) => ({
                color: customer ? theme.palette.secondary.dark : theme.text.primary,
                m: customer ? null : theme.spacing(0, 0, 0, 7),
                cursor: 'pointer',
              })}
              gutterBottom
            >
              {pdfName && <EllipsisText text={pdfName} length='30' tooltip={pdfName} />}
            </Typography>
          </Box>
          <Box sx={{ cursor: 'pointer' }} onClick={handleDownload}>
            <DownloadIcon />
          </Box>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default DocumentCard;
