import Chip from '@mui/material/Chip';

interface PropsI {
  label: string;
  setSelected?: (selected: boolean) => void;
  selected?: boolean;
  disabled?: boolean;
}

export function DayChip({ label, selected, setSelected, disabled }: PropsI) {
  const handleClick = () => {
    if (setSelected) {
      setSelected(!selected);
    }
  };

  return (
    <Chip
      label={label}
      disabled={disabled}
      variant='outlined'
      onClick={handleClick}
      sx={(theme) => ({
        '.MuiChip-label': {
          padding: 0,
        },
        height: theme.spacing(8),
        width: theme.spacing(8),
        backgroundColor: selected ? theme.misc.darkBlue : theme.palette.secondary.light,
        color: selected ? theme.palette.primary.contrastText : theme.misc.darkBlue,
        borderColor: selected ? theme.misc.darkBlue : theme.misc.borderColor,
        borderRadius: theme.spacing(2),
        marginRight: theme.spacing(4),
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: theme.spacing(4.5),
      })}
    />
  );
}

export default DayChip;
