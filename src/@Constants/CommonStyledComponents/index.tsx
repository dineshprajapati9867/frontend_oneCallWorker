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

export function FlexiBookingDrawer(theme: Theme) {
  return {
    '.MuiPaper-root': {
      width: theme.spacing(250),
      height: 'calc(100vh - 70px)',
      top: theme.spacing(35),
      right: theme.spacing(32),
    },
    '.MuiBackdrop-root': {
      background: 'transparent',
    },
    '.drawer-header': {
      height: theme.spacing(32.5),
      padding: theme.spacing(0, 12),
      display: 'flex',

      alignItems: 'center',
      justifyContent: 'space-between',
      background: theme.palette.secondary.light,
    },
  };
}

export const AvatarStyle = styled(Avatar)(({ theme }) => ({
  ...theme.typography.h4,
  background: theme.palette.secondary.light,
  textAlign: 'center',
  width: `${theme.spacing(34.5)} !important`,
  height: `${theme.spacing(34.5)} !important`,
  fontWeight: theme.spacing(200),
  top: theme.spacing(15),
  left: theme.spacing(10),
  color: theme.palette.secondary.dark,
}));

export const AddUserFundDrawer = styled(Drawer)(({ theme }) => ({
  '.MuiDrawer-paper': {
    width: theme.spacing(291.5),
    background: theme.palette.secondary.light,
    borderLeft: 0,
    '.drawer-header': {
      padding: theme.spacing(7, 12),
      background: theme.palette.primary.contrastText,
      borderBottom: `1px solid ${theme.misc.borderColor}`,
    },
    '.drawer-body': {
      padding: theme.spacing(12, 15, 35, 15),
      height: '100%',
      overflow: 'auto',
    },
    '.notification-item-card': {
      marginBottom: theme.spacing(10),
    },
  },
}));

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

export const LeadBoxContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  width: theme.spacing(128),
  background: theme.palette.secondary.light,
  borderRadius: theme.spacing(5),
  marginRight: theme.spacing(6),
  '.container-title-block': {
    position: 'sticky',
    top: theme.spacing(0),
    height: theme.spacing(20),
    width: '100%',
    zIndex: '99',
    backgroundColor: theme.palette.secondary.light,
    borderTopLeftRadius: theme.spacing(5),
    borderTopRightRadius: theme.spacing(5),
    '.header-title': {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(4, 5.5),
    },
  },
  '.container-body': {
    padding: theme.spacing(6.5, 4.5),
    paddingTop: theme.spacing(2),
    minHeight: 'calc(100vh - 334px)',
  },
}));

