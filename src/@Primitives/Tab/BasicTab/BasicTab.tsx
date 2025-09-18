import * as React from 'react';
import { Box, styled } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export interface TabI {
  value: string;
  label1: string;
  label2: string;
  tabdata1: React.ReactNode;
  tabdata2: React.ReactNode;
  onChangeTabNumber: (event: React.SyntheticEvent, newValue: string) => void;
}
const BoxContainer = styled(Box)(({ theme }) => ({
  '.MuiTab-root': {
    ...theme.typography.body1,
    textTransform: 'capitalize',
    color: theme.palette.secondary.dark,
    '&.Mui-selected': {
      color: theme.text.dark,
      fontWeight: '500',
    },
  },
}));
export default function BasicTab({
  value,
  label1,
  label2,
  tabdata1,
  tabdata2,
  onChangeTabNumber,
}: TabI) {
  return (
    <BoxContainer sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className='tab_wrapper'>
          <TabList onChange={onChangeTabNumber} aria-label='lab API tabs example'>
            <Tab label={label1} value='1' />
            {!label2 && <Tab label={label2} value='2' />}
          </TabList>
        </Box>
        <TabPanel value='1'>{tabdata1}</TabPanel>
        {!tabdata2 && <TabPanel value='2'>{tabdata2}</TabPanel>}
      </TabContext>
    </BoxContainer>
  );
}
