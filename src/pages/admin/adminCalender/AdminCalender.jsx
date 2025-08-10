import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import Modal from "./Modal";
import ExpandEventModal from "./ExpandEventModal";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const localizer = momentLocalizer(moment);

const AdminCalender = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [dayEventsModalOpen, setDayEventsModalOpen] = useState(false);
  const [eventsForSelectedDay, setEventsForSelectedDay] = useState([]);
  const [events, setEvents] = useState([]); // Default to empty array instead of [{}]
  const [currentDate, setCurrentDate] = useState(new Date());
  // Handle calendar navigation
  const handleNavigate = (date) => {
    setCurrentDate(date);
  };

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

  // Add from ExpandEventModal
  const handleAddFromExpandModal = (newEvents) => {
    setEvents((prev) => [...prev, ...newEvents]);
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

  const CustomEvent = ({ event }) => {
    const date = event.start;
    const sameDayEvents = events.filter((e) =>
      moment(e.start).isSame(moment(date), "day")
    );

    if (sameDayEvents.length > 1 && sameDayEvents[0].id !== event.id) {
      return null;
    }

    return (
      <div
        onClick={() => {
          setSelectedDate(moment(event.start).startOf("day"));
          setEventsForSelectedDay(sameDayEvents);
          setDayEventsModalOpen(true);
        }}
        style={{
          backgroundColor: event.color || "transparent",
          color: "black",
          borderRadius: "2px",
          border: "none",
          padding: "4px",
          cursor: "pointer",
        }}
      >
        <h3 className="text-2xl font-bold -mt-1">{event.title}</h3>
        <p className="text-lg font-medium">{event.time}</p>
        {sameDayEvents.length > 1 && (
          <div className=" text-white font-medium bg-blue-500 rounded-lg p-1 text-xs mt-0.5 ">
            +{sameDayEvents.length - 1} more
          </div>
        )}
      </div>
    );
  };

  // Custom Toolbar for month navigation (arrows only)
  const CustomToolbar = (toolbar) => {
    const [prevHover, setPrevHover] = useState(false);
    const [nextHover, setNextHover] = useState(false);
    const buttonStyle = {
      backgroundColor: "#6E67D5",
      color: "#fff",
      borderRadius: "0.375rem",
      padding: "0.5rem",
      border: "none",
      transition: "background 0.2s",
      cursor: "pointer",
    };
    const buttonHoverStyle = {
      backgroundColor: "#5a54b6",
    };
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16,
        }}
      >
        <button
          onClick={() => toolbar.onNavigate("PREV")}
          style={
            prevHover
              ? { ...buttonStyle, ...buttonHoverStyle, marginRight: 16 }
              : { ...buttonStyle, marginRight: 16 }
          }
          aria-label="Previous Month"
          onMouseEnter={() => setPrevHover(true)}
          onMouseLeave={() => setPrevHover(false)}
        >
          <LeftOutlined />
        </button>
        <span className="rbc-toolbar-label text-lg font-bold">
          {toolbar.label}
        </span>
        <button
          onClick={() => toolbar.onNavigate("NEXT")}
          style={
            nextHover
              ? { ...buttonStyle, ...buttonHoverStyle, marginLeft: 16 }
              : { ...buttonStyle, marginLeft: 16 }
          }
          aria-label="Next Month"
          onMouseEnter={() => setNextHover(true)}
          onMouseLeave={() => setNextHover(false)}
        >
          <RightOutlined />
        </button>
      </div>
    );
  };

  return (
    <div>
      <div className="admin-page">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5 gap-4">
          <div>
            <p className="text-xl sm:text-2xl font-semibold">
              Calendar management
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="min-w-[750px] h-[780px] mx-auto [&_.rbc-toolbar-label]:font-semibold [&_.rbc-toolbar-label]:text-lg">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: "100%", width: "100%" }}
              selectable
              onSelectSlot={handleSlotSelect}
              views={["month"]}
              components={{ event: CustomEvent, toolbar: CustomToolbar }}
              eventPropGetter={(event) => ({
                style: {
                  backgroundColor: event.color || "transparent",
                  color: "black",
                  borderRadius: "5px",
                  border: "none",
                  padding: "4px",
                },
              })}
              date={currentDate}
              onNavigate={handleNavigate}
            />
            {/* Highlight today cell in month view */}
            <style>{`
              /* Enhanced style for the current date number with a prominent box shadow and glow */
              :global(.rbc-month-view .rbc-date-cell.rbc-now a) {
                background: #1565c0 !important;
                color: #fff !important;
                border-radius: 50% !important;
                width: 48px !important;
                height: 48px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-size: 1.5rem !important;
                font-weight: 500 !important;
                margin: 0 auto !important;
                box-shadow: 0 0 0 4px rgba(21,101,192,0.15), 0 8px 24px 0 rgba(21,101,192,0.25), 0 2px 8px rgba(21,101,192,0.18) !important;
                text-decoration: none !important;
                transition: box-shadow 0.2s, transform 0.2s !important;
              }
              :global(.rbc-month-view .rbc-date-cell.rbc-now a:hover) {
                box-shadow: 0 0 0 6px rgba(21,101,192,0.22), 0 12px 32px 0 rgba(21,101,192,0.32), 0 4px 16px rgba(21,101,192,0.28) !important;
                transform: scale(1.08) !important;
              }
            `}</style>
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
            onAddEvents={handleAddFromExpandModal}
          />
        )}
      </div>
    </div>
  );
};

export default AdminCalender;