export const FloorTabMenuContainer = styled(Menu)(({ theme }) => ({
  '.MuiList-root': {
    padding: theme.spacing(5),
    '.MuiMenuItem-root': {
      padding: theme.spacing(3, 5, 3, 8),
      width: 120,
    },
  },
  '.menuIconWrap': {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  '.menuItem': {
    display: 'flex',
    alignItems: 'center',
    p: {
      marginLeft: theme.spacing(4),
      color: theme.misc.dropDownText,
    },
  },
  '.deleteWrap': {
    marginTop: theme.spacing(7.5),
    p: {
      color: theme.misc.cardRed,
    },
  },
}));

export const BillingTableHeaders = (theme: Theme) => ({
  '.tableHeader': {
    ...theme.typography.body2,
    color: theme.text.tableHeader,
    th: {
      textAlign: 'start',
    },
    '.header_id': {
      width: theme.spacing(16),
    },
    '.header_items': {
      width: theme.spacing(109),
    },
    '.header_quantity': {
      width: theme.spacing(54),
    },
    '.header_billingType': {
      width: theme.spacing(62.5),
    },
    '.header_price': {
      width: theme.spacing(76),
    },
    '.header_billingPeriod': {
      width: theme.spacing(64),
    },
    '.header_rent_startDate': {
      width: theme.spacing(71),
    },
    '.header_incr': {
      width: theme.spacing(40),
    },
    '.header_incrFreq': {
      width: theme.spacing(40),
    },
    '.header_totalAmount': {
      paddingLeft: theme.spacing(10),
    },
  },
});

export const BoxContainer = styled(Box)(({ theme }) => ({
  height: '100%',
  position: 'relative',
  display: 'flex',
  '.dropzoneMain': {
    width: '100%',
  },
  '.instructionsWrap': {
    width: '450px',
    borderLeft: `1px solid ${theme.palette.primary.light}`,
    height: `calc(100vh - 213px)`,
    overflowY: 'auto',
    '.instructionsHeading': {
      padding: theme.spacing(10),
      borderBottom: `1px solid ${theme.palette.primary.light}`,
    },
    '.instructionsBody': {
      padding: theme.spacing(10),
      '.instructionsStep': {
        h6: {
          marginBottom: theme.spacing(7),
        },
        '.downloadDesk': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: theme.spacing(7),
          textDecoration: 'none',
          p: {
            color: theme.text.lightBlue,
          },
        },
        '.notes': {
          marginBottom: theme.spacing(10),
          h6: {
            fontWeight: 400,
            color: theme.text.darkGrey,
            marginBottom: theme.spacing(3),
          },
          p: {
            fontWeight: 400,
            color: theme.text.darkGrey,
          },
        },
        '&.step2': {
          h6: {
            marginTop: theme.spacing(10),
          },
          p: {
            marginBottom: theme.spacing(10),
          },
          '.dataExcel': {
            marginBottom: theme.spacing(6),
          },
          '.deskType': {
            h6: {
              marginTop: theme.spacing(10),
              marginBottom: theme.spacing(2.5),
              fontWeight: 600,
              color: theme.text.darkGrey,
            },
            ul: {
              color: theme.text.darkGrey,
              lineHeight: '125%',
              margin: 0,
              li: {
                margin: 0,
                h6: {
                  margin: 0,
                  fontWeight: 400,
                },
              },
            },
          },
          '.instructionsInfo': {
            '.MuiTypography-subtitle1': {
              marginTop: theme.spacing(10),
              marginBottom: theme.spacing(2.5),
              color: theme.text.darkGrey,
              fontWeight: 600,
            },
            '.MuiTypography-subtitle2': {
              color: theme.text.darkGrey,
              fontWeight: 400,
              marginTop: theme.spacing(0),
            },
          },
        },
      },
    },
  },
  '.dropZoneContainer': {
    padding: theme.spacing(20),
    [theme.breakpoints.up('xl')]: {
      padding: theme.spacing(20, 125),
    },
  },
  '.dropZoneWrap': {
    width: '100%',
    height: '100%',
    border: '1px dashed #B0B0B0',
    padding: '200px 40px 177px',
    backgroundColor: theme.palette.secondary.light,
    cursor: 'pointer',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    [theme.breakpoints.down('lg')]: {
      padding: '80px 40px 100px',
    },
    '.noFloorPlan': {
      h6: {
        marginBottom: theme.spacing(11),
        color: theme.palette.primary.main,
      },
    },
    '.filesText': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.palette.primary.contrastText,
      padding: theme.spacing(4, 5),
      width: 'max-content',
      margin: '0 auto',
      p: {
        color: theme.palette.secondary.dark,
      },
      '.blueText': {
        color: theme.text.lightBlue,
        marginLeft: theme.spacing(3.5),
      },
    },
    '.textFormat': {
      marginTop: theme.spacing(7),
      p: {
        color: theme.palette.secondary.dark,
      },
    },
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

export function ActivePropertyCustomerStyles(theme: Theme) {
  return {
    '.box-wrapper': {
      marginTop: theme.spacing(20),
    },
    '.company-name': {
      color: theme.text.neutralLight,
      marginBottom: theme.spacing(10),
    },
    '.address': {
      color: theme.text.neutralLight,
      marginBottom: theme.spacing(20),
    },
    '.label': {
      color: theme.text.light,
      fontWeight: 400,
      marginBottom: theme.spacing(7),
    },
    '.info-card': {
      width: theme.spacing(190),
      border: `1px solid ${theme.palette.primary.light}`,
      padding: theme.spacing(10),
      borderRadius: theme.spacing(5),
      marginBottom: theme.spacing(20),
      marginTop: theme.spacing(10),
    },
    '.neutral-color': {
      color: theme.text.neutralLight,
    },
    '.contractCard': {
      width: theme.spacing(162),
      padding: theme.spacing(12.5, 10),
      border: `1px solid ${theme.palette.primary.light}`,
      borderRadius: theme.spacing(5),
      boxSizing: 'border-box',
      margin: theme.spacing(17, 0, 20),
    },
    '.contract-label': {
      fontSize: theme.spacing(8),
      letterSpacing: '1%',
    },
    '.floorTable': {
      width: '50%',
    },
    '.info-box': {
      cursor: 'pointer',
    },
    '.grandTotal': {
      ...theme.typography.body1,
      fontWeight: 600,
      color: theme.text.dark,
    },
    '.divider': {
      marginTop: theme.spacing(20),
    },
  };
}

export function ActivePropertyAvatar(theme: Theme) {
  return {
    '.avatarWrap': {
      width: theme.spacing(80),
      height: theme.spacing(80),
      cursor: 'pointer',
      marginBottom: theme.spacing(4),
    },
    '.profileAvatar': {
      width: theme.spacing(80),
      height: theme.spacing(80),
      borderRadius: theme.spacing(3),
      marginBottom: theme.spacing(4),
      img: {
        objectFit: 'cover',
      },
    },
    '.propertyLogoLabel': {
      marginBottom: theme.spacing(4.5),
    },
  };
}

export const StyledPopover = styled(Popover)(({ theme }) => ({
  '.MuiPopover-paper': {
    boxShadow: '0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31)',
  },
  '.menuItem': {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3, 6.5),
    cursor: 'pointer',
    '&:hover': {
      background: theme.misc.backgroundSilver,
    },
  },
}));

export function CustomerDashboardStyles(theme: Theme) {
  return {
    background: theme.graph.secondary,
    borderRadius: theme.spacing(2.5),
    [theme.breakpoints.up('lg')]: {
      minHeight: '700px',
    },
    '.tabWrapper': {
      margin: theme.spacing(6, 16),
    },
    '.basic_button': {
      borderRadius: theme.spacing(2.5),
      padding: theme.spacing(4.5),
      height: '50%',
      width: '50%',
      border: 'none',
      '&:hover': {
        border: 'none',
      },
    },
  };
}

export function TabStyles(theme: Theme) {
  return {
    '.MuiTab-root': {
      ...theme.typography.body1,
      textTransform: 'capitalize',
      color: theme.text.label,
      padding: theme.spacing(6, 0),
    },
    '.Mui-selected': {
      color: theme.palette.primary.dark,
      fontWeight: '600',
      fontSize: theme.spacing(7),
    },
    '.tab': {
      marginRight: theme.spacing(12.5),
    },
    '.tabHeader': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: theme.spacing(6, 0),
      '.tabRight': {
        display: 'flex',
        alignItems: 'center',
      },
    },
    '& .MuiTabs-indicator': {
      width: '100%',
      // backgroundColor: "red"
    },
  };
}

export const CardWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(15),
  marginBottom: theme.spacing(20),
  border: '1px solid',
  borderColor: theme.misc.borderColor,
  borderRadius: theme.spacing(4),
  width: 584,
  '.MuiFormControl-root': {
    width: theme.spacing(262),
    '.MuiInputBase-root': {
      height: theme.spacing(20),
      width: theme.spacing(262),
      '.MuiInputBase-input': {
        width: theme.spacing(262),
      },
    },
  },
}));
export const Divider = styled(Box)(({ theme }) => ({
  margin: theme.spacing(15, 0),
  backgroundColor: theme.palette.primary.light,
  height: '1px',
}));

export const FormWrap = styled(Box)(({ theme }) => ({
  '.ownerInfo': {
    backgroundColor: theme.misc.infoBackground,
    padding: theme.spacing(4.5, 5.5, 7.5, 8),
    marginTop: theme.spacing(15),
    height: theme.spacing(32),
    width: theme.spacing(262),
  },
  '.sales-info': {
    color: theme.text.tableHeader,
    cursor: 'pointer',
  },
  '.modules_wrapper': {
    padding: theme.spacing(16, 0, 12, 32),
    '.header_text': {
      paddingBottom: theme.spacing(2),
    },
    '.module_wrapper': {
      paddingTop: theme.spacing(12),
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
    },
  },
}));

export const PropertyDedicatedContainer = styled(Box)(({ theme }) => ({
  height: `100%`,
  overflow: 'hidden',
  // borderRight: `1px solid ${theme.misc.borderColor}`,
  '::-webkit-scrollbar': { display: 'none !important' },
  '.MuiTabs-root': {
    '.MuiTab-root.Mui-selected': {
      color: theme.palette.primary.dark,
      background: theme.misc.cardBG,
    },
    '.MuiButtonBase-root': {
      height: theme.spacing(27.5),
      alignItems: 'flex-start',
      borderBottom: `1px solid ${theme.misc.borderColor}`,
      ...theme.typography.subtitle1,
      color: theme.palette.secondary.dark,
      background: theme.palette.primary.contrastText,
      textTransform: 'capitalize',
    },
  },
  '.tab-list-block': {
    '.MuiTabs-indicator': {
      background: 'none',
    },
  },
}));


