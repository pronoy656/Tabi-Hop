import React, { useState } from "react";

const MessageSection = () => {
  const defaultText = `Lorem Ipsum is simply dummy text of the printing antypesetting  industry. Lorem Ipsum has been the industry's standard dummy 1500s, 
when   anunknown printer took a galley of type and scrambled it to make a type specimen book. It has

survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the

industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a

type specimen book. It has survived not only five centuries, Lorem Lorem Ipsum has been the industry's standard dummy`;

  const [message, setMessage] = useState(defaultText);

  const handleSubmit = () => {
    console.log("User message:", message);
  };

  return (
    <div>
      <h2 className="font-semibold text-lg mb-4 text-[#1F4F53]">
        Step - 05 : Write a prompt sharing how you want to spend you day
      </h2>

      <div className="bg-white border border-gray-300 shadow-xl rounded-md p-6 space-y-2">
        <div className="pb-4 flex gap-2">
          <div className="flex items-end">
            <img src="/profile1.png" className="h-8" alt="" />
          </div>
          <div className="bg-[#F2F3F5] w-full shadow-xl rounded-md p-4 font-medium">
            <h3>Hi there 👋</h3>
            <h3>
              Please share information about your journey briefly. So we can
              assist you to create the perfect plan for you!
            </h3>
          </div>
        </div>

        <div className="bg-white shadow-xl shadow-gray-300 rounded-md p-6 md:flex justify-between items-center gap-2">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-32 outline-none whitespace-pre-wrap resize-none overflow-y-auto"
          />

          <button
            onClick={handleSubmit}
            className="bg-black max-w-[46px] max-h-[52px] text-white p-2 rounded-2xl md:w-30 h-10 mt-2 md:mt-0"
          >
            <img src="/up-arrow.png" className="h-4 w-8" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;
