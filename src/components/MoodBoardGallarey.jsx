
import { useState } from "react";
import { Link } from "react-router-dom";




const MoodBoardGallery = ({moodBoards}) => {
 
  
  return (
    <div className="">
      {/* Desktop Grid Layout */}
      <div className="hidden lg:grid grid-cols-8 grid-rows-12 gap-4 h-[1200px] gap-y-12">
        {moodBoards?.map((item, index) => {
          const spanMap = [
            "row-span-5",
            "row-span-3",
            "row-span-4",
            "row-span-4",
            "row-span-5",
            "row-span-3",
            "row-span-5",
            "row-span-3",
            "row-span-3",
            "row-span-3",
          ];
          return (
            <div key={index} className={`col-span-2 ${spanMap[index]}`}>
              <img
                src={item.hero}
                alt={`img-${index}`}
                className="w-full h-full object-cover rounded-xl"
              />
              <p className="text-center cursor-pointer text-black flex justify-between mt-2 mx-8">
                <p className="text-lg">{item.title} </p>
                <Link to={`/moodboard/details/${index}`}>
                  <img src="/dots.png" className="h-6" alt="" />
                </Link>
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:hidden">
        {moodBoards?.map((item, index) => (
          <div className="mt-4" key={index}>
            <img
              src={item.url}
              alt={`img-${index}`}
              className="w-full h-auto object-cover rounded-xl"
            />
            <p className="text-center cursor-pointer text-black flex justify-between mt-2 mx-4">
              <p className="text-lg">{item.title} </p>
              <Link to={`/moodboard/details/:${index}`}>
                <img src="/dots.png" className="h-6" alt="" />
              </Link>
            </p>
          </div>
        ))}
      </div>
            

    </div>
  );
};

export default MoodBoardGallery;
