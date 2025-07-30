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
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Itinerary Management</h2>
        <p className="font-semibold mb-2.5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </p>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSlotSelect}
          style={{ height: 700 }}
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
