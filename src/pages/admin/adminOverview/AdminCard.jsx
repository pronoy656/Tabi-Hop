
import sales from '../../../../public/user-dashboard.png';
const data = [
  {
    icon: <img src={sales} alt="users" />,
    title: "Total Users",
    value: "12,345",
    bgColor: "bg-[#EAEFFF]",
  },
  {
    icon: <img src={sales} alt="subscribers" />,
    title: "Total Subscriber",
    value: "75%",
    bgColor: "bg-[#FFECEC]",
  },
  {
    icon: <img src={sales} alt="itinerary" />,
    title: "Itinerary Created",
    value: "75%",
    bgColor: "bg-[#FFF5E0]",
  },
  {
    icon: <img src={sales} alt="moodboard" />,
    title: "Moodboard Available",
    value: "8,765",
    bgColor: "bg-[#E6F4ED]",
  },
];

const AdminCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data?.map((item, index) => (
        <div
          key={index}
          className="rounded-xl border-[1px] border-[#E5E7EA] bg-white p-5 flex justify-between items-center h-[112px]"
        >
          <div className='flex flex-col sapce-y-4'>
            <h4 className="text-sm  text-gray-600 mb-1">{item.title}</h4>
            <p className="text-xl font-semibold text-black">{item.value}</p>
          </div>
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.bgColor}`}
          >
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminCard;
