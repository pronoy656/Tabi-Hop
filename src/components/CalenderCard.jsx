import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


const CalendarCard = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="bg-white border border-r-4 border-b-4 p-3 sm:p-6 min-w-[260px] sm:w-full  rounded-lg shadow-md  col-span-2 "
       style={{
      
        borderTopColor:" #3DA755",
        borderLeftColor: "#3DA755",
        borderBottomColor: "#3DA755",
        borderRightColor: "#3DA755",
        borderStyle: "solid",
      }}>
  <div className="  flex justify-center pt-8">    <Calendar
        onChange={setValue}
        value={value}
        tileClassName={({ date, view }) => {
         
          if (
            date.toDateString() === new Date().toDateString()
          ) {
            return "text-purple-800 font-bold rounded bg-red-400";
          }
        }}
        next2Label={null}
        prev2Label={null}
      /></div>
    </div>
  );
};

export default CalendarCard;
