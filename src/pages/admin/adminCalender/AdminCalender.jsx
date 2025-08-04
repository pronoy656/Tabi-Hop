import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "./Modal";
import ExpandEventModal from "./ExpandEventModal";

const localizer = momentLocalizer(moment);

const AdminCalender = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [dayEventsModalOpen, setDayEventsModalOpen] = useState(false);
  const [eventsForSelectedDay, setEventsForSelectedDay] = useState([]);
  const [events, setEvents] = useState([]); // Default to empty array instead of [{}]

  // Handle adding new events
  const handleAddEvent = (newEventOrEvents) => {
    setEvents((prev) => [
      ...prev,
      ...(Array.isArray(newEventOrEvents)
        ? newEventOrEvents
        : [newEventOrEvents]),
    ]);
    setModalOpen(false);
  };

  // Handle slot selection (clicking on a day)
  const handleSlotSelect = (slotInfo) => {
    const selected = moment(slotInfo.start).startOf("day");
    setSelectedDate(selected); // Store selected date

    // Filter events for the selected date
    const matchedEvents = events.filter((event) =>
      moment(event.start).startOf("day").isSame(selected, "day")
    );

    // If events are found, open the "ExpandEventModal"
    if (matchedEvents.length > 0) {
      setEventsForSelectedDay(matchedEvents);
      setDayEventsModalOpen(true);
    } else {
      // Open the "Add Event" modal if no events exist for the day
      setModalOpen(true);
    }
  };

  // Custom event display component
  const CustomEvent = ({ event }) => {
    const date = event.start;
    const sameDayEvents = events.filter((e) =>
      moment(e.start).isSame(moment(date), "day")
    );

    if (sameDayEvents.length > 1 && sameDayEvents[0].id !== event.id) {
      return null; // Only show +n more for the first event
    }

    return (
      <div onClick={() => setDayEventsModalOpen(true)}>
        <h3 className="text-2xl font-bold -mt-1">{event.title}</h3>

        <p className="text-lg font-medium">{event.time}</p>
        {sameDayEvents.length > 1 && (
          <div className=" text-blue-500 font-medium">
            +{sameDayEvents.length - 1} more
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="admin-page">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5 gap-4">
          <div>
            <p className="text-xl sm:text-2xl font-semibold">
              Calender management
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          {/* <button className="bg-[#131927] text-white px-6 py-2.5 rounded-md text-sm w-full sm:w-auto">
            + Add New User
          </button> */}
        </div>

        <div className="w-full overflow-x-auto">
          <div className="min-w-[700px] h-[700px] mx-auto [&_.rbc-toolbar-label]:font-semibold [&_.rbc-toolbar-label]:text-lg">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: "100%", width: "100%" }}
              selectable
              onSelectSlot={handleSlotSelect}
              views={["month"]}
              components={{ event: CustomEvent }}
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
                    style: { backgroundColor: bg },
                  };
                }
                return {}; // Default cell style
              }}
              eventPropGetter={() => ({
                style: {
                  backgroundColor: "transparent", // Remove default blue background
                  color: "black", // Set text color
                  border: "none",
                  padding: 0,
                },
              })}
            />
          </div>
        </div>

        {modalOpen && (
          <Modal
            date={selectedDate ? selectedDate.toDate() : null} // Ensure the date passed is a JavaScript Date object
            onClose={() => setModalOpen(false)}
            onSave={handleAddEvent}
          />
        )}

        {dayEventsModalOpen && (
          <ExpandEventModal
            date={selectedDate ? selectedDate.toDate() : null} // Ensure the date passed is a JavaScript Date object
            eventsForSelectedDay={eventsForSelectedDay}
            events={events}
            onClose={() => setDayEventsModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default AdminCalender;
