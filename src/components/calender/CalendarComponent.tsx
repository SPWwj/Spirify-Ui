import React, { useState } from 'react';
import { Alert, Calendar } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import DayView from './DayView'; // Replace with actual import

const CalendarComponent: React.FC = () => {
  const [value, setValue] = useState(() => dayjs('2017-01-25'));
  const [selectedValue, setSelectedValue] = useState(() => dayjs('2017-01-25'));
  const [clickTimeout, setClickTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isDayView, setIsDayView] = useState(false);
  const backToCalendarView = () => {
    setIsDayView(false);
  };
  const singleClickAction = (newValue: Dayjs) => {
    setSelectedValue(newValue);
    setValue(newValue);
  };

  const doubleClickAction = (newValue: Dayjs) => {
    setIsDayView(true);
    setValue(newValue);
    console.log("Double click action");
  };

  const onSelect = (newValue: Dayjs) => {
    if (clickTimeout === null) {
      singleClickAction(newValue);
      setClickTimeout(setTimeout(() => {
        setClickTimeout(null);
      }, 250)); // Adjust timeout as needed
    } else {
      clearTimeout(clickTimeout);
      setClickTimeout(null);
      doubleClickAction(newValue);
    }
  };

  return (
    <>
      <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
      {isDayView ? (
        <DayView date={value} onBack={backToCalendarView} /> // Pass callback to DayView
      ) : (
        <Calendar value={value} onSelect={onSelect} />
      )}
    </>
  );
};

export default CalendarComponent;
