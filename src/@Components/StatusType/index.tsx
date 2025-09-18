import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';
import { theme } from '@Utils/theme';

export interface StatusTypeI {
  status?: any;
  color?: any;
  backgroundColor?: any;
}

const BoxContainer = styled(Box)(() => ({
  borderRadius: theme.spacing(1.5),
  textAlign: 'center',
  padding: theme.spacing(0.5, 1.5, 0, 1.5),
}));

/**
 * A component that displays the status of a ticket.
 * @param {StatusTypeI} props - The props for the component.
 * @returns A component that displays the status of a ticket.
 */
export function StatusType({ status, color, backgroundColor }: StatusTypeI) {
  /**
   * Returns the color and background color for the status of a ticket.
   * @param {string} status - the status of the ticket.
   * @returns {string} - the color and background color for the status of a ticket.
   */
  switch (status) {
    case 'submitted':
    case 'pending_activation':
    case 'pending_verification':
    case 'pending':
    case 'Open':
    case 'pending_payment':
    case 'pending_approval':
    case 'yet to checked-in':
    case 'yet to arrive':
    case 'pending_listing':
    case 'pending_contract':
    case 'renewal':
    case 'invoice pending':
    case 'invoice_pending':
    case 'invoice generated':
    case 'invoice_generated':
    case 'listed':
      color = theme.misc.navyBlue;
      backgroundColor = theme.misc.skyBlue;
      break;

    case 'active':
    case 'done':
    case 'confirmed':
    case 'paid':
    case 'Resolved':
    case 'checked-in':
    case 'resolved':
    case 'request_accepted':
    case 'accepted':
    case 'booked':
    case 'completed':
    case 'invoice raised':
    case 'invoice_raised':
    case 'settled':
      color = theme.misc.darkGreen;
      backgroundColor = theme.misc.leafGreen;
      break;

    case 'cancelled':
    case 'canceled':
      color = theme.graph.contrastText;
      backgroundColor = theme.misc.cardRed;
      break;

    case 'partial paid':
    case 'checked-out':
    case 'upcoming':
    case 'proforma':
    case 'pending_setup':
      color = theme.misc.navyBlue;
      backgroundColor = theme.misc.cowbellYellow;
      break;

    case 'draft':
    case 'open':
    case 'delisted':
      color = theme.text.tagColor;
      backgroundColor = theme.misc.backgroundSilver;
      break;

    case 'inactive':
    case 'declined':
    case 'terminated':
      color = theme.text.tagColor;
      backgroundColor = theme.misc.lightRed;
      break;

    case 'logged_out':
      color = theme.text.tableHeader;
      backgroundColor = theme.misc.backgroundSilver;
      break;

    case 'query':
    case 'expired':
      color = theme.palette.primary.contrastText;
      backgroundColor = theme.misc.matRed;
      break;

    case 'request_sent':
      color = theme.text.tagColor;
      backgroundColor = theme.misc.badgeBlue;
      break;

    case 'request_rejected':
      color = theme.text.label;
      backgroundColor = theme.misc.cardRed;
      break;
    case 'arrived':
      color = theme.text.purpleDark;
      backgroundColor = theme.misc.purpleLight;
      break;

    case 'yet_to_check-in':
      color = theme.misc.navyBlue;
      backgroundColor = theme.misc.skyBlue;
      break;
    case 'present':
      color = theme.misc.darkGreen;
      backgroundColor = theme.misc.leafGreen;
      break;
    case 'absent':
      color = theme.misc.cardRed;
      backgroundColor = theme.misc.paleRed;
      break;

    default:
      color = theme.palette.primary.contrastText;
      backgroundColor = theme.palette.primary.dark;
  }
  return (
    <Box>
      {status ? (
        <BoxContainer display='inline-grid' bgcolor={backgroundColor}>
          <Typography
            whiteSpace='nowrap'
            variant='imageHeader'
            textTransform='capitalize'
            color={color}
          >
            {status.split('_').join(' ').toLocaleUpperCase()}
          </Typography>
        </BoxContainer>
      ) : (
        'N/A'
      )}
    </Box>
  );
}
