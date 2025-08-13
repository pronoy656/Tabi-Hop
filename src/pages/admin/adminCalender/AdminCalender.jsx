  // Highlight current date
  const dayPropGetter = (date) => {
    const isToday = moment(date).isSame(moment(), 'day');
    if (isToday) {
      return {
        style: {
          backgroundColor: '#f0f9ff', // lighter blue
          border: '2px solid #2563eb', // blue border
        },
      };
    }
    return {};
  };

import React, { useState, useCallback } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import EventPopup from "../adminCalender/ExpandEventModal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../components/ui/dialog";
import { Plus, X } from "lucide-react";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/button";

// import { Plus, X } from "lucide-react";


const localizer = momentLocalizer(moment);

const colorOptions = [
  "#DE543A",
  "#E26D4A",
  "#FBCA61",
  "#DB8D8B",
  "#90549D",
  "#5C9075",
  "#6B6E9A",
  "#ec4899",
];


const MAX_EVENTS_DISPLAY = 5;

const CalenderAdmin = () => {

  const [events, setEvents] = useState([]);
  const [showEventPopup, setShowEventPopup] = useState(false);
  const [popupEvents, setPopupEvents] = useState([]);
  const [popupDate, setPopupDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventForms, setEventForms] = useState([
    { title: "", time: "", note: "", color: colorOptions[0] },
  ]);

    const handleSelectSlot = useCallback(({ start }) => {
    setSelectedDate(start);
    setSelectedEvent(null);
    setEventForms([{ title: "", time: "", note: "", color: colorOptions[0] }]);
    setIsModalOpen(true);
  }, []);

  
  const handleSelectEvent = useCallback((event) => {
    setSelectedEvent(event);
    setSelectedDate(event.start);
    setEventForms([
      {
        title: event.title,
        time: event.time,
        note: event.note,
        color: event.color,
      },
    ]);
    setIsModalOpen(true);
  }, []);

  const handleFormChange = (index, field, value) => {
    const newForms = [...eventForms];
    newForms[index] = { ...newForms[index], [field]: value };
    setEventForms(newForms);
  };

    const addMoreEvent = () => {
    setEventForms([...eventForms, { title: "", time: "", note: "", color: colorOptions[0] }]);
  };

  const removeEventForm = (index) => {
    if (eventForms.length > 1) {
      const newForms = eventForms.filter((_, i) => i !== index);
      setEventForms(newForms);
    }
  };

    const handleSubmit = () => {
    if (!selectedDate) return;

    const validForms = eventForms.filter((form) => form.title.trim());
    if (validForms.length === 0) return;

    const newEvents = validForms.map((form, index) => {
      const eventDate = new Date(selectedDate);
      const endDate = new Date(selectedDate);
      endDate.setHours(endDate.getHours() + 1);

      return {
        id: selectedEvent && index === 0 ? selectedEvent.id : `${Date.now()}-${index}`,
        title: form.title,
        start: eventDate,
        end: endDate,
        time: form.time,
        note: form.note,
        color: form.color,
      };
    });

     if (selectedEvent) {
      setEvents((prev) => [...prev.filter((e) => e.id !== selectedEvent.id), ...newEvents]);
    } else {
      setEvents((prev) => [...prev, ...newEvents]);
    }

    setIsModalOpen(false);
    setSelectedEvent(null);
    setSelectedDate(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    setSelectedDate(null);
    setEventForms([{ title: "", time: "", note: "", color: colorOptions[0] }]);
  };


  // date and time display for each event
  const CustomEvent = ({ event }) => {
  return (
    <div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "#000" }}>
      <strong>{event.title}</strong>
      {event.time && (
        <span style={{ fontSize: "12px", fontWeight: "bold",  marginLeft: "6px" }}>
          ({event.time})
        </span>
      )}
    </div>
  );
};
 


   const eventStyleGetter = (event) => {
    return {
      style: {
        backgroundColor: event.color,
        borderRadius: "4px",
        opacity: 0.8,
        color: "white",
        border: "0px",
        display: "block",
        fontSize: "14px",
        padding: "2px 4px",
      },
    };
  };
  // Custom day cell wrapper for event overflow


