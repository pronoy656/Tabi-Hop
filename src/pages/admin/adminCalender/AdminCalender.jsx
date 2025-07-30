import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";

import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "./Modal";

const localizer = momentLocalizer(moment);

const AdminCalender = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Robert Fox - Task",
      start: new Date(2025, 3, 1),
      end: new Date(2025, 3, 1),
      priority: "low",
    },
  ]);

  // button for add event
  const handleAddEvent = (newEventOrEvents) => {
    setEvents((prev) => [
      ...prev,

      ...(Array.isArray(newEventOrEvents)
        ? newEventOrEvents
        : [newEventOrEvents]),
    ]);
    setModalOpen(false);
  };

  const handleSlotSelect = (slotInfo) => {
    setSelectedDate(slotInfo.start);
    setModalOpen(true);
  };

  console.log("hit");
  console.log("events", events);

  // Custom event component to display title, time, and note
  const CustomEvent = ({ event }) => {
    return (
      <div className="">
        <h3 className="text-2xl font-bold">{event.title}</h3>
        <h5 className="text-lg font-medium">{event.time}</h5>
        <p>{event.note}</p>
      </div>
    );
  };

  return (
    <div>
      <div className="admin-page">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5 gap-4">
          <div>
            <p className="text-xl sm:text-2xl font-semibold">User management</p>
            <p className="text-sm sm:text-base text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
          </div>

          <button className="bg-[#131927] text-white px-6 py-2.5 rounded-md text-sm w-full sm:w-auto">
            + Add New User
          </button>
        </div>
        <div className="w-full md:w-full h-[700px] mx-auto">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "100%", width: "100%" }}
            selectable
            onSelectSlot={handleSlotSelect}
            // style={{ height: 700 }}
            views={["month"]}
            components={{
              event: CustomEvent,
            }}
            dayPropGetter={(date) => {
              const eventOfDay = events.find((event) =>
                moment(event.start).isSame(moment(date), "day")
              );

              if (eventOfDay) {
                let bg = "";
                switch (eventOfDay.priority) {
                  case "high":
                    bg = "#fee2e2"; // light red
                    break;
                  case "medium":
                    bg = "#fef3c7"; // light yellow
                    break;
                  case "low":
                    bg = "#d1fae5"; // light green
                    break;
                  default:
                    bg = "#ffffff";
                }

                return {
                  className: "custom-bg",
                  style: {
                    backgroundColor: bg,
                  },
                };
              }

              return {}; // default cell style
            }}
            eventPropGetter={() => {
              return {
                style: {
                  backgroundColor: "transparent", // remove blue
                  color: "black", // set text color if needed
                  border: "none",
                  padding: 0,
                },
              };
            }}
          />
        </div>
        {modalOpen && (
          <Modal
            date={selectedDate}
            onClose={() => setModalOpen(false)}
            onSave={handleAddEvent}
          />
        )}
      </div>
    </div>
  );
};

export default AdminCalender;
