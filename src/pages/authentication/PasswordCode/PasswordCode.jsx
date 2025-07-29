import { Button, Input } from "antd";
import { useForm, Controller } from "react-hook-form";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PasswordCode = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [secondsLeft, setSecondsLeft] = useState(60); // Initial 1 minute
  const [isCounting, setIsCounting] = useState(true);
  const navigate = useNavigate();

  // Timer logic
  useEffect(() => {
    let timer;
    if (isCounting && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isCounting, secondsLeft]);

  // Time formatting (MM:SS)
  const formatTime = (sec) => {
    const min = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const secStr = (sec % 60).toString().padStart(2, "0");
    return `${min}:${secStr} sec`;
  };

  const handleResend = () => {
    // Optional: You can trigger resend code API here
    setSecondsLeft(60); // Reset countdown
    setIsCounting(true);
  };

  const onSubmit = (data) => {
    console.log("Code submitted:", { code: data.code });
    navigate("/signin/reset-password"); // Navigate to next page on successful submission
  };

  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center "
        style={{ backgroundImage: "url('/password-Verification.jpg')" }}
      >
        <div className="flex items-center justify-center p-48">
          <div className="border-1 border-white rounded-2xl w-[778px] backdrop-blur-2xl bg-white/40">
            <div className="flex justify-center mt-20">
              <div className="w-[560px] mb-[102.5px]  px-6 pt-6">
                <div className="text-center mb-6">
                  <p className="text-[44px] font-semibold">
                    Verification Process
                  </p>
                  <p className="text-base font-medium ">
                    Enter the confirmation code has sent to
                    mahbub****reem@gmail.com
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="mb-4">
                    <label className="font-bold block mb-2">
                      Enter Code ({formatTime(secondsLeft)})
                    </label>
                    <Controller
                      name="code"
                      control={control}
                      rules={{
                        required: "Code is required",
                        pattern: {
                          value: /^[0-9]{4,6}$/, // Optional: 4-6 digit code
                          message: "Enter a valid code (4 to 6 digits)",
                        },
                      }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder="enter your code"
                          className="h-12"
                          type="number"
                          inputMode="numeric"
                        />
                      )}
                    />
                    {errors.code && (
                      <p className="text-red-500 text-lg font-medium">
                        {errors.code.message}
                      </p>
                    )}
                  </div>
                  <div className="text-center">
                    <p>
                      Didn’t get the Code?{" "}
                      <span
                        onClick={handleResend}
                        className="text-sm font-semibold cursor-pointer "
                      >
                        Resend code again
                      </span>
                    </p>
                  </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordCode;
