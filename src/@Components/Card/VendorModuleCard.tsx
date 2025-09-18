import { Box, styled, Typography } from '@mui/material';
import { AddonCardStyles } from '@Constants/CommonStyledComponents';
import { RoundedCircleIcon, ActiveTickmark } from '@Icons';

interface VendorModuleCardI {
  activeModule: boolean;
  handleControlSelectModule: () => void;
  moduleName: string;
  disabled?: boolean;
}

export const VendorModuleCardContainer = styled(Box)(({ theme }) => ({
  ...AddonCardStyles(theme),
  cursor: 'pointer',
  '.card_content': {
    padding: 0,
    textAlign: 'center',
    '&:last-child': {
      paddingBottom: 0,
    },
  },
}));

export function VendorModuleCard({
  activeModule,
  handleControlSelectModule,
  moduleName,
  disabled,
}: VendorModuleCardI) {
  return (
    <VendorModuleCardContainer onClick={handleControlSelectModule}>
      <Box
        className='addon_card'
        sx={{
          border: activeModule ? '2px solid #000000' : '1px solid #E7E7E7',
          pointerEvents: disabled ? 'none' : '',
        }}
      >
        <Box className='addon_tick_mark'>
          {activeModule ? <ActiveTickmark /> : <RoundedCircleIcon />}
        </Box>

        <Box className='card_content'>
          <img
            src='https://wybrid-vendor-portal-public.s3.ap-south-1.amazonaws.com/add.1659001278772.png'
            alt='cardIcon'
            width='44px'
            height='44px'
          />
          <Box className='addonName'>
            <Typography
              variant='h6'
              className='card_text'
              sx={{
                fontWeight: activeModule ? 500 : 400,
              }}
            >
              {moduleName}
            </Typography>
          </Box>
        </Box>
      </Box>
    </VendorModuleCardContainer>
  );
}
