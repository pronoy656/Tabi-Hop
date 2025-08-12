
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../components/ui/dialog";
import { X } from "lucide-react";


const EventPopup = ({ open, onClose, events, date }) => (
  <Dialog open={open} onOpenChange={onClose}>
    <DialogContent className="max-w-xl max-h-[80vh] overflow-y-auto rounded-2xl">
      <DialogHeader>
        <DialogTitle className="flex items-center justify-between">
          Events for {date ? date.toLocaleDateString() : ""}
          <button onClick={onClose} className="ml-2 ">
            <X className="h-10 w-10 border border-blue-500 p-2 rounded-full" />     
          </button>
        </DialogTitle>
      </DialogHeader>
      <div className="space-y-3 mt-7">
        {events && events.length > 0 ? (
          events.map((event, idx) => (
            <div key={event.id || idx} className="p-3.5 rounded-2xl flex items-center" style={{ background: event.color }}>
              <div className="flex-1 space-y-1.5">
                <div className="font-bold text-white">{event.title}</div>
                <div className="text-xs text-white">{event.time}</div>
                <div className="text-xs text-white">{event.note}</div>
              </div>
            </div>
          ))
        ) : (
          <div>No events</div>
        )}
      </div>
    </DialogContent>
  </Dialog>
);

export default EventPopup;
