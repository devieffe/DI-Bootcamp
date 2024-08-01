import React, { useState } from "react";

const DatePicker = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState("2024-08-01");

  const handleChange = (e) => {
    setSelectedDate(e.target.value);
    onDateChange(e.target.value);
  };

  return (
    <div>
      <h2>Select a Day</h2>
      <input type="date" value={selectedDate} onChange={handleChange} />
    </div>
  );
};

export default DatePicker;