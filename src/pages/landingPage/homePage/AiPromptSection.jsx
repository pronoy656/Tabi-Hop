import { MinusSquare, Square, X } from 'lucide-react';
import { FaArrowRightLong } from 'react-icons/fa6';

const AiPromptSection = () => {
  return (
    <div className="max-w-[1320px] mx-auto py-10 md:py-[60px] px-4 sm:px-6 flex flex-col lg:flex-row items-center lg:space-x-16 space-y-10 lg:space-y-0">
      {/* Left Section */}
      <div className="w-full lg:w-[808px] text-center lg:text-left">
        <p className="text-4xl sm:text-5xl lg:text-7xl font-medium leading-tight">
          Describe your day with an{' '}
          <span className="text-[#E66CE5]">AI prompt</span>
        </p>
        <p className="text-base sm:text-lg lg:text-2xl font-medium text-[#565F6C] mt-6">
          An online tool that was built by a former tour guide & content
          creator. Teaching AI to think like a travel planner. Giving you the
          optimal routes to travel smart. Providing alternative routes and
          flexibility when things don’t work ou
        </p>
        <div className="bg-[#6A4388] w-[160px] h-11 border-2 border-[#6A4388] rounded-bl-md rounded-br-md rounded-tr-lg relative mt-7 mx-auto lg:mx-0">
          <button className="flex items-center justify-center space-x-2.5 px-2.5 h-11 bg-white border-2 border-[#6A4388] rounded-lg absolute top-[-5px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium w-[165px] -ml-[11px]">
            <p>Try it for free</p>
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full max-w-[425px]">
        <div className="bg-[#6D67D4] w-full h-[260px] sm:h-[280px] lg:h-[300px] border-2 border-[#6A4388] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl rounded-tr-lg relative mt-11">
          <div className="bg-[#FFF8F3] border-2 border-[#6A4388] rounded-2xl absolute top-[-14px] text-[16px] sm:text-[18px] lg:text-[20px] text-[#565F6C] font-medium w-full sm:w-[380px] lg:w-[428px] -right-0 lg:-right-6">
            {/* Header */}
            <div className="border h-[60px] sm:h-[70px] lg:h-[73px] rounded-tl-xl rounded-tr-xl bg-[#B9F] flex items-center justify-end space-x-2 text-white px-2">
              <MinusSquare
                className="bg-white text-black rounded-md"
                size={28}
              />
              <Square className="bg-white text-black rounded-md" size={28} />
              <X className="bg-white text-black rounded-md" size={28} />
            </div>
            {/* Content */}
            <div className="px-4 mb-6 sm:mb-8 lg:mb-9 rounded-2xl max-h-[150px] sm:max-h-[160px] lg:max-h-[176px] scroller overflow-y-scroll p-4 text-sm sm:text-base lg:text-[16px]">
              <p>
                I want to start my day at a coffee shop near my hotel that has
                good latte. Then go to a thrift shop. I want to have lunch at a
                Japanese restaurant. Then walk to a temple and get a goshuin
                stamp... I want to end the day by 8pm at a sports bar... I want
                to start my day at a coffee shop near my hotel that has good
                latte. Then go to a thrift shop. I want to have lunch at a
                Japanese restaurant. Then walk to a temple and get a goshuin
                stamp... I want to end the day by 8pm at a sports bar...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiPromptSection;
