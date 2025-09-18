import { Box, styled, Typography, LinearProgress, Dialog } from '@mui/material';

interface ProgressLoaderI {
  isProgressLoading: boolean;
  headerText: string;
  subText?: string;
  uploadCountStatus: number;
}

const CustomModal = styled(Dialog)(() => ({
  '.MuiDialog-paper': {
    width: '514px',
    padding: '20px',
  },
}));

const ProgressContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
  '.progress_header': {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(6),
  },
  '.progress_text': {
    fontWeight: 400,
  },
  '.progress_bar': {
    borderRadius: '3px',
    height: '6px',
  },
  '.progress_message': {
    textAlign: 'center',
    marginTop: theme.spacing(7.5),
  },
}));

export function ProgressLoader({
  isProgressLoading,
  headerText,
  subText,
  uploadCountStatus,
}: ProgressLoaderI) {
  return (
    <CustomModal open={isProgressLoading}>
      <ProgressContainer>
        <Box className='progress_header'>
          <Typography variant='h6'>{headerText}</Typography>
          <Typography className='progress_text' variant='subtitle2'>
            {`${uploadCountStatus}%`}
          </Typography>
        </Box>
        <LinearProgress className='progress_bar' variant='determinate' value={uploadCountStatus} />
        <Typography className='progress_message' variant='body2'>
          Please wait as we update the {subText}
        </Typography>
      </ProgressContainer>
    </CustomModal>
  );
}