function CustomDayWrapper({ children, value }) {
  // Get all events for this day
  const dayEvents = events.filter(event => moment(event.start).isSame(value, "day"));

  if (dayEvents.length > MAX_EVENTS_DISPLAY) {
    const extraCount = dayEvents.length - MAX_EVENTS_DISPLAY;

    return (
      <div style={{ position: "relative", height: "100%" }}>
        {/* Show max events normally */}
        {dayEvents.slice(0, MAX_EVENTS_DISPLAY).map((event, idx) =>
          React.cloneElement(children[0], { key: idx, event })
        )}

        {/* Show +N badges for extra events, one for each */}
        <div
          style={{
            cursor: "pointer",
            color: "#2563eb",
            fontWeight: 700,
            fontSize: 14,
            background: "#fff",
            borderRadius: 4,
            padding: "2px 4px",
            marginTop: 4,
            userSelect: "none",
          }}
          onClick={() => {
            setPopupEvents(dayEvents);
            setPopupDate(value);
            setShowEventPopup(true);
          }}
        >
          {Array.from({ length: extraCount }).map((_, i) => (
            <div key={i}>+{i + 1}</div>
          ))}
        </div>
      </div>
    );
  }

  // If <= MAX_EVENTS_DISPLAY just render normally
  return <>{children}</>;
}


  return (
    <div className="h-screen p-4">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        selectable
        eventPropGetter={eventStyleGetter}
        dayPropGetter={dayPropGetter}
        views={["month", "week", "day"]}
        defaultView="month"
        components={{
          day: {
            eventWrapper: CustomDayWrapper,
          },
          event: CustomEvent,
        }}
        onShowMore={(events, date) => {
          setPopupEvents(events);
          setPopupDate(date);
          setShowEventPopup(true);
        }}
      />

  <EventPopup open={showEventPopup} onClose={() => setShowEventPopup(false)} events={popupEvents} date={popupDate} />

  <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-xl rounded-2xl  overflow-y-auto bg-white/40 backdrop-blur-2xl border border-white/30 shadow-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              {selectedEvent ? "Edit Event" : "Add Event"}
        
                <X onClick={closeModal} className="h-12 w-12 p-2 cursor-pointer" />
            
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {eventForms.map((form, index) => (
              <div key={index} className="space-y-3 p-3 rounded-lg relative">
                {eventForms.length > 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-1 right-1"
                    onClick={() => removeEventForm(index)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                )}

                <div>
                  <Label htmlFor={`title-${index}` } className="font-semibold text-xl">Title</Label>
                  <Input
                    id={`title-${index}`}
                    value={form.title}
                    onChange={(e) => handleFormChange(index, "title", e.target.value)}
                    placeholder="Event title"
                    className="mt-2 mb-2 border border-[#6E67D5] focus:border-none focus:outline-none focus:ring-1 focus:ring-[#6E67D5]"
                  />
                </div>

                <div>
                  <Label htmlFor={`time-${index}`} className="font-semibold text-xl">Time</Label>
                  <Input
                    id={`time-${index}`}
                      type="time" 
                    value={form.time}
                    onChange={(e) => handleFormChange(index, "time", e.target.value)}
                    placeholder="e.g., 2:00 PM"
                    className="mt-2 border border-[#6E67D5] focus:border-none focus:outline-none focus:ring-1 focus:ring-[#6E67D5]"
                  />
                </div>

                <div>
                  <Label htmlFor={`note-${index}`} className="font-semibold text-xl">Note</Label>
                  <Textarea
                    id={`note-${index}`}

                    value={form.note}
                    onChange={(e) => handleFormChange(index, "note", e.target.value)}
                    placeholder="Event notes"
                    rows={3}
                    className="mt-2 border-2 border-[#6E67D5] focus:border-none focus:outline-none focus:ring-1 focus:ring-[#6E67D5]"

                  />
                </div>

                <div>
                  <Label className="font-semibold text-xl mb-1.5">Color</Label>
                  <div className="flex gap-2 mt-1">
                    {colorOptions.map((color) => (
                      <button
                        key={color}
                        type="button"
                        className={`w-6 h-6 rounded-full border-2 ${
                          form.color === color ? "border-gray-800" : "border-gray-300"
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleFormChange(index, "color", color)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex gap-2 pt-4">
              {selectedEvent ? (
                <>
                  <Button onClick={addMoreEvent} variant="outline" className="flex-1 bg-transparent">
                    <Plus className="h-4 w-4 mr-1" />
                    Add More
                  </Button>
                  <Button  onClick={handleSubmit} variant="default" className="flex-1 !bg-[#6E67D5] !text-white hover:!bg-[#5c56c4]" >
                    Submit
                  </Button>
                </>
              ) : (
                <Button onClick={handleSubmit} className="flex-1">
                  Submit
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}



export default CalenderAdmin;