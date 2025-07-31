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
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/travel-date.jpg')" }}
      >
        <div className="flex justify-center px-4 py-48 md:px-12 lg:px-20">
          {/* <div className="flex justify-center px-4"> */}
          <div className="w-full max-w-7xl rounded-2xl flex flex-col justify-center items-center backdrop-blur-2xl bg-white/40 px-4 md:px-10 lg:px-16">
            <h2 className="text-xl md:text-3xl font-semibold text-center mt-10 mb-1 text-black">
              What are your Travel Dates?
            </h2>
            <h2 className="text-sm md:text-base font-medium text-center">
              Just Flights are okay right now. You can always modify later
            </h2>

            <div className="w-full mt-10 mb-56 space-y-8">
              {/* Departure Date & Time */}
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <label className="md:w-52 font-semibold text-left">
                  Departure Time & Date
                </label>
                <DatePicker
                  showTime
                  format={dateFormat}
                  placeholder="Select departure date & time"
                  className={`h-12 w-full ${
                    value ? "text-[18px] font-semibold" : "font-normal"
                  }`}
                  suffixIcon={null}
                  // popupStyle={{ maxWidth: "80w", overflowX: "auto" }}
                  dropdownClassName="custom-datepicker-dropdown"
                  prefix={
                    <CalendarFilled className="w-[24px] h-[24px] mr-4 text-lg text-gray-800" />
                  }
                />
              </div>

              {/* Arrival Date & Time */}
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <label className="md:w-52 font-semibold text-left">
                  Arrival Time & Date
                </label>
                <DatePicker
                  showTime
                  format={dateFormat}
                  value={value}
                  onChange={(val) => setValue(val)}
                  placeholder="Select arrival date & time"
                  className={`h-12 w-full ${
                    value ? "text-[18px] font-semibold" : "font-normal"
                  }`}
                  suffixIcon={null}
                  dropdownClassName="custom-datepicker-dropdown"
                  prefix={
                    <CalendarFilled className="w-[24px] h-[24px] mr-4 text-lg text-gray-800" />
                  }
                />
              </div>

              {/* Starting Location */}
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <label className="md:w-52 font-semibold text-left">
                  Starting Location
                </label>
                <Input
                  placeholder="Enter starting location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className={`w-full h-12 ${
                    location ? "text-[18px] font-semibold" : "font-normal"
                  }`}
                  prefix={
                    <EnvironmentFilled className="w-[20px] h-[20px] mr-4 text-gray-800" />
                  }
                />
              </div>

              {/* Ending Location */}
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <label className="md:w-52 font-semibold text-left">
                  Ending Location
                </label>
                <Input
                  placeholder="Enter ending location"
                  className={`w-full h-12 ${
                    location ? "text-[18px] font-semibold" : "font-normal"
                  }`}
                  prefix={
                    <EnvironmentFilled className="w-[20px] h-[20px] mr-4 text-gray-800" />
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
