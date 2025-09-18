import { Box, Button, styled, IconButton } from '@mui/material';
import { ChevronLeftIconBlack, PlusIconLight, PlusIcon, CloseIcon } from '@Icons';
import BreadCrumbs from '@Components/BreadCrumbs';
import { useNavigate } from 'react-router-dom';
import { HeaderText } from './HeaderText';

interface HeaderI {
  totalCustomersCount?: string | number;
  handleAddInfo?: () => void;
  handleSecondaryInfo?: () => void;
  headerText?: string;
  addInfoText?: string | null;
  secondaryInfoText?: string;
  isBorder?: boolean;
  breadCrumb?: any;
  isBack?: boolean;
  isStartIcon?: boolean;
  addInfoVariant?: 'text' | 'contained' | 'outlined';
  addSecondaryVarient?: 'text' | 'contained' | 'outlined';
  customBack?: () => void;
  isClose?: boolean;
  isBtnDisabled?: boolean;
}

const BoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(10, 16),
  // borderBottom: `1px solid ${theme.misc.borderColor}`,
  '.headerLeft': {
    display: 'flex',
    alignItems: 'flex-end',
    '.backIcon': {
      marginRight: theme.spacing(6),
      marginBottom: theme.spacing(-3.5),
      cursor: 'pointer',
      zIndex: 1000,
    },
    '.breadCrumbWrap': {
      marginBottom: theme.spacing(3),
    },
  },
  '.secondaryBtn': {
    marginRight: theme.spacing(12),
  },
}));

/**
 * A component that renders a header for a section of the page.
 * @param {number} totalCustomersCount - The total number of customers in the section.
 * @param {Function} handleAddInfo - A function that handles the addition of info.
 * @param {string} headerText - The text to display in the header.
 * @param {string} addInfoText - The text to display in the add info button.
 * @param {boolean} [isBorder=true] - Whether or not to display a border.
 * @param {BreadCrumb} [breadCrumb] - The breadcrumb to display.
 */
export function SectionHeader({
  totalCustomersCount,
  handleAddInfo,
  headerText,
  addInfoText,
  isBorder = true,
  breadCrumb,
  secondaryInfoText,
  isBack,
  handleSecondaryInfo,
  isStartIcon = true,
  addInfoVariant = 'contained',
  addSecondaryVarient = 'outlined',
  customBack,
  isClose,
  isBtnDisabled = false,
}: HeaderI) {
  const navigate = useNavigate();

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (customBack) {
      customBack();
    } else {
      navigate(-1);
    }
  };
  return (
    <BoxContainer
      sx={(theme) => ({ borderBottom: isBorder ? `1px solid ${theme.misc.borderColor}` : '' })}
    >
      <Box className='headerLeft'>
        {isBack && (
          <IconButton className='backIcon' onClick={handleBackClick}>
            <ChevronLeftIconBlack />
          </IconButton>
        )}
        {isClose && (
          <IconButton className='backIcon' onClick={handleBackClick}>
            <CloseIcon />
          </IconButton>
        )}

        <Box>
          <Box className='breadCrumbWrap'>{breadCrumb && <BreadCrumbs item={breadCrumb} />}</Box>
          <HeaderText totalCustomers={totalCustomersCount} headerText={headerText} />
        </Box>
      </Box>

      <Box display='flex' justifyContent='flex-end' alignItems='center'>
        {secondaryInfoText && (
          <Button
            className='secondaryBtn'
            size='medium'
            variant={addSecondaryVarient}
            onClick={handleSecondaryInfo}
          >
            {secondaryInfoText}
          </Button>
        )}
        {addInfoText && (
          <Button
            size='medium'
            variant={addInfoVariant}
            startIcon={
              isStartIcon && addInfoVariant === 'outlined' ? (
                <PlusIcon />
              ) : (
                isStartIcon && <PlusIconLight />
              )
            }
            disabled={isBtnDisabled}
            onClick={handleAddInfo}
          >
            {addInfoText}
          </Button>
        )}
      </Box>
    </BoxContainer>
  );
}
