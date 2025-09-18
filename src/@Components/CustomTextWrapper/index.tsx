import { CopyIcon, InfoIconSmall } from '@Icons';
import { Box, IconButton, styled, Typography } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import EllipsisText from 'react-ellipsis-text';

interface CustomTextWrapperI {
  header: string;
  value?: string | number;
  isCopyIcon?: boolean;
  isCopyDisabled?: boolean;
  tooltipTitle?: React.ReactNode;
  handleCopyValue?: () => void;
  ellipsesTextLength?: string;
  fontWeight?: number;
  isTextEllipsesRequired?: boolean;
}

const CustomTextWrapperContainer = styled(Box)(({ theme }) => ({
  maxWidth: theme.spacing(90),
  '.key_wrapper': {
    marginBottom: theme.spacing(7),
    color: theme.text.light,
    fontWeight: 400,
  },
  '.value_wrapper': {
    color: theme.text.neutralLight,
    // fontWeight: 400,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(4),
    wordBreak: 'break-word',
  },
  '.snackbar_copy': {
    height: theme.spacing(20),
    width: theme.spacing(50),
  },
  '.menuItem': {},
}));

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.misc.toolTip,
    fontSize: theme.spacing(6),
    lineHeight: '145%',
    fontWeight: '400',
    borderRadius: theme.spacing(3),
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.misc.toolTip,
  },
}));

export function CustomTextWrapper({
  header,
  value,
  isCopyIcon,
  isCopyDisabled,
  tooltipTitle,
  handleCopyValue,
  ellipsesTextLength = '32',
  fontWeight = 400,
  isTextEllipsesRequired = true,
}: CustomTextWrapperI) {
  return (
    <CustomTextWrapperContainer>
      <Typography className='key_wrapper' variant='subtitle2'>
        {header}
      </Typography>
      <Typography className='value_wrapper' variant='subtitle1' fontWeight={fontWeight}>
        <EllipsisText
          text={value || '--'}
          length={isTextEllipsesRequired ? ellipsesTextLength : 300}
          tooltip={value}
          data-tag='allowRowEvents'
        />
        {isCopyIcon && value ? (
          <IconButton disabled={isCopyDisabled} onClick={handleCopyValue}>
            <CopyIcon />
          </IconButton>
        ) : null}
        {tooltipTitle && (
          <CustomWidthTooltip title={tooltipTitle} arrow placement='bottom'>
            <Box height={16}>
              <InfoIconSmall />
            </Box>
          </CustomWidthTooltip>
        )}
      </Typography>
    </CustomTextWrapperContainer>
  );
}
