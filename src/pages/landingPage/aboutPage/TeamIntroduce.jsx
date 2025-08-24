import React from 'react';

const TeamIntroduce = () => {
  return (
    <div className="lg:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 lg:mb-22">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-gray-900 mb-4">
            Meet our <span className="text-[#E66CE5]">team</span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl font-normal">
            The creators of the travel algorithm
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 sm:gap-8 lg:gap-16 max-w-6xl mx-auto">
          {/* Cyber Bunny Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 [box-shadow:6px_6px_15px_#BAB7E8]">
            {/* Quote Mark */}

            <div className="text-center mb-6">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="/Bunny's-picture.png"
                  alt="Cyber Bunny"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-pink-500 mb-1">
                Cyber Bunny
              </h3>
              <p className="text-blue-600 font-medium text-sm sm:text-base">
                Chief Executive Officer
              </p>
            </div>

            <p className="text-gray-700 text-sm sm:text-sm md:text-base leading-relaxed font-medium text-center">
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
          <div className="bg-white rounded-3xl p-6 sm:p-8 [box-shadow:6px_6px_15px_#BAB7E8]">
            {/* Quote Mark */}

            <div className="text-center mb-6">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="/Kaine headshot tabihop.jpg"
                  alt="Kaine Usher"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 mb-1">
                Kaine Usher
              </h3>
              <p className="text-[#61A1AE] font-medium text-sm sm:text-base">
                Chief Executive Officer
              </p>
            </div>

            <p className="text-gray-700 text-sm sm:text-sm md:text-base leading-relaxed font-medium text-center">
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
