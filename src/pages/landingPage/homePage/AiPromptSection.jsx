import { MinusSquare, Square, SquareMinus, X } from 'lucide-react';
import { FaArrowRightLong } from 'react-icons/fa6';

const AiPromptSection = () => {
  return (
    <div className="max-w-[1320px] mx-auto border py-[90px] flex items-center space-x-16">
      <div className="w-[808px]">
        <p className="text-7xl font-medium leading-24">
          Describe your day with an{' '}
          <span className="text-[#E66CE5]">AI prompt</span>
        </p>
        <p className="text-2xl font-medium text-[#565F6C] mt-6">
          An online tool that was built by a former tour guide & content
          creator. Teaching AI to think like a travel planner. Giving you the
          optimal routes to travel smart. Providing alternative routes and
          flexibility when things don’t work ou
        </p>
        <div className="bg-[#6A4388] w-[160px] h-11 border-2 border-[#6A4388]  rounded-bl-md rounded-br-md rounded-tr-lg relative mt-7">
          <button className="flex items-center justify-center space-x-2.5 px-2.5 h-11  bg-white border-2 border-[#6A4388] rounded-lg absolute top-[-5px] text-[20px] font-medium w-[165px] -ml-[11px]">
            <p>Try it for free</p>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      {/* Right Section */}
      <div>
        <div className="bg-[#6D67D4] w-[425px] h-[300px] border-2 border-[#6A4388] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl rounded-tr-lg relative mt-11">
          <div className=" bg-[#FFF8F3] border-2 border-[#6A4388] rounded-2xl absolute top-[-14px] text-[20px] text-[#565F6C] font-medium w-[428px]  -right-6">
            <div className="border h-[73px] rounded-tl-xl rounded-tr-xl bg-[#B9F] flex items-center justify-end space-x-2 text-white">
              <MinusSquare
                className="bg-white text-black rounded-md"
                size={32}
              />
              <Square className="bg-white text-black rounded-md" size={32} />
              <X className="bg-white text-black rounded-md" size={32} />
            </div>
            <div className="px-4 mb-9 rounded-2xl max-h-[176px] scroller overflow-y-scroll p-4">
              <p>
                I want to start my day at a coffee shop near my hotel that has
                good latte. Then go to a thrift shop. I want to have lunch at a
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