export const NavbarAvatarStyle = styled(Avatar)(({ theme }) => ({
  ...theme.typography.h4,
  background: theme.palette.secondary.light,
  textAlign: 'center',
  width: `${theme.spacing(23.5)} !important`,
  height: `${theme.spacing(23.5)} !important`,
  color: theme.palette.secondary.dark,
  fontSize: theme.spacing(8),
  fontWeight: '500',
}));

export const RoundIcon = styled(IconButton)(({ theme }) => ({
  border: `1px solid ${theme.misc.misctext1}`,
  borderRadius: theme.spacing(24),
  backgroundColor: theme.palette.primary.dark,
  padding: theme.spacing(4.5),
  size: 'large',
  edge: 'start',
  color: theme.palette.primary.contrastText,
  height: theme.spacing(18.5),
  width: theme.spacing(18.5),
  marginRight: theme.spacing(2.5),
  marginLeft: theme.spacing(2.5),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
}));

export function RoundNotificationStyles(theme: Theme) {
  return {
    borderRadius: theme.spacing(24),
    backgroundColor: theme.palette.primary.contrastText,
    padding: theme.spacing(4, 4, 4, 4),
    size: 'large',
    edge: 'start',
    color: theme.text.darkBlack,
    height: theme.spacing(18.5),
    width: theme.spacing(18.5),
    marginRight: theme.spacing(6),
    marginLeft: theme.spacing(6),
  };
}

export const LogoWrap = styled('div')(({ theme }) => ({
  marginRight: theme.spacing(13.25),
  [theme.breakpoints.down('lg')]: {
    marginRight: theme.spacing(10),
  },
  '.logo': {
    padding: theme.spacing(5.5, 12, 6, 11.5),
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(2.5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const AvatarWrap = styled(Avatar)(({ theme }) => ({
  fontSize: theme.spacing(6),
  lineHeight: theme.spacing(10),
  color: theme.palette.primary.light,
  background: theme.palette.primary.main,
}));

export function NavbarPopoverStyles(theme: Theme) {
  return {
    '.MuiPopover-paper': {
      borderRadius: theme.spacing(4),
    },
    '.menuItem': {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(7),
      marginTop: theme.spacing(4),
      cursor: 'pointer',
      padding: theme.spacing(4),
      '&:hover': {
        backgroundColor: theme.misc.lightGrayBG,
      },
      letterSpacing: theme.spacing(0.3),
      '.menuIcon': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: theme.spacing(12),
        height: theme.spacing(12),
      },
      '.menuItemText': {
        ...theme.typography.body1,
      },
      '.logoutText': {
        color: theme.misc.cardRed,
      },
    },
  };
}

export const BillingProfileLayout = styled(Box)(({ theme }) => ({
  width: theme.spacing(356),
  padding: theme.spacing(15, 16),
  '.details-header': {
    paddingBottom: theme.spacing(10),
  },
  '.details-input': {
    paddingBottom: theme.spacing(15),
  },
  '.details-font': {
    fontWeight: 400,
    color: theme.text.darkGrey,
  },
  '.info-font': {
    color: theme.text.neutralLight,
    marginTop: theme.spacing(5),
  },
  '.billing-info-box': {
    display: 'flex',
  },
  '.details-box': {
    width: theme.spacing(220),
  },
  '.input-place-wrapper': {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
  },
}));

export const BillingProfileContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(15, 16, 0, 16),
  display: 'flex',
  justifyContent: 'space-between',
}));

export const AnnouncementStyledPopover = styled(Popover)(({ theme }) => ({
  '.modalWrapper': {
    width: theme.spacing(84),
    height: theme.spacing(56),
    padding: theme.spacing(8, 8, 4, 4),
  },

  '.modalItems': {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: theme.spacing(5, 0, 5, 5),
    '&:hover': {
      backgroundColor: theme.misc.lightGrayBG,
    },
  },
  '.editText': {
    color: theme.misc.dropDownText,
    marginLeft: theme.spacing(4),
  },
  '.deleteText': {
    color: theme.calendar.red,
    marginLeft: theme.spacing(5.5),
  },
}));

export function LeadModalContainer(theme: Theme) {
  return {
    padding: theme.spacing(10.7, 16),
    '.leadWrapper': {
      border: `1px solid ${theme.misc.greyBorder}`,
      borderRadius: theme.spacing(4),
      padding: theme.spacing(15),
      marginBottom: theme.spacing(15),
    },
    '.subTitle': {
      margin: theme.spacing(0, 0, 15),
      fontWeight: 500,
    },
    '.lead_description': {
      '.MuiFormHelperText-root': {
        top: `${theme.spacing(61)} !important`,
      },
    },
    '.leadSpocList': {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(10),
      '.leadSpoc': {
        display: 'flex',
        width: theme.spacing(262),
        height: theme.spacing(25),
        border: `1px solid ${theme.misc.borderColor}`,
        borderRadius: theme.spacing(2.5),
        alignItems: 'center',
        padding: theme.spacing(5),
        position: 'relative',
      },
      '.spocAvatar': {
        width: theme.spacing(16),
        height: theme.spacing(16),
        fontSize: theme.spacing(6),
      },
      '.removeSpocButton': {
        cursor: 'pointer',
        position: 'absolute',
        right: 10,
      },
    },
  };
}

export const BasicModalWrap = styled(Dialog)(({ theme }) => ({
  '.MuiPaper-root': {
    maxWidth: theme.spacing(258),
    padding: theme.spacing(12),
  },
  '.modalHeader': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(12),
    h5: {
      color: theme.palette.primary.main,
    },
  },
  '.modalBody': {
    '.modalInputWrap': {
      marginBottom: theme.spacing(18),
    },
    '.modalDeskInputWrap': {
      // display: "flex",
      marginBottom: theme.spacing(18),
      '.modalDeskInput': {
        // width: 135,
        // marginRight: theme.spacing(18),
      },
    },
    '.totalDesk': {
      color: theme.text.light,
      p: {
        color: theme.text.label,
        fontWeight: 600,
        marginTop: theme.spacing(7),
      },
    },
  },
  '.modalFooter': {
    '.footerButton': {
      marginRight: theme.spacing(10),
      padding: theme.spacing(3, 12.5),
      '&:last-of-type': {
        color: theme.text.label,
      },
    },
  },
}));

export const QuickInfoAvatarStyle = styled(Avatar)(({ theme }) => ({
  background: theme.palette.secondary.light,
  textAlign: 'center',
  width: `${theme.spacing(17.5)} !important`,
  height: `${theme.spacing(17.5)} !important`,
  fontSize: theme.spacing(6.5),
  fontWeight: theme.spacing(200),
  lineHeight: theme.spacing(7.6),
  color: theme.palette.secondary.dark,
}));

export const QuickInfoPopover = styled(Popover)(({ theme }) => ({
  '.MuiPopover-paper': {
    boxShadow: '0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31)',
  },
  '.menuItem': {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3, 6.5),
    cursor: 'pointer',
    '&:hover': {
      background: theme.misc.backgroundSilver,
    },
  },
}));

