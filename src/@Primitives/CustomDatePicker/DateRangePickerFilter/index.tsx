import { CalendarDotsIcon } from '@Icons';
import dayjs from 'dayjs';
import { CustomDatePicker } from '@Primitives';
import { Box } from '@mui/material';
import { theme } from '@Utils/theme';

interface PropsI {
  selectedDates: {
    startDate: string;
    endDate: string;
  };
  handleFilterControlRangeDates: (endDate: string, startDate: string) => void;
  handleDeleSelectDate: () => void;
}

export function DateRangePickerFilter({
  selectedDates,
  handleFilterControlRangeDates,
  handleDeleSelectDate,
}: PropsI) {
  return (
    <Box width={220} marginLeft={20}>
      <CustomDatePicker
        value={[
          dayjs(selectedDates.startDate, 'YYYY-MM-DD').toDate(),
          dayjs(selectedDates.endDate, 'YYYY-MM-DD').toDate(),
        ]}
        onChange={(dates) => {
          const lastDate = dayjs(dates[0]).format('YYYY-MM-DD');
          const startDate = dayjs(dates[dates.length - 1]).format('YYYY-MM-DD');
          if (lastDate !== startDate) {
            handleFilterControlRangeDates(startDate, lastDate);
          }
        }}
        range
        handleDeleSelectDate={handleDeleSelectDate}
        icon={
          <Box
            className='calendarDotsIcon'
            sx={{
              width: theme.spacing(9),
              height: theme.spacing(9),
              paddingLeft: theme.spacing(2.5),
            }}
          >
            <CalendarDotsIcon />
          </Box>
        }
        calendarPosition='bottom-right'
      />
    </Box>
  );
}
