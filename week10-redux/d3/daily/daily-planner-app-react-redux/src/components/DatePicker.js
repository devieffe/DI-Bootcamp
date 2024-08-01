import React from 'react';

function DatePicker({ selectedDate, setSelectedDate }) {
  return (
    <input
      type="date"
      value={selectedDate}
      onChange={(e) => setSelectedDate(e.target.value)}
    />
  );
}

export default DatePicker;