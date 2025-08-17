import React from 'react';

const VideoSection = () => {
  return (
    // <div>
    //   <div className="mt-14 rounded-2xl  overflow-hidden w-[800px] h-[450px]">
    //     <iframe
    //       width="800"
    //       height="450"
    //       src="https://www.youtube.com/embed/Bof8UqszP54?si=dzwQsW-J_VpB3f5c"
    //       title="YouTube Playlist"
    //       frameBorder="0"
    //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //       allowFullScreen
    //     ></iframe>
    //   </div>
    // </div>
    <div className="py-28 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {/* <h2 className="text-5xl  font-bold text-gray-900 mb-4"> */}
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            No more planning alone{' '}
            <span className="text-[#E66CE5]">Build together.</span>
          </h2>
          {/* <p className="text-xl font-medium text-gray-700 max-w-2xl mx-auto"> */}
          <p className="text-lg sm:text-xl font-normal sm:font-medium text-gray-800 max-w-2xl mx-auto px-4">
            Collaborate with your travel buddies, and ask AI the best optimal
            way to hop to your destinations.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* 1 Frame */}
          <div className="rounded-2xl overflow-hidden ">
            <iframe
              className="w-full h-[293px]"
              src="https://www.youtube.com/embed/Bof8UqszP54?si=dzwQsW-J_VpB3f5c"
              title="YouTube Playlist"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* 2nd Frame */}
          <div className="rounded-2xl overflow-hidden ">
            <iframe
              className="w-full h-[293px]"
              src="https://www.youtube.com/embed/Bof8UqszP54?si=dzwQsW-J_VpB3f5c"
              title="YouTube Playlist"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* 3rd Frame */}
          <div className="rounded-2xl overflow-hidden ">
            <iframe
              className="w-full h-[293px]"
              src="https://www.youtube.com/embed/Bof8UqszP54?si=dzwQsW-J_VpB3f5c"
              title="YouTube Playlist"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* 1 Frame */}
          <div className="rounded-2xl overflow-hidden">
            <iframe
              className="w-full h-[293px]"
              src="https://www.youtube.com/embed/Bof8UqszP54?si=dzwQsW-J_VpB3f5c"
              title="YouTube Playlist"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* 2nd Frame */}
          <div className="rounded-2xl overflow-hidden ">
            <iframe
              className="w-full h-[293px]"
              src="https://www.youtube.com/embed/Bof8UqszP54?si=dzwQsW-J_VpB3f5c"
              title="YouTube Playlist"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* 3rd Frame */}
          <div className="rounded-2xl overflow-hidden ">
            <iframe
              className="w-full h-[293px]"
              src="https://www.youtube.com/embed/Bof8UqszP54?si=dzwQsW-J_VpB3f5c"
              title="YouTube Playlist"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* Video Grid */}
        <div className="mt-14 flex-col-1 md:flex items-center justify-center md:gap-9">
          {/* 1 Frame */}
          {/* <div className="rounded-2xl overflow-hidden">
            <iframe
              className="w-full h-[293px]"
              src="https://www.youtube.com/embed/Bof8UqszP54?si=dzwQsW-J_VpB3f5c"
              title="YouTube Playlist"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> */}
          {/* 2nd Frame */}
          {/* <div className="rounded-2xl overflow-hidden ">
            <iframe
              className="w-full h-[293px]"
              src="https://www.youtube.com/embed/Bof8UqszP54?si=dzwQsW-J_VpB3f5c"
              title="YouTube Playlist"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> */}
          {/* 3rd Frame */}
          {/* <div className="rounded-2xl overflow-hidden ">
            <iframe
              className="w-full h-[293px]"
              src="https://www.youtube.com/embed/Bof8UqszP54?si=dzwQsW-J_VpB3f5c"
              title="YouTube Playlist"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
