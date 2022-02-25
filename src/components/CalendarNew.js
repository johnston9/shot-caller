import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSetDateContext } from '../contexts/DateContext';

const CalendarNew = (props) => {
  const [today, setToday] = useState(new Date());
    const [newdate, setNewdate] = useState("");
    const history = useHistory();
    // const setDate = useSetDateContext();
    const {days} = props;

const handleDate = (date) => {
  const formatdate = date.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  })
  setNewdate(formatdate);
  console.log(`start ${formatdate}`);
  console.log(`date ${today}`);
  // history.push(`/calendar/days`);
}

// useEffect(() => {
//   const handleMount = (days, newdate) => {
//     // days.results.map((day) => (
//     //   day.date == newdate ? (
//     //     console.log(day.id)
//     //   ) : (
//     //     ""
//     //   )
//     // ))
//     console.log(days.results[0] )
//   };

//   handleMount();
// }, [newdate]);

  return (
    <div>
        <Calendar 
          onChange={(date) => handleDate(date) } 
          value={today} />
    </div>
  )
}

export default CalendarNew