
const reminders = [
  { time: "6:00", task: "Drink 8 glasses of water", bg: "bg-blue-100" },
  { time: "9:00", task: "Get a notebook", bg: "bg-pink-100" },
  { time: "10:00", task: "Work", bg: "bg-green-100" },
  { time: "16:00", task: "Work", bg: "bg-red-100" },
  { time: "20:00", task: "Work", bg: "bg-red-100" },
  { time: "20:00", task: "Work", bg: "bg-red-100" },
];

const ReminderCard = () => {
  return (
    <div className="bg-white col-span-4 rounded-lg shadow-md p-8">
      <h3 className="text-xl font-semibold mb-4">Upcoming Reminders</h3>
      
      <div className="space-y-2 text-sm">
        {reminders.map((reminder, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <span className="text-gray-700 min-w-[40px]">{reminder.time}</span>
            <div className={`px-3 py-2 rounded w-full ${reminder.bg}`}>
              <span className="font-medium text-gray-900">{reminder.task}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReminderCard;
