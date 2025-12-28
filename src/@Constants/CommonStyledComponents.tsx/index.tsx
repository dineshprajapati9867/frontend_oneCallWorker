import { TextInput } from '@Primitives';
import {
  Theme,
  Avatar,
  styled,
  Box,
  Menu,
  Drawer,
  Popover,
  IconButton,
  TextField,
  Dialog,
  Card,
  Paper,
  InputLabel,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export function DragAndDropContainerStyles(theme: Theme) {
    return {
      '.title': {
        color: theme.palette.secondary.dark,
        marginBottom: theme.spacing(6),
      },
      '.subtitle': {
        display: 'flex',
        p: {
          marginLeft: theme.spacing(1),
        },
      },
      '.colorSubtitle': {
        color: theme.misc.selectedBlue,
        fontWeight: 400,
        textDecoration: 'underline',
      },
    };
  }
  export const TextFieldComponent = styled(TextField)(({ theme, error }) => ({
    '.MuiInputBase-root': {
      ...theme.typography.inputValue,
      backgroundColor: theme.misc.lightAsSilver,
      borderColor: error ? theme.palette.error.main : theme.misc.naturalLight,
      padding: 0,
      cursor: 'pointer',
      'fieldset > legend': {
        width: '0',
      },
      '.MuiInput-input': {
        ...theme.typography.inputValue,
        padding: theme.spacing(5, 4),
      },
      '.MuiOutlinedInput-input': {
        ...theme.typography.inputValue,
        padding: theme.spacing(5, 4),
        color: theme.palette.primary.main,
        '&:disabled': {
          background: theme.misc.lightAsSilver,
          cursor: 'not-allowed',
        },
      },
      fieldset: {
        borderColor: theme.misc.naturalLight,
      },
      '&.Mui-disabled': {
        '.MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
      },
      '.MuiInputAdornment-root': {
        marginRight: theme.spacing(4),
      },
    },
    '.Mui-error:after': {
      borderColor: theme.misc.darkRed,
      borderWidth: '2px',
    },
    '.MuiFormHelperText-root': {
      ...theme.typography.body2,
      marginLeft: '0',
      marginTop: theme.spacing(1),
      display: 'none',
    },
  }));
  export const EditContainer = styled(Box)(({ theme }) => ({
    height: '100%',
    backgroundColor: theme.palette.secondary.light,
    padding: theme.spacing(20, 40),
    [theme.breakpoints.up('xl')]: {
      padding: theme.spacing(17, 200, 150),
    },
    '.filePreviewWrap': {
      backgroundColor: theme.palette.primary.contrastText,
      padding: theme.spacing(18, 30),
      borderRadius: theme.spacing(1),
      '.fileHeading': {
        marginBottom: theme.spacing(15),
        color: theme.palette.primary.main,
      },
      '.fileSubHeading': {
        fontWeight: 400,
        color: theme.text.label,
      },
      '.fileNameWrap': {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(12),
        padding: theme.spacing(10, 12, 10, 7),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.secondary.light,
        '.fileName': {
          display: 'flex',
          alignItems: 'center',
          img: {
            marginRight: theme.spacing(5),
          },
          h6: {
            color: theme.palette.primary.main,
          },
        },
      },
      '.fileUploadFooter': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        button: {
          marginLeft: theme.spacing(7.5),
        },
      },
    },
  }));
  export const DragAndDropEditContainer = styled(Box)(({ theme }) => ({
    '.documentWrap': {
      '.MuiInputAdornment-positionStart': {
        marginRight: 0,
      },
      '.iconWrap': {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '.innerIconWrap': {
          display: 'flex',
          padding: theme.spacing(2.5),
          alignItems: 'center',
        },
      },
    },
    '.editWrapper': {
      display: 'flex',
      marginBottom: theme.spacing(1000),
    },
    '.profileAvatar': {
      width: '175px',
      height: '175px',
      borderRadius: '5px',
      marginBottom: theme.spacing(400),
    },
    '.avatarOptions': {
      width: theme.spacing(4300.5),
      textAlign: 'center',
      cursor: 'pointer',
    },
    '.replace': {
      color: theme.misc.statusBlue,
      textTransform: 'none',
      paddingRight: theme.spacing(5),
    },
    '.delete': {
      color: theme.misc.cardRed,
      textTransform: 'none',
      paddingLeft: theme.spacing(5),
    },
  }));