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
    {
      id: 2,
      title: "Kristin Watson - Task",
      start: new Date(2025, 3, 14),
      end: new Date(2025, 3, 14),
      priority: "high",
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
          eventPropGetter={(event) => {
            let backgroundColor = "";

            switch (event.priority) {
              case "high":
                backgroundColor = "#EF4444"; // red
                break;
              case "medium":
                backgroundColor = "#F59E0B"; // yellow
                break;
              case "low":
                backgroundColor = "#10B981"; // green
                break;
              default:
                backgroundColor = "#3B82F6"; // blue fallback
            }
            return {
              style: {
                backgroundColor,
                color: "black",
                // borderRadius: "5px",
                padding: "2px 5px",
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
