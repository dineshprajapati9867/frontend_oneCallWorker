import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export interface AmenityDisplayCardI {
  name?: string;
  icon?: string;
}
/**
 * amenity card components
 * @param param0
 * @returns
 */
function AmenityDisplayCard({ name, icon }: AmenityDisplayCardI) {
  return (
    <Card
      sx={(theme) => ({
        width: 'fit-content',
        height: theme.spacing(25.5),
        border: `1px solid ${theme.text.label}`,
        boxShadow: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: `${theme.spacing(2)}`,
      })}
    >
      <CardContent
        sx={(theme) => ({
          p: theme.spacing(10),
          alignItems: 'center',
        })}
      >
        <Box
          sx={(theme) => ({
            display: 'flex',
            justifyContent: 'space-between',
            gap: theme.spacing(2),
          })}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
            }}
          >
            <img src={icon} alt='aminity_image' />
          </Box>
          <Box>
            <Typography
              sx={(theme) => ({
                color: theme.text.label,
                lineHeight: theme.spacing(10),
              })}
            >
              {name}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default AmenityDisplayCard;
