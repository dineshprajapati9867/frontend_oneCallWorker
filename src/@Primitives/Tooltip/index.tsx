import {
  IconButton,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
} from '@mui/material';
import React from 'react';
import { SmallInfoIcon } from '../../@Assets/@Icons';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.misc.toolTip,
    color: theme.graph.secondary,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    padding: theme.spacing(6, 8),
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.misc.toolTip,
  },
}));

export interface ToolTipI {
  title?: string | any;
  type?: string;
  children?: any;
}

export function ToolTip({ title, type, children }: ToolTipI) {
  /**
   * Renders the children of the component.
   * @returns {React.ReactNode} The children of the component.
   */
  const renderChildren = () => {
    if (type === 'custom') {
      return children;
    }
    return <SmallInfoIcon />;
  };
  return (
    <HtmlTooltip
      arrow
      title={
        <Typography color='primary.contrastText' variant='body2'>
          {title}
        </Typography>
      }
    >
      <IconButton sx={{ padding: 0, margin: 0 }}>{renderChildren()}</IconButton>
    </HtmlTooltip>
  );
}