export const InvoiceListTableLayout = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 1),
  '.search': {
    paddingBottom: theme.spacing(2),
    marginTop: theme.spacing(-5),
    display: 'flex',
    justifyContent: 'space-between',
  },
  '.noDataWrap': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(40),
  },
  '.dataTable': {},
  '.MuiList-root': {
    padding: theme.spacing(14),
  },
}));

export function FloorTabStyles(theme: Theme) {
  return {
    '.sideBarHeader': {
      padding: theme.spacing(10, 14, 8, 12),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid',
      borderColor: theme.misc.greyBorder,
      h6: {
        color: theme.text.light,
        fontWeight: 400,
      },
    },
    '.sideBarDeskHead': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTop: '2px solid',
      borderBottom: '1px solid',
      borderColor: theme.misc.greyBorder,
      padding: theme.spacing(7, 11, 6, 12),
      '.deskHeading': {
        display: 'flex',
        alignItems: 'center',
        h6: {
          marginRight: theme.spacing(2),
          color: theme.text.label,
          fontWeight: 400,
        },
      },
      '.deskAddIcon': {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      },
    },
    '.sideBarDeskInfo': {
      '.emptyTags': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(22, 0, 28),
      },
      '.deskTags': {
        '.tagInfo': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: theme.spacing(7.5, 6, 7.5, 12),
          borderBottom: '1px solid',
          borderColor: theme.palette.primary.light,
          cursor: 'pointer',
          h6: {
            color: theme.text.label,
          },
          '.tagDeskNumber': {
            display: 'flex',
            alignItems: 'center',
            h6: {
              fontWeight: 400,
              marginRight: theme.spacing(22),
            },
          },
          '.meetingTag': {
            display: 'flex',
            alignItems: 'center',
            '.meetingTagSeat': {
              h6: {
                fontWeight: 400,
                marginLeft: theme.spacing(5.5),
                color: theme.text.label,
              },
            },
          },
        },
        '.active': {
          backgroundColor: theme.palette.primary.dark,
          h6: {
            color: theme.palette.primary.contrastText,
          },
          svg: {
            fill: theme.misc.borderColor,
          },
          '.meetingTag': {
            '.meetingTagSeat': {
              h6: {
                color: theme.palette.primary.contrastText,
              },
            },
          },
        },
      },
    },
    '.bigMenuIcon': {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    },
    '.assignTagWrap': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      '.noDeskInfo': {
        padding: theme.spacing(15, 25),
        marginTop: theme.spacing(75),
        h6: {
          marginBottom: theme.spacing(3),
        },
      },
    },
  };
}


export const LeadPipelineContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  '.noDataWrap': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(40),
  },
}));

export const DistributingCreditsStyledPopover = styled(Popover)(({ theme }) => ({
  boxShadow: '0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31)',
  '.menuContainer': {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(7),
    padding: theme.spacing(5),
  },
  '.menuItem': {
    width: theme.spacing(74),
    padding: theme.spacing(3, 8),
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.misc.lightGrayBG,
    },
  },
}));

export function CoWorkingCardStyles(theme: Theme) {
  return {
    '.mainWrapper': {
      background: theme.palette.secondary.light,
      width: theme.spacing(161),
      height: theme.spacing(185),
      borderRadius: theme.spacing(2.5),
      margin: '14px',
      cursor: 'pointer',
    },
    '.back_image_wrap': {
      position: 'relative',
      width: '322px',
      height: '203px',
      '&:after': {
        // position: "fixed",
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
      },
    },
    '.space_id': {
      position: 'absolute',
      top: 19,
      left: 22,
      color: theme.palette.primary.contrastText,
      fontSize: theme.spacing(7),
    },
    '.status': {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      top: 21.5,
      right: 26,
      fontSize: theme.spacing(6),
      borderRadius: theme.spacing(1.5),
      letterSpacing: theme.spacing(0.2),
      padding: theme.spacing(0.5, 2, 0, 2),
    },
    '.imageBox': {
      position: 'absolute',
      width: '70px',
      height: '70px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: theme.palette.primary.light,
      bottom: -21.5,
      left: 26,
    },
    '.image': {
      width: '50px',
      height: '50px',
      borderRadius: theme.spacing(2.5),
    },
    '.edit_property': {
      background: theme.palette.secondary.light,
      marginRight: theme.spacing(23.5),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '.spaceLocation': {
      fontWeight: '500',
      color: theme.palette.secondary.dark,
      paddingTop: theme.spacing(2),
    },
    '.text_wrap': {
      wordBreak: 'break-word',
    },
    '.contract': {
      color: theme.palette.secondary.dark,
      fontWeight: '500',
    },
    '.expiryDate': {},
  };
}

export function LeadLayoutStyles(theme: Theme) {
  return {
    '.headerEnd': {
      display: 'flex',
      alignItems: 'center',
    },
    '.threeDots': {
      display: 'flex',
      cursor: 'pointer',
      marginLeft: theme.spacing(9),
      '.MuiIconButton-root': {
        padding: theme.spacing(4, 8),
      },
    },
    '.tabWrapper': {
      '.tab_box': {
        borderBottom: 1,
        borderColor: 'divider',
      },
      '.MuiTab-root': {
        fontSize: theme.spacing(7),
        lineHeight: theme.spacing(9),
        fontWeight: 500,
        textTransform: 'capitalize',
        color: theme.text.darkGrey,
        padding: theme.spacing(6, 0),
      },
      '.Mui-selected': {
        color: theme.palette.primary.dark,
      },
      '.tab': {
        marginLeft: theme.spacing(16),
      },
    },
  };
}

export function LeadPopoverStyles(theme: Theme) {
  return {
    boxShadow: '0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31)',
    '.menuContainer': {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(7),
      padding: theme.spacing(5),
    },
  };
}

export function BasicModalWrapStyles(theme: Theme) {
  return {
    '.MuiPaper-root': {
      maxWidth: 516,
      padding: theme.spacing(12),
    },
    '.modalHeader': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: theme.spacing(12),
      h5: {
        color: theme.palette.primary.main,
      },
    },
    '.modalBody': {
      '.modalInputWrap': {
        marginBottom: theme.spacing(18),
      },
      '.modalDeskInputWrap': {
        display: 'flex',
        marginBottom: theme.spacing(18),
        '.modalDeskInput': {
          width: 135,
          marginRight: theme.spacing(18),
        },
      },
      '.totalDesk': {
        color: theme.text.light,
        p: {
          color: theme.text.label,
          fontWeight: 600,
          marginTop: theme.spacing(7),
        },
      },
    },
    '.modalFooter': {
      '.footerButton': {
        marginRight: theme.spacing(10),
        padding: theme.spacing(3, 12.5),
        '&:last-of-type': {
          color: theme.text.label,
        },
      },
    },
  };
}

