import { Box, Button, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Img404 from '../../@Assets/images/404.png';

const BoxContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  '.not-fount-img': {
    width: theme.spacing(124.68), // 249.36px
    height: theme.spacing(71.745), // 143.49px
    marginBottom: theme.spacing(8.255),
    img: {
      width: '100%',
      height: '100%',
    },
  },
  '.page-title': {
    color: theme.text.grayLightColor,
    marginBottom: theme.spacing(4.5),
  },
  '.page-subtitle': {
    opacity: 0.7,
    color: theme.text.grayLightColor,
    marginBottom: theme.spacing(12),
  },
}));

/**
 * Not found page components
 * @returns NotFoundPage components
 */
function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <BoxContainer>
      <Box className='not-fount-img'>
        <img src={Img404} alt='' />
      </Box>
      <Typography variant='h6' className='page-title'>
        Page did not load
      </Typography>
      <Typography variant='body1' className='page-subtitle'>
        Please try loading the page again
      </Typography>
      <Button size='small' variant='contained' onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </BoxContainer>
  );
}

export default NotFoundPage;
