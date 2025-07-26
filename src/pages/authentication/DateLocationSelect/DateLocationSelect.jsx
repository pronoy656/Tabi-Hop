import { useState } from "react";

import { Input, DatePicker } from "antd";

//icon
import {
  EnvironmentOutlined,
  CalendarOutlined,
  CalendarFilled,
  EnvironmentFilled,
} from "@ant-design/icons";
// import { CalendarFilled } from "@ant-design/icons";

const DateLocationSelect = () => {
  // State to manage the selected date and location
  const [value, setValue] = useState("");
  const [location, setLocation] = useState("");

  // Date format for the date picker
  const dateFormat = "h:mm A DD MMMM, YYYY";

  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center "
        style={{ backgroundImage: "url('/travel-date.jpg')" }}
      >
        <div className="flex justify-center p-48">
          <div className=" w-[1280px] rounded-2xl flex flex-col justify-center items-center backdrop-blur-2xl bg-white/40">
            <h2 className="text-[28px] md:text-3xl font-semibold text-center mt-[61px] mb-1 text-black ">
              What are you Travel Dates ?
            </h2>
            <h2 className="font-medium">
              Just Flights are okay right now. You can always modify later
            </h2>
            <div className="w-[1123px] mt-9 mb-56 space-y-7">
              {/* Select departure date & time */}
              <div className="flex items-center gap-4">
                <label className="w-52 font-semibold text-right">
                  Departure Time & Date
                </label>
                <DatePicker
                  showTime
                  format={dateFormat}
                  placeholder="Select departure date & time"
                  className={`h-12 w-full ${
                    value ? "text-[20px] font-semibold" : "font-normal"
                  }`}
                  suffixIcon={null}
                  prefix={
                    <CalendarFilled className="w-[28px] h-[28px] mr-4 text-lg text-gray-800" />
                  }
                />
              </div>

              {/* Arrival Time & Date */}
              <div className="flex items-center gap-4">
                <label className="w-52 font-semibold text-right">
                  Arrival Time & Date
                </label>
                <DatePicker
                  showTime
                  format={dateFormat}
                  value={value}
                  onChange={(val) => setValue(val)}
                  placeholder="Select arrival date & time"
                  className={`h-12 w-full ${
                    value ? "text-[20px] font-semibold" : "font-normal"
                  }`}
                  suffixIcon={null}
                  prefix={
                    <CalendarFilled className="w-[28px] h-[28px] mr-4 text-lg text-gray-800" />
                  }
                />
              </div>

              {/* Starting Location */}
              <div className="flex items-center gap-4">
                <label className="w-52 font-semibold text-right">
                  Starting Location
                </label>
                <Input
                  placeholder="Enter starting location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className={`w-full h-12 ${
                    location ? "text-[20px] font-semibold" : "font-normal"
                  }`}
                  prefix={
                    // <EnvironmentOutlined className="w-[18px] h-[18px] mr-4" />
                    <EnvironmentFilled className="w-[18px] h-[18px] mr-6 text-2xl text-gray-800" />
                  }
                />
              </div>

              {/* Ending Location */}
              <div className="flex items-center gap-4">
                <label className="w-52 font-semibold text-right">
                  Ending Location
                </label>
                <Input
                  placeholder="Enter ending location"
                  className={`w-full h-12 ${
                    location ? "text-[20px] font-semibold" : "font-normal"
                  }`}
                  prefix={
                    <EnvironmentFilled className=" w-[18px] h-[18px] mr-6 text-2xl text-gray-800" />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateLocationSelect;
