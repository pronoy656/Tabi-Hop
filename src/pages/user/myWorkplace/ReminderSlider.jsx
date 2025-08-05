import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const ReminderSlider = () => {
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

  return (  <div
        className="bg-[#ffffff] border  rounded-xl border-gray-300 p-4 md:p-6"
     
      >
        <h1 className="text-3xl font-bold">Upcoming Reminders</h1>
    <div className="mt-4">
      <Swiper
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        grabCursor={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          868: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1180: { slidesPerView: 5 },
          1280: { slidesPerView: 8 },

        }}
      >
        {reminders.map((reminder) => (
          <SwiperSlide key={reminder.id}>
            <div className="bg-[#D8FFE3] border rounded-xl border-gray-300 p-4 space-y-2 w-full sm:w-[160px] h-full">
              <h1 className="uppercase text-xl font-semibold text-[#000000]">
                {reminder.month} - {reminder.time}
              </h1>
              <p className="text-[#394050] font-medium text-base">{reminder.des}</p>
              <p className="text-[#394050] font-medium capitalize">{reminder.tag}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    
    
    
     </div>
  );
};

export default ReminderSlider;
