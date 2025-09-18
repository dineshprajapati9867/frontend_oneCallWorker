import { styled, Box, Typography } from '@mui/material';
import { AddonPlusIcon } from '@Icons';

export const AddonTemplate = styled(Box)(({ theme }) => ({
  width: theme.spacing(100.5),
  height: theme.spacing(76.5),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: `1px solid ${theme.misc.borderColor}`,
  borderRadius: theme.spacing(5),
  '.add_text': {
    color: theme.text.label,
    marginTop: theme.spacing(13),
    fontWeight: 400,
  },
}));

interface PropsI {
  handleClickOnCard: () => void;
  isCardDisabled: boolean;
}

export function AddonCreateTemplate({ handleClickOnCard, isCardDisabled }: PropsI) {
  return (
    <AddonTemplate
      onClick={handleClickOnCard}
      sx={() => ({
        pointerEvents: isCardDisabled ? 'none' : '',
        cursor: isCardDisabled ? 'not-allowed' : 'pointer',
      })}
    >
      <AddonPlusIcon />
      <Typography variant='h6' className='add_text'>
        Add
      </Typography>
    </AddonTemplate>
  );
}
