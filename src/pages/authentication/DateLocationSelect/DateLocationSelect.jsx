import { useState } from "react";

import { Input, DatePicker } from "antd";

//icon
import { EnvironmentOutlined, CalendarOutlined } from "@ant-design/icons";

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
          <div className=" w-[846px] rounded-2xl flex flex-col justify-center items-center backdrop-blur-2xl bg-white/40">
            <h2 className="text-[28px] md:text-3xl font-semibold text-center mt-[135.52px] mb-6 text-black ">
              What are you Travel Dates ?
            </h2>
            <h2>
              Just Flights are okay right now. You can always modify later
            </h2>

            <div className="space-y-4 w-[574.69px] px-[17.35px]"></div>

            {/* Demo Code */}
            <div className="flex items-center gap-4">
              <label className="w-48 font-semibold text-right">
                Departure Time & Date
              </label>
              <DatePicker
                showTime
                format={dateFormat}
                placeholder="Select departure date & time"
                className={`h-12 w-full ${
                  value ? "font-semibold" : "font-normal"
                }`}
                suffixIcon={<CalendarOutlined />}
              />
            </div>

            {/* Arrival Time & Date */}
            <div className="flex items-center gap-4">
              <label className="w-48 font-semibold text-right">
                Arrival Time & Date
              </label>
              <DatePicker
                showTime
                format={dateFormat}
                value={value}
                onChange={(val) => setValue(val)}
                // value={dayjs("2025-08-22T10:00:00")}
                placeholder="Select arrival date & time"
                className={`h-12 w-full ${
                  value ? "font-semibold" : "font-normal"
                }`}
                suffixIcon={<CalendarOutlined />}
              />
            </div>

            {/* Starting Location */}
            <div className="flex items-center gap-4">
              <label className="w-48 font-semibold text-right">
                Starting Location
              </label>
              <Input
                placeholder="Enter starting location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={`w-full h-12 ${
                  location ? "font-semibold" : "font-normal"
                }`}
                prefix={<EnvironmentOutlined />}
              />
            </div>

            {/* Ending Location */}
            <div className="flex items-center gap-4">
              <label className="w-48 font-semibold text-right">
                Ending Location
              </label>
              <Input
                placeholder="Enter ending location"
                className="w-full"
                prefix={<EnvironmentOutlined />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateLocationSelect;
