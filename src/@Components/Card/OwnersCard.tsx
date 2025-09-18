import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DeleteIcon } from '../../@Assets/@Icons/DeleteIcon';
import { EditIcon } from '../../@Assets/@Icons/EditIcon';
import { EmailIcon } from '../../@Assets/@Icons/EmailIcon';

export interface OwnersCardI {
  name: string;
  mobile: string;
  email: string;
  aadhaar: string;
  panNo: string;
  address: string;
  handleEdit: any;
  handleDelete: () => void;
}
/**
 * Owner card components
 * @param param0
 * @returns
 */
function OwnersCard({
  name,
  mobile,
  email,
  aadhaar,
  panNo,
  address,
  handleEdit,
  handleDelete,
}: OwnersCardI) {
  return (
    <Card
      sx={(theme) => ({
        maxWidth: theme.spacing(200),
        height: theme.spacing(142.5),
        border: `1px solid ${theme.palette.primary.light}`,
        boxShadow: 'none',
        display: 'flex',
        borderRadius: `${theme.spacing(5)}`,
      })}
    >
      <CardContent sx={(theme) => ({ p: theme.spacing(10) })}>
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography
                variant='h6'
                sx={(theme) => ({
                  color: theme.text.primary,
                  lineHeight: theme.spacing(10),
                  marginBottom: theme.spacing(5),
                })}
                gutterBottom
              >
                {name}
              </Typography>
              <Typography
                variant='body1'
                sx={(theme) => ({
                  color: theme.text.primary,
                  lineHeight: theme.spacing(9),
                  marginBottom: theme.spacing(4.5),
                })}
                gutterBottom
              >
                {mobile}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={(theme) => ({ mr: theme.spacing(8), cursor: 'pointer' })}
                onClick={handleEdit}
              >
                <EditIcon />
              </Box>
              <Box sx={{ cursor: 'pointer' }} onClick={handleDelete}>
                <DeleteIcon />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
            }}
          >
            <Typography
              variant='body1'
              sx={(theme) => ({
                mr: theme.spacing(15),
                color: theme.text.primary,
                lineHeight: theme.spacing(9),
                mb: theme.spacing(16.5),
              })}
              gutterBottom
            >
              {email}
            </Typography>
            <EmailIcon />
          </Box>
        </Box>
        <Box>
          <Typography
            variant='body1'
            sx={(theme) => ({
              color: theme.text.light,
              lineHeight: theme.spacing(9),
              marginBottom: theme.spacing(6),
            })}
            gutterBottom
          >
            Aadhaar No.: {aadhaar}
          </Typography>
          <Typography
            variant='body1'
            sx={(theme) => ({
              color: theme.text.light,
              lineHeight: theme.spacing(9),
              marginBottom: theme.spacing(10),
            })}
            gutterBottom
          >
            PAN No.: {panNo}
          </Typography>
          <Typography
            variant='body1'
            sx={(theme) => ({
              color: theme.text.light,
              lineHeight: theme.spacing(9),
            })}
            gutterBottom
          >
            Address: {address}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default OwnersCard;
