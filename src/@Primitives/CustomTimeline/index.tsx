import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

interface CustomTimelineI {
  timelineData: any;
}

export default function CustomTimeline({ timelineData }: CustomTimelineI) {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0,
        },
      }}
    >
      {timelineData.map((timeline: any, index: number) => (
        <TimelineItem key={`${timeline.name}-${timeline.time}`}>
          <TimelineOppositeContent color='textSecondary'>{timeline?.time}</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            {index !== timelineData.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            {timeline.amount && timeline.amount} {timeline?.name}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
