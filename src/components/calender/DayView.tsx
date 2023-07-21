import React from 'react';
import { Button, List, Card, Typography } from 'antd';
import type { Dayjs } from 'dayjs';
import Spoiler from 'components/text/Spoiler';

type Event = {
  time: string;
  description: string;
};

// Let's assume that these are the events for the selected day.
const events: Event[] = [
  { time: '08:00', description: 'Breakfast' },
  { time: '10:00', description: 'Meeting with team' },
  { time: '12:00', description: 'Lunch' },
  // Add as many events as needed...
];

interface DayViewProps {
  date: Dayjs;
  onBack: () => void;  // New callback prop for handling back button click
}

const DayView: React.FC<DayViewProps> = ({ date, onBack }) => {
  return (
    <Card 
      title={date.format('YYYY-MM-DD')} 
      style={{ marginTop: '24px' }}
      extra={<Button onClick={onBack}>Back</Button>} // Added Back button
    >
      <h1>The weather is very hot. <Spoiler text={ `天气很热`}></Spoiler></h1>
      <List
        itemLayout="horizontal"
        dataSource={events}
        renderItem={item => (
          <List.Item>
            <Typography.Text>{item.time}</Typography.Text>
            <Typography.Paragraph style={{ margin: 0 }}>{item.description}</Typography.Paragraph>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default DayView;
