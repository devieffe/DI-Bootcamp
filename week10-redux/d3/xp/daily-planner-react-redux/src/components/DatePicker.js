import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/TasksSlice';

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
    </div>
  );
}

export default DatePicker;