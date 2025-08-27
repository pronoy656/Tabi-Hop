import React from 'react';

const AiVideoTutorial = () => {
  return (
    <div className="max-w-[838px] w-full mx-auto py-18 px-4">
      <div className="text-center">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Work smarter, <span className="text-[#6E67D6]">not harder</span>
        </p>
        <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-black">
          An online tool that was built by a former tour guide & content
          creator. Teaching AI to think like a travel planner. Giving you the
          optimal routes to travel smart. Providing alternative routes and
          flexibility when things don’t work out.
        </p>
      </div>
      <div
        className="mt-14 rounded-2xl overflow-hidden w-full"
        style={{ aspectRatio: '16/9' }}
      >
        <iframe
          className="w-full h-full min-h-[220px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[450px]"
          src="https://www.youtube.com/embed/Bof8UqszP54?si=dzwQsW-J_VpB3f5c"
          title="YouTube Playlist"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default AiVideoTutorial;
