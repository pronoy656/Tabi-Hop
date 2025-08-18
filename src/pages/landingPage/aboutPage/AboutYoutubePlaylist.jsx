import React from 'react';

const AboutYoutubePlaylist = () => {
  return (
    <div className="max-w-[808px] mx-auto py-20">
      <div className="text-center">
        <p className="text-5xl font-semibold">
          See Your Trip <span className="text-[#E66CE5]">Before You Go</span>
        </p>
        <p className="text-xl font-medium mt-3">
          {' '}
          From flights to adventures, preview your full itinerary in an
          immersive video.
        </p>
      </div>
      <div className="mt-14 rounded-2xl  overflow-hidden w-[800px] h-[450px]">
        <iframe
          width="800"
          height="450"
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
