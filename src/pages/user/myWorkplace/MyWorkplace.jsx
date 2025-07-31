import PrimaryButton from "../../../components/shared/PrimaryButton";
import WorkplaceTab from "../../../components/Workplace/WorkplaceTab";

const MyWorkplace = () => {
  const reminders = [
    {
      id: 1,
      time: "12 pm",
      month: "april",
      des: "Lorem Ipsum is simply dummy text of the printing",
      tag: "event",
    },
    {
      id: 7,
      time: "12 pm",
      month: "april",
      des: "Lorem Ipsum is simply dummy text of the printing",
      tag: "event",
    },
    {
      id: 6,
      time: "12 pm",
      month: "april",
      des: "Lorem Ipsum is simply dummy text of the printing",
      tag: "event",
    },
    {
      id: 5,
      time: "12 pm",
      month: "april",
      des: "Lorem Ipsum is simply dummy text of the printing",
      tag: "event",
    },
    {
      id: 4,
      time: "12 pm",
      month: "april",
      des: "Lorem Ipsum is simply dummy text of the printing",
      tag: "event",
    },
    {
      id: 3,
      time: "12 pm",
      month: "april",
      des: "Lorem Ipsum is simply dummy text of the printing",
      tag: "event",
    },
    {
      id: 2,
      time: "12 pm",
      month: "april",
      des: "Lorem Ipsum is simply dummy text of the printing",
      tag: "event",
    },
  ];
  return (
    <section className="page">
      {/* reminders */}

      <div
        className="bg-[#ffffff] border rounded-xl border-gray-300 p-4 md:p-10"
        style={{ font: "Inter" }}
      >
        <h1 className="text-3xl font-bold">Upcoming Reminders</h1>

        <div className="flex flex-wrap gap-2 mt-4">
          {reminders?.map((reminder, index) => (
            <div
              key={index}
              className="bg-[#D8FFE3] border rounded-xl border-gray-300  p-4 space-y-2   mx-auto w-full sm:w-[160px] "
            >
              <h1 className="uppercase text-xl font-semibold text-[#000000]">
                {reminder.month} - {reminder.time}
              </h1>

              <p className="text-[#394050] font-medium text-base">{reminder.des}</p>
              <p className="text-[#394050] font-medium capitalize">{reminder.tag}</p>
            </div>
          ))}
        </div>
      </div>
{/* 
      Tab Section */}
  <div className="flex flex-col-reverse md:flex-row justify-between mx-auto  mt-10">
    <div className="flex flex-col">
      <WorkplaceTab></WorkplaceTab> 
    </div>
    <div className="mb-6 sm:mb-0 sm:mt-2 mt-0">
      <PrimaryButton bgColor={'#4ABBC6'} text={'Add Workplace'} textColor="white"/>
    </div>
  </div>
    
    </section>
  );
};

export default MyWorkplace;