export function BasicDetailsStyles(theme: Theme) {
  return {
    '.formHeader': {
      padding: theme.spacing(14, 16),
    },
    '.divider': {
      backgroundColor: theme.palette.primary.light,
      height: '1px',
    },
  };
}

export const BasicDetailsFormWrap = styled(Box)(({ theme }) => ({
  '.ownerInfo': {
    backgroundColor: theme.misc.infoBackground,
    padding: theme.spacing(4.5, 5.5, 7.5, 8),
    marginTop: theme.spacing(15),
    height: theme.spacing(32),
    width: theme.spacing(262),
  },
  '.sales-info': {
    color: theme.text.tableHeader,
    cursor: 'pointer',
  },
}));

export const BasicDetailsCardWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(15),
  marginBottom: theme.spacing(20),
  border: '1px solid',
  borderColor: theme.misc.borderColor,
  borderRadius: theme.spacing(4),
  width: 584,
  '.MuiFormControl-root': {
    width: theme.spacing(262),
    '.MuiInputBase-root': {
      height: theme.spacing(20),
      width: theme.spacing(262),
      '.MuiInputBase-input': {
        width: theme.spacing(262),
      },
    },
  },
}));

export const AddItemsPopover = styled(Popover)(({ theme }) => ({
  '.addItemDropdown': {
    background: theme.misc.lightAsSilver,
    boxShadow: 1,
    border: `1px solid ${theme.misc.borderColor}`,
    width: theme.spacing(130),
    height: 'auto',
    borderRadius: theme.spacing(1.5),
    maxHeight: theme.spacing(92),
    overflow: 'auto',
    '.dropDownListItem': {
      ...theme.typography.body1,
      padding: theme.spacing(4, 8),
      display: 'flex',
      justifyContent: 'flex-start',
      '&:hover': {
        background: theme.palette.primary.light,
        cursor: 'pointer',
      },
    },
  },
}));

export function AddonCardStyles(theme: Theme) {
  return {
    '.addonName': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingBottom: theme.spacing(2),
    },
    '.addon_card': {
      position: 'relative',
      width: theme.spacing(100),
      minHeight: theme.spacing(76.5),
      maxHeight: theme.spacing(220),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.spacing(5),
    },
    '.addon_tick_mark': {
      position: 'absolute',
      top: 10,
      right: 10,
    },
    '.input_controllers': {
      maxWidth: theme.spacing(75),
    },
    '.card_text': {
      marginTop: theme.spacing(13),
      color: theme.text.label,
    },
    '.adding_cost_to_master': {
      marginTop: theme.spacing(9),
    },
    '.adding_credit_buttons': {
      cursor: 'pointer',
      padding: theme.spacing(10, 0, 10, 0),
    },
    '.masterAddonCredit': {
      display: 'flex',
      '.masterAddonCost': {
        ...theme.typography.subtitle2,
        fontWeight: '400',
        color: theme.text.light,
        marginRight: theme.spacing(4),
        lineHeight: theme.spacing(20),
      },
      '.input_controllers': {
        maxWidth: theme.spacing(55),
      },
    },
  };
}

export function FloorPlanImageContainerStyles(theme: Theme) {
  return {
    width: '100%',
    height: '100%',
    border: '1px dashed #B0B0B0',
    padding: '205px 40px',
    backgroundColor: theme.palette.secondary.light,
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    '.noFloorPlan': {
      h6: {
        marginBottom: theme.spacing(3.5),
        color: theme.palette.primary.main,
      },
      p: {
        marginBottom: theme.spacing(16.5),
        color: theme.palette.secondary.dark,
      },
    },
  };
}

export const BillingBoxContainer = styled(Box)(({ theme }) => ({
  ...BillingTableHeaders(theme),
  margin: theme.spacing(10, 0),
  background: theme.palette.secondary.light,
  '.tableWrapper': {
    overflowX: 'auto',
    '.table_main': {
      marginBottom: theme.spacing(20),
    },
  },
  h6: {
    margin: theme.spacing(10, 0),
  },

  '.tableRows': {
    padding: theme.spacing(7.5, 3, 7.5, 3),
    '.table_id': {
      width: theme.spacing(16),
    },
    '.items': {
      width: theme.spacing(109),
      paddingTop: theme.spacing(4.5),
    },
    '.quantity': {
      width: theme.spacing(54),
      paddingTop: theme.spacing(4.5),
    },
    '.billingType': {
      width: theme.spacing(62.5),
      paddingTop: theme.spacing(4.5),
    },
    '.price': {
      width: theme.spacing(76),
      paddingTop: theme.spacing(4.5),
    },
    '.billingPeriod': {
      width: theme.spacing(64),
      paddingTop: theme.spacing(4.5),
    },
    '.rent_start_date': {
      width: theme.spacing(71),
      paddingTop: theme.spacing(3),
    },
    '.incr_percentage': {
      width: theme.spacing(40),
      paddingTop: theme.spacing(4.5),
    },
    '.incr_frequency': {
      width: theme.spacing(50),
      paddingTop: theme.spacing(4.5),
    },
    '.total_amount': {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: theme.spacing(5, 3, 0, 3),
    },
    '.delete_row': {
      padding: theme.spacing(5, 0, 0, 15),
    },
  },
  '.total_container': {
    width: '100%',
    maxWidth: '1374px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderTop: `1px solid ${theme.misc.borderColor}`,
    marginTop: theme.spacing(9.5),
    '.totalText': {
      marginRight: theme.spacing(65.5),
      color: theme.text.label,
    },
    '.totalAmount': {
      marginRight: theme.spacing(37),
      color: theme.text.label,
    },
  },
}));

export const WifiCard = styled(Card)(({ theme }) => ({
  '.masterAddonCredit': {
    display: 'flex',
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(20),
    '.masterAddonCost': {
      ...theme.typography.subtitle2,
      fontWeight: '400',
      color: theme.text.light,
      marginRight: theme.spacing(4),
      lineHeight: theme.spacing(20),
    },
    '.input_controllers': {
      maxWidth: theme.spacing(79),
    },
  },
}));

// export const WifiInput = styled(TextInput)(() => ({
//   marginLeft: '20px',
//   '.MuiTextField-root': {
//     width: '100px !important',
//     fontSize: '13px',
//     fontWeight: '600',
//   },
// }));

