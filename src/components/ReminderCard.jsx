import { useState } from 'react';

const reminders = [
  {
    date: '2025-08-08T08:00',
    task: 'Drink 8 glasses of water',
    bg: 'bg-blue-100',
  },
  { date: '2025-08-08T09:00', task: 'Get a notebook', bg: 'bg-pink-100' },
  { date: '2025-08-09T10:00', task: 'Work', bg: 'bg-green-100' },
  { date: '2025-08-15T16:00', task: 'Work', bg: 'bg-red-100' },
  { date: '2025-09-02T20:00', task: 'Work', bg: 'bg-red-100' },
  { date: '2025-09-10T20:00', task: 'Work', bg: 'bg-red-100' },
];

const ReminderCard = () => {
  const [viewType, setViewType] = useState('Day');
  const [filterValue, setFilterValue] = useState('');

  // ফিল্টার লজিক
  const filteredReminders = reminders.filter((reminder) => {
    const reminderDate = new Date(reminder.date);

    if (viewType === 'Day' && filterValue) {
      return reminderDate.toISOString().split('T')[0] === filterValue;
    }
    if (viewType === 'Month' && filterValue) {
      return (
        reminderDate.getFullYear() === parseInt(filterValue.split('-')[0]) &&
        reminderDate.getMonth() + 1 === parseInt(filterValue.split('-')[1])
      );
    }
    if (viewType === 'Week' && filterValue) {
      const selectedDate = new Date(filterValue);
      const startOfWeek = new Date(selectedDate);
      startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay());
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);

      return reminderDate >= startOfWeek && reminderDate <= endOfWeek;
    }
    return true; // default সব দেখাবে
  });

  return (
    <div
      className="bg-white col-span-4 rounded-lg min-w-[260px] sm:min-w-[390px] w-full shadow-md p-4 md:p-8 border border-r-4 border-b-4"
      style={{
        borderTopColor: '#3DA755',
        borderLeftColor: '#3DA755',
        borderBottomColor: '#3DA755',
        borderRightColor: '#3DA755',
        borderStyle: 'solid',
      }}
    >
      {/* Top Section */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <h3 className="text-xl">Upcoming Reminders</h3>

        <div className="flex gap-2">
          <select
            value={viewType}
            onChange={(e) => {
              setViewType(e.target.value);
              setFilterValue('');
            }}
            className="border rounded px-2 py-1 text-sm"
          >
            <option value="Day">Day</option>
            <option value="Week">Week</option>
            <option value="Month">Month</option>
          </select>

          {viewType === 'Day' && (
            <input
              type="date"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            />
          )}

          {viewType === 'Week' && (
            <input
              type="date"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            />
          )}

          {viewType === 'Month' && (
            <input
              type="month"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            />
          )}
        </div>
      </div>

      {/* Reminders List */}
      <div className="space-y-2 text-sm">
        {filteredReminders.length > 0 ? (
          filteredReminders.map((reminder, idx) => {
            const dateObj = new Date(reminder.date);
            const dateStr = dateObj.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            });
            const timeStr = dateObj.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            });

            return (
              <div key={idx} className="flex items-center gap-3">
                <div className="flex flex-col items-center justify-center text-center bg-[#13c4ac33]  px-2 py-1 rounded text-xs min-w-[50px]">
                  <span className="font-semibold">{dateStr}</span>
                  <span>{timeStr}</span>
                </div>
                <div className={`px-3 py-3 rounded w-full ${reminder.bg}`}>
                  <span className="font-medium text-gray-900">
                    {reminder.task}
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 text-sm">No reminders found.</p>
        )}
      </div>
    </div>
  );
};

export default ReminderCard;
