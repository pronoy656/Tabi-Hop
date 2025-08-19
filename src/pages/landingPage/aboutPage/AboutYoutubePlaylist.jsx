import React from 'react';

const AboutYoutubePlaylist = () => {
  return (
    <div className="max-w-[838px] w-full mx-auto py-12 px-4">
      <div className="text-center">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          We trained the algorithm{' '}
          <span className="text-[#E66CE5]">to think like us</span>
        </p>
        <p className="text-base sm:text-lg md:text-xl font-medium mt-3">
          {' '}
          From flights to adventures, preview your full itinerary in an
          immersive video.
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

export default AboutYoutubePlaylist;
