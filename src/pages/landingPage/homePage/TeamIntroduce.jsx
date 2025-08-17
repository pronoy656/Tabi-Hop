import React from 'react';

const TeamIntroduce = () => {
  return (
    <div className="min-h-screen py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-28">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-[#E66CE5]">Wonderful</span> Team
          </h1>
          <p className="text-xl font-medium sm:text-xl">
            The creators of the travel algorithm
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
          {/* Cyber Bunny Card */}
          <div className="relative bg-white rounded-3xl p-8 [box-shadow:6px_6px_15px_#FFC0CB]">
            {/* Quote Mark */}
            <div className="absolute -top-9 -right-6 w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center">
              <span className="text-pink-400 text-5xl font-bold">
                {' '}
                <img src="/rabbit.svg" alt="" />
              </span>
            </div>

            <div className="text-center mb-6">
              <div className="w-56 h-56 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="/Bunny's-picture.png"
                  alt="Cyber Bunny"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-pink-500 mb-1">
                Cyber Bunny
              </h3>
              <p className="text-blue-600 font-medium">
                Chief Executive Officer
              </p>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed font-medium text-center">
              Cyber Bunny is the Co-Founder and CEO of TabiHop. She started
              Cyber Bunny Tours in 2023 as a private tour guide, and learned a
              lot about travel tourism, hospitality and guest behavior. She is
              also a content creator since 2019 and travels to film content for
              her social media. Thinking of the script and shots are challenging
              as it is- let alone planning the logistics can be a headache. She
              hopes to make traveling easier and convenient for other content
              creators and visitors when traveling all over Japan.
            </p>
          </div>

          {/* Kaine Usher Card */}
          <div className="relative bg-white rounded-3xl p-8 [box-shadow:6px_6px_15px_#FFC0CB]">
            {/* Quote Mark */}
            <div className="absolute -top-9 -right-6 w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center">
              <span className="text-pink-400 text-5xl font-bold">
                <img src="/rabbit.svg" alt="" />
              </span>
            </div>

            <div className="text-center mb-6">
              <div className="w-56 h-56 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="/Bunny's-picture.png"
                  alt="Kaine Usher"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-1">
                Kaine Usher
              </h3>
              <p className="text-blue-600 font-medium">
                Chief Executive Officer
              </p>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed font-medium text-center">
              Kaine Usher is the Co-Founder and CTO of TabiHop. He earned his M.
              Sc. (2022) and Ph.D. (2025) from XXX in ?, Australia.
              <br />
              <br />
              He has expertise in AI, data mining, and computer science.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamIntroduce;
