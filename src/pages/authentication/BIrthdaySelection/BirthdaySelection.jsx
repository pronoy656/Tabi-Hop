import { Button, Input, Checkbox } from "antd";
// import { useForm, Controller } from "react-hook-form";

import { DatePicker, Space } from "antd";
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

// Demo
import { useState } from "react";

import { EnvironmentOutlined, CalendarOutlined } from "@ant-design/icons";
// import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const BirthdaySelection = () => {
  const [value, setValue] = useState("");
  const [location, setLocation] = useState("");

  const dateFormat = "h:mm A DD MMMM, YYYY";

  //   const {
  //     handleSubmit,
  //     control,

  //     formState: { errors },
  //   } = useForm();

  //   const onSubmit = (data) => {
  //     console.log("Success:", data);
  //   };
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center "
        style={{ backgroundImage: "url('/birthday-selection.jpg')" }}
      >
        <div className="flex items-center justify-center p-48">
          <div className="border-1 border-white rounded-2xl w-[778px] backdrop-blur-2xl bg-white/40">
            <div className="flex justify-center mt-20">
              <div className="w-[560px] mb-[102.5px]  px-6 pt-6">
                <div className="text-center mb-6">
                  <p className="text-[44px] font-semibold">Add your Birthday</p>
                  <p className="text-base font-medium ">
                    Providing your birthday improves the features and ads you
                    see while keeping the TabiHop community safe. You can find
                    your birthday in your personal information account settings.
                  </p>
                  <div className="flex space-x-4 mt-6">
                    <div>
                      <label className="text-left font-bold block mb-1">
                        Month
                      </label>
                      <DatePicker onChange={onChange} picker="month" />
                    </div>
                    <div>
                      <label className="text-left font-bold block mb-1">
                        {" "}
                        Date
                      </label>
                      <DatePicker onChange={onChange} picker="date" />
                    </div>
                    <div>
                      <label className="text-left font-bold block mb-1">
                        year
                      </label>
                      <DatePicker onChange={onChange} picker="year" />
                    </div>
                  </div>
                </div>

                <form noValidate>
                  {/* Submit Button */}
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    style={{
                      marginTop: "22px",
                      height: "56px",
                      backgroundColor: "#FFAA00",
                      borderColor: "#FFAA00",
                      color: "#000",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    Continue
                  </Button>
                </form>
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
                    // className="w-full"
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
                    // className="w-full"
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

                <div className="flex justify-center mt-9">
                  <button className="bg-white w-[209px] h-10 rounded-lg">
                    <p className="text-lg font-semibold">Resend Code - 01:56</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdaySelection;
