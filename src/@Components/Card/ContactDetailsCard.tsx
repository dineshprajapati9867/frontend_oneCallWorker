import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { Box } from '@mui/material';
import { DeleteIcon } from '../../@Assets/@Icons/DeleteIcon';
import { DocumentIcon } from '../../@Assets/@Icons/DocumentIcon';
import { DownloadIcon } from '../../@Assets/@Icons/DownloadIcon';

export interface ContactDetailsCardI {
  contactName: string;
  pdfName: string;
  handleDownload: () => void;
  handleDelete?: () => void;
  showDeleteIcon?: boolean;
}

/**
 * A card that displays the name of a contact and the name of the PDF file that it is associated with.
 * @param {string} contactName - the name of the contact
 * @param {string} pdfName - the name of the PDF file that the contact is associated with
 * @param {Function} handleDownload - a function that handles the download of the PDF file
 * @param {boolean} showDeleteIcon - a boolean that determines whether or not to show the delete icon
 * @param {Function} handleDelete - a function that handles the deletion of the contact
 * @returns A card that displays the name of a contact and the name of the
 */
function ContactDetailsCard({
  contactName,
  pdfName,
  handleDownload,
  showDeleteIcon,
  handleDelete,
}: ContactDetailsCardI) {
  return (
    <Card
      sx={(theme) => ({
        minWidth: theme.spacing(161),
        // minHeight: 131,
        border: '1px solid',
        borderColor: 'primary.light',
        boxShadow: 'none',
        display: 'flex',
        borderRadius: theme.spacing(5),
        padding: theme.spacing(12.5, 12),
        mr: theme.spacing(13.5),
        mb: theme.spacing(13.5),
      })}
    >
      <CardContent sx={{ padding: 0, width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <DocumentIcon />
          {showDeleteIcon ? (
            <Box
              sx={(theme) => ({
                marginRight: theme.spacing(1.5),
                cursor: 'pointer',
              })}
              onClick={handleDelete}
            >
              <DeleteIcon />
            </Box>
          ) : null}
        </Box>

        <Typography
          sx={(theme) => ({
            marginTop: theme.spacing(6),
            fontSize: theme.spacing(8),
            lineHeight: theme.spacing(10),
            letterSpacing: theme.spacing(0.08),
            color: theme.text.primary,
          })}
          gutterBottom
        >
          {contactName}
        </Typography>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 0,
          }}
        >
          <Typography
            variant='body1'
            sx={(theme) => ({
              lineHeight: theme.spacing(9),
              letterSpacing: theme.spacing(0.08),
              color: theme.text.light,
            })}
            gutterBottom
          >
            {pdfName}
          </Typography>
          <Box sx={{ cursor: 'pointer' }} onClick={handleDownload}>
            <DownloadIcon />
          </Box>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default ContactDetailsCard;
