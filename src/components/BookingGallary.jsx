const images = [
  "https://i.ibb.co/Pvs6yxF6/Frame.png",
  "https://i.ibb.co/DP4BGMFp/Frame-1.png",
  "https://i.ibb.co/Qvkj4zWX/Frame-2.png",
  "https://i.ibb.co/nqDjpBbC/Frame-3.png",
  "https://i.ibb.co/Y4WZyDd0/Frame-4.png",
  "https://i.ibb.co/kVqhG4gh/Frame-6.png",
  "https://i.ibb.co/23Y2d0wR/Frame-7.png",
  "https://i.ibb.co/4GcGZMB/Frame-8.png",
  "https://i.ibb.co/gZD0xjWy/Frame-9.png"
];

const BookingGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-15 grid-rows-6 gap-4 lg:h-[1200px] p-4">
      <div className="lg:col-span-4 lg:row-span-2">
        <img src={images[0]} alt="img1" className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="lg:col-span-4 lg:row-span-2">
        <img src={images[1]} alt="img2" className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="lg:col-span-7 lg:row-span-2">
        <img src={images[2]} alt="img3" className="w-full h-full object-cover rounded-xl" />
      </div>

      <div className="lg:col-span-6 lg:row-span-2">
        <img src={images[3]} alt="img4" className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="lg:col-span-5 lg:row-span-2">
        <img src={images[4]} alt="img5" className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="lg:col-span-4 lg:row-span-2">
        <img src={images[5]} alt="img6" className="w-full h-full object-cover rounded-xl" />
      </div>

      <div className="lg:col-span-5 lg:row-span-2">
        <img src={images[6]} alt="img7" className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="lg:col-span-5 lg:row-span-2">
        <img src={images[7]} alt="img8" className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="lg:col-span-5 lg:row-span-2">
        <img src={images[8]} alt="img9" className="w-full h-full object-cover rounded-xl" />
      </div>
    </div>
  );
};

export default BookingGallery;