export const LeadCardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  background: theme.palette.primary.contrastText,
  minWidth: theme.spacing(120),
  maxWidth: theme.spacing(120),
  border: `1px solid ${theme.misc.borderColor}`,
  borderRadius: theme.spacing(2.5),
  marginBottom: theme.spacing(7.5),
  '&:hover': {
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  },
  '.detailWrapper': {
    width: '100%',
    cursor: 'pointer',
    padding: theme.spacing(2, 4, 4),
  },
  '.editBlock': {
    display: 'flex',
    cursor: 'pointer',
    height: theme.spacing(17),
    '.MuiIconButton-root': {
      padding: theme.spacing(4),
    },
  },
  '.companyName': {
    fontWeight: 400,
    color: theme.text.light,
    whiteSpace: 'nowrap',
    width: theme.spacing(84),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  '.leadDetail': {
    color: theme.text.light,
  },
  '.avatar': {
    width: theme.spacing(12),
    height: theme.spacing(12),
    color: theme.text.light,
    fontSize: theme.spacing(6),
    background: theme.palette.primary.light,
    textTransform: 'uppercase',
  },
  '.totalMsg': {
    fontWeight: 400,
    color: theme.text.label,
    marginLeft: theme.spacing(4),
    display: 'flex',
    alignSelf: 'flex-end',
  },
}));

export const CompanyCardStyles = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  '.titleWrap': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(7),
  },
  '.cardWrap': {
    padding: theme.spacing(11.5, 12.5, 11.5),
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: theme.spacing(2.5),
    '.companyName': {
      fontWeight: 400,
      color: theme.text.primary,
    },
    '.areaBlock': {
      color: theme.text.light,
      lineHeight: theme.spacing(9),
    },
    '.iconBlock': {
      display: 'flex',
      cursor: 'pointer',
      '.MuiIconButton-root': {
        padding: theme.spacing(4, 8),
      },
    },
    '.head_quater': {
      ...theme.typography.body1,
      color: theme.text.light,
      marginTop: theme.spacing(4),
    },
  },
}));

export function VendorPropertyTableStyles(theme: Theme) {
  return {
    '.rdt_Table': {
      '.rdt_TableBody': {
        '.rdt_TableRow': {
          minHeight: theme.spacing(36),
        },
      },
    },
  };
}

export function ActivityContainerStyles(theme: Theme) {
  return {
    '.files_selected': {
      ...theme.typography.body1,
      color: theme.text.light,
    },
    '.attachment_preview_container': {
      margin: theme.spacing(4, 0, 6),
      display: 'flex',
      overflowX: 'auto',
      gap: theme.spacing(13),
      '.attachment_preview': {
        position: 'relative',
        '.preview_avatar': {
          height: theme.spacing(51),
          borderRadius: theme.spacing(2.5),
          display: 'inline-block',
          width: theme.spacing(51),
          objectFit: 'cover',
        },
        '.preview_delete_button': {
          position: 'absolute',
          background: theme.palette.primary.contrastText,
          height: theme.spacing(12),
          width: theme.spacing(12),
          borderRadius: theme.spacing(6),
          border: `1px solid ${theme.misc.borderColor}`,
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bottom: 90,
          left: 90,
        },
      },
    },
    '.image_preview': {
      cursor: 'zoom-in',
    },
  };
}

export function TicketDetailsInfoStyles(theme: Theme) {
  return {
    '.details_card': {
      marginTop: theme.spacing(9),
      display: 'flex',
      width: theme.spacing(209),
      flexDirection: 'column',
      gap: theme.spacing(6),
    },
    '.individual_details_box': {
      display: 'flex',
      alignItems: 'center',
    },
    '.details_header_box': {
      width: theme.spacing(76),
    },
    '.details_info': {
      display: 'flex',
      alignItems: 'center',
      '.details_avatar': {
        fontSize: theme.spacing(6),
        color: theme.palette.secondary.dark,
        width: theme.spacing(13),
        height: theme.spacing(13),
        textTransform: 'uppercase',
      },
    },
    '.details_priority': {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(4),
      padding: theme.spacing(5, 0),
    },
    '.attachments_section': {
      marginTop: theme.spacing(4),
    },
    '.attachments_container': {
      display: 'flex',
      overflowX: 'auto',
      gap: theme.spacing(13),
      '.no_attachments': {
        display: 'flex',
        justifyContent: 'center',
      },
      '.attachments_image': {
        height: theme.spacing(51),
        borderRadius: theme.spacing(2.5),
        display: 'inline-block',
        width: theme.spacing(51),
        objectFit: 'cover',
      },
    },
    '.comment_buttons': {
      display: 'flex',
      gap: theme.spacing(6),
      padding: theme.spacing(9, 0, 10),
    },
    '.wordBreak': {
      wordBreak: 'break-word',
    },
  };
}

export function TicketSectionStyles(theme: Theme) {
  return {
    '.details_box': {
      padding: theme.spacing(4, 0),
    },
    '.details_header_text': {
      ...theme.typography.subtitle2,
      fontWeight: '400',
      paddingBottom: theme.spacing(4),
      color: theme.misc.new,
    },
    '.activity_created': {
      marginBottom: theme.spacing(10.5),
    },
    '.ticket_issue': {
      marginBottom: theme.spacing(12),
    },
  };
}

export function TicketNoActivityStyles(theme: Theme) {
  return {
    '.no_activity_container': {
      padding: theme.spacing(10, 0, 10),
      '.no_activity_text': {
        ...theme.typography.body1,
        color: theme.misc.darkGray,
      },
    },
  };
}

export function LeadDetailsStyles(theme: Theme) {
  return {
    '.company-details': {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(4),
      padding: theme.spacing(8, 2.5, 6),
      borderBottom: `1px solid ${theme.misc.backgroundSilver}`,
    },
    '.detailsWrap': {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(6),
      '.individualDetails': {
        display: 'flex',
        alignItems: 'center',
        minHeight: theme.spacing(23.5),
      },
      '.detailsFlexStart': {
        alignItems: 'flex-start',
        paddingTop: theme.spacing(6.5),
      },
      '.infoLabel': {
        color: theme.text.light,
        fontWeight: 400,
        minWidth: theme.spacing(76),
        maxWidth: theme.spacing(76),
      },
    },
  };
}

export function LeadDetailsContainerStyles(theme: Theme) {
  return {
    '.stageDropdown': {
      width: theme.spacing(120),
      marginRight: theme.spacing(7),
      '.dropDownLabel': {
        paddingBottom: theme.spacing(2),
      },
      '.stageValue': {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(5),
        height: theme.spacing(20),
        marginTop: theme.spacing(2),
        border: `1px solid ${theme.misc.borderColor}`,
        borderRadius: theme.spacing(2.5),
      },
    },
    '.titleWrap': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing(7),
    },
    '.btnBlock': {
      display: 'flex',
      alignItems: 'center',
    },
    '.iconBlock': {
      display: 'flex',
      cursor: 'pointer',
      marginLeft: theme.spacing(6.5),
    },
    '.addContactInput': {
      border: `1px solid ${theme.misc.inactive}`,
      padding: theme.spacing(6),
      borderRadius: theme.spacing(1.5),
      marginBottom: theme.spacing(7),
    },
    '.otherDetailsWrap': {
      padding: theme.spacing(2, 0, 6),
    },
  };
}

