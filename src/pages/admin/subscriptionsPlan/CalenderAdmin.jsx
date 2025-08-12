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

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Textarea } from "../../../components/ui/textarea";

import EventPopup from "./EventPopup";
import { Plus, X } from "lucide-react";


const localizer = momentLocalizer(moment);

const colorOptions = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
];


const MAX_EVENTS_DISPLAY = 4;

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


   const eventStyleGetter = (event) => {
    return {
      style: {
        backgroundColor: event.color,
        borderRadius: "4px",
        opacity: 0.8,
        color: "white",
        border: "0px",
        display: "block",
        fontSize: "12px",
        padding: "2px 4px",
      },
    };
  };
  // Custom day cell wrapper for event overflow
  function CustomDayWrapper({ children, value }) {
    // Only for day view
    const dayEvents = events.filter(
      (event) =>
        moment(event.start).isSame(value, "day")
    );
    if (dayEvents.length > MAX_EVENTS_DISPLAY) {
      return (
        <div style={{ position: "relative", height: "100%" }}>
          {dayEvents.slice(0, MAX_EVENTS_DISPLAY).map((event, idx) =>
            React.cloneElement(children[0], { key: idx, event })
          )}
          <div
            style={{ cursor: "pointer", color: "#2563eb", fontWeight: 600, fontSize: 12, background: "#fff", borderRadius: 4, padding: "2px 4px", marginTop: 2 }}
            onClick={() => {
              setPopupEvents(dayEvents);
              setPopupDate(value);
              setShowEventPopup(true);
            }}
          >
            +{dayEvents.length - MAX_EVENTS_DISPLAY} more
          </div>
        </div>
      );
    }
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
        }}
        onShowMore={(events, date) => {
          setPopupEvents(events);
          setPopupDate(date);
          setShowEventPopup(true);
        }}
      />

  <EventPopup open={showEventPopup} onClose={() => setShowEventPopup(false)} events={popupEvents} date={popupDate} />

  <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-xl rounded-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              {selectedEvent ? "Edit Event" : "Add Event"}
        
                <X onClick={closeModal} className="h-10 w-10 border p-2 rounded-full" />
            
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {eventForms.map((form, index) => (
              <div key={index} className="space-y-3 p-3 border rounded-lg relative">
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
                  <Label htmlFor={`title-${index}`}>Title</Label>
                  <Input
                    id={`title-${index}`}
                    value={form.title}
                    onChange={(e) => handleFormChange(index, "title", e.target.value)}
                    placeholder="Event title"
                  />
                </div>

                <div>
                  <Label htmlFor={`time-${index}`}>Time</Label>
                  <Input
                    id={`time-${index}`}
                    value={form.time}
                    onChange={(e) => handleFormChange(index, "time", e.target.value)}
                    placeholder="e.g., 2:00 PM"
                  />
                </div>

                <div>
                  <Label htmlFor={`note-${index}`}>Note</Label>
                  <Textarea
                    id={`note-${index}`}
                    value={form.note}
                    onChange={(e) => handleFormChange(index, "note", e.target.value)}
                    placeholder="Event notes"
                    rows={2}
                  />
                </div>

                <div>
                  <Label>Color</Label>
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
                  <Button onClick={handleSubmit} className="flex-1">
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