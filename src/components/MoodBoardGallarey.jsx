import React from "react";

const images = [
  "/stress-selector.jpg",
  "/stress-selector.jpg",
  "/stress-selector.jpg",
  "/stress-selector.jpg",
  "/stress-selector.jpg",
  "/stress-selector.jpg",
  "/stress-selector.jpg",
  "/stress-selector.jpg",
];

const MoodBoardGallery = () => {
  return (
    <div className="p-4">
      <div className="hidden lg:grid grid-cols-6 grid-rows-12 gap-4 h-[1200px]">
        <div className="col-span-2 row-span-5">
          <img src={images[0]} alt="img1" className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="col-span-2 row-span-3">
          <img src={images[1]} alt="img2" className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="col-span-2 row-span-4">
          <img src={images[2]} alt="img3" className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="col-span-2 row-span-4">
          <img src={images[3]} alt="img4" className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="col-span-2 row-span-5">
          <img src={images[4]} alt="img5" className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="col-span-2 row-span-3">
          <img src={images[5]} alt="img6" className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="col-span-2 row-span-5">
          <img src={images[6]} alt="img7" className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="col-span-2 row-span-3">
          <img src={images[7]} alt="img8" className="w-full h-full object-cover rounded-xl" />
        </div>
      </div>

      {/* Mobile fallback layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:hidden">
        {images.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`img-${i}`}
            className="w-full h-auto object-cover rounded-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default MoodBoardGallery;
