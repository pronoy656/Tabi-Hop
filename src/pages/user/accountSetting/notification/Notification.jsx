const Notification = () => {
  const notifications = [
    {
      title: "You have received $500 from John Miller",
      time: "Fri, 12:30pm",
    },
    {
      title: "Your withdrawal of $300 is successful",
      time: "Thu, 11:15am",
    },
    {
      title: "New login from Chrome Browser",
      time: "Wed, 10:45am",
    },
    {
      title: "2FA has been enabled on your account",
      time: "Tue, 9:20am",
    },
    {
      title: "Profile updated successfully",
      time: "Mon, 8:00am",
    },
  ];

  return (
    <div className="admin-page space-y-4">
      <div>
        <h2 className="text-3xl font-semibold text-black/80">Notifications</h2>
        <p className="text-gray-500 text-sm">
          Here are your recent account activities and alerts.
        </p>
      </div>

      <div className="shadow border border-[#0000001A] p-2 lg:p-4 rounded-lg bg-white space-y-2">
        {notifications.map((data, index) => (
          <div key={index} className="p-4 hover:bg-gray-50 rounded-lg bg-[#F3F4F6] transition duration-200 flex items-center gap-x-4">
           <div className="bg-[#4796B5] rounded-sm w-fit p-2">
            <img src="/Icon.png" className="h-6 w-6 " alt="" />
           </div>
           <div>
             <h3 className="text-sm font-medium text-[#2c3e57]">{data.title}</h3>
            <p className="text-xs text-gray-500 mt-1">{data.time}</p>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;