export const RightSalesInfo = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'end',
  margin: 'auto 0',
  '.rightInfoAdd': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '.rightInfoClose': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end',
  },
}));
export const EmptySalesInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(16.5, 75, 30.5),
}));

export const SalesInfoPopover = styled(Popover)(({ theme }) => ({
  '.MuiPopover-paper': {
    boxShadow: '0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31)',
  },
  '.menuItem': {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3, 6.5),
    cursor: 'pointer',
    '&:hover': {
      background: theme.misc.backgroundSilver,
    },
  },
}));

export function LeadAttachmentStyles(theme: Theme) {
  return {
    '.titleWrap': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing(10),
    },
    '.btnBlock': {
      display: 'flex',
      alignItems: 'center',
    },
    '.iconBlock': {
      display: 'flex',
      cursor: 'pointer',
      marginLeft: theme.spacing(6.5),
    },
    '.attachmentsContainer': {
      display: 'flex',
      flexWrap: 'wrap',
      rowGap: theme.spacing(10),
      '.attachmentsImage': {
        height: theme.spacing(51.5),
        borderRadius: theme.spacing(2.5),
        display: 'inline-block',
        width: theme.spacing(51.5),
        objectFit: 'cover',
        border: `1px solid ${theme.misc.borderColor}`,
      },
    },
    '.noAttachments': {
      fontWeight: 400,
      color: theme.misc.darkGray,
    },
  };
}

export function RolesPermissionStyles(theme: Theme) {
  return {
    '.spaceVendorListWrap': {
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing(10),
      '.company-name': {
        fontSize: theme.spacing(6),
        fontWeight: '400',
        paddingBottom: theme.spacing(3.5),
        color: theme.text.tableHeader,
        lineHeight: theme.spacing(8),
        width: 444,
      },
      '.permission-name': {
        fontSize: theme.spacing(6),
        fontWeight: '400',
        paddingBottom: theme.spacing(3.5),
        color: theme.text.tableHeader,
        lineHeight: theme.spacing(8),
      },
    },
    '.property-space': {
      justifyContent: 'center',
      fontSize: theme.spacing(7),
      color: theme.text.tableHeader,
      lineHeight: theme.spacing(8),
    },
  };
}

export function BasicWrapStyles(theme: Theme) {
  return {
    width: theme.spacing(300),
    '.basicDetais': {
      paddingBottom: theme.spacing(5),
    },
    '.nameInput': {
      paddingTop: theme.spacing(20),
    },
    '.bottomBox': {
      paddingTop: theme.spacing(25),
    },
    '.dropdown': {
      width: theme.spacing(132),
      paddingTop: theme.spacing(14),
    },
    '.desc': {
      width: theme.spacing(140),
      backgroundColor: theme.misc.infoBackground,
      marginTop: theme.spacing(7.5),
    },
    '.note': {
      padding: theme.spacing(8),
    },
    '.list': {
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing(12.5),
    },
  };
}

export function InvoiceDetailsStyles(theme: Theme) {
  return {
    '.address-align': {
      margin: theme.spacing(-5, 0, 0, 20),
      '.company-info': {
        marginTop: theme.spacing(15),
        width: theme.spacing(350),
      },
      '.content-alignment': {
        display: 'flex',
      },
      '.invoice': {
        fontSize: '18px',
        fontWeight: 600,
        lineHeight: '125%',
        color: '#222222',
        marginLeft: theme.spacing(5),
      },
      'info-text': {
        lineHeight: '125%',
      },
      '.invoice-details': {
        textAlign: 'right',
        marginTop: theme.spacing(10),
        marginLeft: 'auto',
        paddingRight: theme.spacing(20),
      },
    },
    '.invoice-header': {
      display: 'flex',
      justifyContent: 'right',
      position: 'relative',
      bottom: 65,
      marginRight: theme.spacing(15),
    },
    '.wrap': {
      width: theme.spacing(250),
    },
    '.customer-irn-wrapper': {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: theme.spacing(10),
      marginLeft: 'auto',
      '.irn-details': {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(8),
        maxWidth: '238px',
        marginRight: theme.spacing(20),
      },
      '.irn-code': {
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
        whiteSpace: 'normal',
        maxWidth: '100%',
      },
    },
    '.customer-company-info': {
      margin: theme.spacing(10, 0, 0, 20),
    },

    '.divider': {
      backgroundColor: theme.palette.secondary.dark,
      height: '1px',
      margin: theme.spacing(18, 15, 5, 15),
    },
    '.header-align': {
      display: 'flex',
      justifyContent: 'space-between',
      '.property-name': {
        padding: theme.spacing(30),
      },
      '.property-addons': {
        padding: theme.spacing(30),
      },
    },
    '.table-text': {
      fontWeight: 400,
      lineHeight: '145%',
      color: theme.text.secondary,
    },
    '.note': {
      display: 'flex',
      margin: theme.spacing(35, 0, 0, 15),
      '.note-header': {
        color: theme.text.secondary,
        textTransform: 'uppercase',
      },
      '.note-content': {
        color: theme.text.primary,
      },
      '.wrapper': {
        width: theme.spacing(200),
      },
    },
    '.account_details': {
      alignItems: 'right',
      marginTop: theme.spacing(10),
      marginLeft: 'auto',
      paddingRight: theme.spacing(12),
      '.account': {
        marginBottom: theme.spacing(5),
      },
    },
    '.team-info': {
      display: 'flex',
      margin: theme.spacing(25, 0, 20, 15),
      '.team': {
        color: theme.text.secondary,
        paddingRight: theme.spacing(25),
        marginLeft: 'auto',
      },
    },
    '.text-invoice-space': {
      marginLeft: theme.spacing(4),
    },
    '.text-space': {
      marginLeft: theme.spacing(8),
    },
  };
}

