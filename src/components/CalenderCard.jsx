import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


const CalendarCard = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="bg-white p-6  rounded-lg shadow-md  col-span-2 px-14">
      <Calendar
        onChange={setValue}
        value={value}
        tileClassName={({ date, view }) => {
         
          if (
            date.toDateString() === new Date().toDateString()
          ) {
            return "bg-purple-100 text-purple-800 font-bold rounded ";
          }
        }}
        next2Label={null}
        prev2Label={null}
      />
    </div>
  );
};

export default CalendarCard;
