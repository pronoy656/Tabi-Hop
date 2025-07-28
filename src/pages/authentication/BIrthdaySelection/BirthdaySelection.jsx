import { Button } from "antd";
import { DatePicker } from "antd";
import { Form } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const BirthdaySelection = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Success:", {
      month: data.month?.format("MMMM YYYY"),
      date: data.date?.format("YYYY-MM-DD"),
      year: data.year?.format("YYYY"),
    });
  };

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
                  <Form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="flex space-x-4 mt-6">
                      {/* Month picker */}
                      <div>
                        <label className="text-left font-bold block mb-1">
                          Month
                        </label>
                        <div className="h-12">
                          <Controller
                            name="month"
                            control={control}
                            rules={{ required: "Month is required" }}
                            render={({ field }) => (
                              <DatePicker
                                picker="month"
                                value={field.value}
                                onChange={(date, dateString) => {
                                  field.onChange(date);
                                  onChange(date, dateString);
                                }}
                                className="h-full w-full custom-datepicker"
                              />
                            )}
                          />
                          {errors.month && (
                            <p className="text-red-500 text-sm">
                              {errors.month.message}
                            </p>
                          )}
                        </div>
                      </div>
                      {/* Date picker */}
                      <div>
                        <label className="text-left font-bold block mb-1">
                          {" "}
                          Date
                        </label>
                        <div className="h-12">
                          <Controller
                            name="date"
                            control={control}
                            rules={{ required: "date is required" }}
                            render={({ field }) => (
                              <DatePicker
                                onChange={field.onChange}
                                picker="date"
                                value={field.value}
                                className="h-full w-full custom-datepicker"
                              />
                            )}
                          />
                          {errors.date && (
                            <p className="text-red-500 text-sm">
                              {errors.date.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <label className="text-left font-bold block mb-1">
                          year
                        </label>
                        <div className="h-12">
                          <Controller
                            name="year"
                            control={control}
                            rules={{ required: "Year is required" }}
                            render={({ field }) => (
                              <DatePicker
                                onChange={field.onChange}
                                picker="year"
                                value={field.value}
                                className="h-full w-full custom-datepicker"
                              />
                            )}
                          />
                          {errors.year && (
                            <p className="text-red-500 text-sm">
                              {errors.year.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Submit Button */}
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      style={{
                        marginTop: "37px",
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
                  </Form>
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