export function UserDetailsDrawerStyles(theme: Theme) {
  return {
    '.MuiPaper-root': {
      width: theme.spacing(221),
      top: theme.spacing(35),
    },
    '.header': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: theme.spacing(32.5),
      background: theme.palette.secondary.light,
      padding: theme.spacing(11, 14),
      borderBottom: `1px solid ${theme.misc.greyBorder}`,
    },
    '.close-icon': { cursor: 'pointer' },
    '.user-info-wrapper': {
      padding: theme.spacing(12),
      overflowY: 'auto',
      height: 'calc(100vh - 65px - 70px)',
    },
    '.user-info': {
      display: 'flex',
      justifyContent: 'space-between',
    },
    '.user-img-block': {
      display: 'flex',
    },
    '.user-designation': {
      color: theme.text.light,
      marginTop: theme.spacing(6.5),
      fontWeight: 400,
    },
    '.three-dot-icon': {
      display: 'inline-block',
      height: 'fit-content',
      marginLeft: theme.spacing(13.5),
      cursor: 'pointer',
    },
    '.avatar': {
      height: theme.spacing(30),
      width: theme.spacing(30),
      marginRight: theme.spacing(9.5),
    },
    '.divider': {
      margin: theme.spacing(10, 0),
    },
    '.detail-title': {
      color: theme.text.light,
      marginBottom: theme.spacing(7),
      fontWeight: 400,
    },
    '.detail-value': {
      color: theme.text.neutralLight,
      marginBottom: theme.spacing(21),
    },
    '.property-name': {
      color: theme.text.neutralLight,
      marginBottom: theme.spacing(5),
      marginTop: theme.spacing(8),
    },
    '.role': {
      color: theme.text.light,
      fontWeight: 400,
      marginRight: theme.spacing(2),
    },
    '.user-email': {
      color: theme.text.neutralLight,
      cursor: 'pointer',
    },
  };
}

export function TransactionHistoryTableStyles(theme: Theme) {
  return {
    '.table_body': {
      paddingTop: theme.spacing(12),
      borderBottom: `1px solid ${theme.misc.lightgrey}`,
    },
    '.table_header_row': {
      borderBottom: `1px solid ${theme.misc.lightgrey}`,
      '.table_header': {
        textAlign: 'left',
        paddingBottom: theme.spacing(4),
      },
    },
    '.table_wrapper': {},
    '.table_row_header': {
      paddingTop: theme.spacing(15),
    },
  };
}

export const FloorPlanContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  // height: "calc(100vh - 110px)",
  overFlowY: 'auto',
  '.headingWrapper': {
    padding: theme.spacing(14, 16),
    borderBottom: '1px solid',
    borderColor: theme.misc.inactive,
  },
  '.floorTabHeading': {
    minHeight: theme.spacing(44),
    padding: theme.spacing(12),
    borderBottom: '1px solid',
    borderColor: theme.misc.greyBorder,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '.floor-search-box': {
      minWidth: theme.spacing(170),
      width: 'auto',
    },
    '.floorTabs': {
      '.tabListWrap': {
        minHeight: 'auto',
        '.MuiButtonBase-root': {
          color: theme.palette.primary.main,
          fontSize: theme.spacing(7),
          lineHeight: theme.spacing(8),
          padding: theme.spacing(4, 10),
          border: '1px solid',
          borderColor: theme.misc.borderColor,
          borderRadius: theme.spacing(15),
          marginRight: theme.spacing(5),
          minHeight: 'auto',
          textTransform: 'capitalize',
        },
        '.Mui-selected': {
          color: theme.palette.primary.contrastText,
          backgroundColor: theme.palette.primary.main,
          fontWeight: 600,
        },
        '.MuiTabs-indicator': {
          display: 'none',
        },
      },
    },
    '.bulkWrap': {
      display: 'flex',
      alignItems: 'center',
      button: {
        marginRight: theme.spacing(3),
      },
    },
  },
  '.floorTab': {
    '.MuiTabPanel-root': {
      padding: 0,
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

export const CompanySetupPaymentDetailsLayout = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(54),
  marginBottom: theme.spacing(38),

  '.formHeader': {
    padding: theme.spacing(14, 16),
  },
  '.divider': {
    backgroundColor: theme.palette.primary.light,
    height: '1px',
  },
  '.formWrap': {
    width: 584,
    padding: theme.spacing(20, 16),
    '.inputWrap': {
      marginBottom: theme.spacing(15),
      '.inputWrap': {
        '.subtitle': {
          color: theme.text.light,
        },
      },
    },
  },
}));

export const CustomerModalFooter = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: 75,
  padding: 2,
  paddingTop: theme.spacing(6.5),
  paddingBottom: theme.spacing(7),
  paddingLeft: theme.spacing(16),
  paddingRight: theme.spacing(16),
  boxShadow: 'none',
  borderTop: `1px solid ${theme.misc.borderColor}`,
  zIndex: 1,
}));

export const LeadDetailsBoxContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  '.titleWrap': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(10),
  },
  '.iconBlock': {
    display: 'flex',
    cursor: 'pointer',
  },
  '.avatarIcon': {
    fontSize: theme.spacing(6),
    color: theme.palette.secondary.dark,
    width: theme.spacing(13),
    height: theme.spacing(13),
    textTransform: 'uppercase',
  },
  '.commonTypographyStyles': {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(5),
  },
}));

export const RoundIconButton = styled(IconButton)(({ theme }) => ({
  border: `1px solid ${theme.misc.borderColor}`,
  borderRadius: theme.spacing(24),
  backgroundColor: theme.palette.secondary.light,
  color: theme.palette.primary.main,
  height: theme.spacing(16),
  width: theme.spacing(16),
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}));

export function UploadFloorPlanContainerStyles(theme: Theme) {
  return {
    '.filesText': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.palette.primary.contrastText,
      padding: theme.spacing(4, 5),
      width: 'max-content',
      margin: '0 auto',
      p: {
        color: theme.palette.secondary.dark,
      },
      '.blueText': {
        color: theme.text.lightBlue,
        marginLeft: theme.spacing(3.5),
      },
    },
    '.textFormat': {
      marginTop: theme.spacing(9),
      p: {
        color: theme.palette.secondary.dark,
      },
    },
  };
}

export function UploadFloorPlanEditStyles(theme: Theme) {
  return {
    '.MuiList-root': {
      padding: theme.spacing(5),
      '.MuiMenuItem-root': {
        padding: theme.spacing(5, 5, 5, 8),
      },
    },
    '.menuIconWrap': {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    '.menuItem': {
      display: 'flex',
      alignItems: 'center',
      p: {
        marginLeft: theme.spacing(4),
        color: theme.misc.dropDownText,
      },
    },
    '.profileAvatar': {
      overflow: 'auto',
      borderRadius: '5px',
      marginBottom: theme.spacing(4),
    },
    '.avatarOptions': {
      width: theme.spacing(43.5),
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
    '.zoom_icons': {
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(8),
      right: theme.spacing(30),
      bottom: theme.spacing(70),
      '.Mui-disabled': {
        backgroundColor: theme.palette.secondary.light,
      },
    },
  };
}

export const CalendarLabelStyles = styled(InputLabel)(({ theme }) => ({
  ...theme.typography.subtitle2,
  fontWeight: 400,
  color: theme.palette.secondary.dark,
  position: 'unset',
  transform: 'none',
  marginBottom: theme.spacing(2),
  '&.Mui-error': {
    color: `${theme.palette.secondary.dark} !important`,
  },
  '&.Mui-disabled': {
    opacity: 0.4,
  },
}));

export const CustomDatePicker = styled(DatePicker)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(5),
    fontSize: 'inherit',
  },
}));
