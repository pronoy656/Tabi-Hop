import TimelineSection from "./TimelineSection";

const DetailsDestination = () => {
  return (
    <div className="page">
      <section>
        <div className="md:flex justify-between items-center ">
          <h2 className="font-semibold pt-3 text-2xl mb-4 text-[#131927]">
            Day 01 : October 5th, 2025
          </h2>{" "}

          <button className="bg-white px-4 py-3 text-lg font-medium rounded-lg flex items-center gap-x-1 ">Add Favourite <img src="/heart.png" className="w-6 object-contain" alt="" /></button>
          
        </div>

        <div className="flex flex-col lg:flex-row gap-4 my-4">
          {/* LEFT SECTION */}
          <div className="bg-white p-6 rounded-xl w-full border border-gray-300 lg:w-2/3 space-y-4">
            {/* Image Grid */}
           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-rows-2 gap-2 h-auto lg:h-[600px]">
  <div className="col-span-1">
    <img
      className="w-full h-full object-cover"
      src="/itirenary.png"
      alt=""
    />
  </div>

  <div className="col-span-1">
    <img
      className="w-full h-full object-cover"
      src="/itirenary2.png"
      alt=""
    />
  </div>

  <div className="col-span-2 sm:col-span-1 lg:row-span-2">
    <img
      className="w-full h-full object-cover"
      src="/iterenary.jpg"
      alt=""
    />
  </div>

  <div className="col-span-2">
    <img
      className="w-full h-full object-cover px-2 sm:px-4"
      src="/bookingCard.png"
      alt=""
    />
  </div>
</div>


            {/* Description */}
            <h2 className="text-xl font-semibold text-[#131927]">
              Self-Care Solo Day and a visit to Totoro in Mitaka
            </h2>
            <p className="text-[#4D5461] text-md leading-relaxed">
              You deserve some TLC girl! Chill at the coffee shop and journal
              away.
              <br />
              I love the thrift stores in Kichijoji! Be sure to leave some time
              to wander around.
              <br />
              Kichijoji is known for hole-in-the-walls shops.
              <br />
              -<br />-<br />-<br />
            </p>

            {/* Hashtags */}
            <div className="text-md text-gray-500 mt-2">
              #ghiblimuseum #kichijoji #coffee #cutecafes #hairsalons
              #thriftshopping
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="bg-white p-6 rounded-xl w-full lg:w-1/3 border border-gray-300">
            <h3 className="text-[#EC1E79] font-semibold my-4 text-xl ">
              Day 01 - Itinerary Plan
            </h3>
            <div className="relative pl-6">
              {/* Vertical Line */}
              <div className="absolute left-[6px] top-1 w-[2px] h-full bg-[#FF6A00] rounded-full z-0" />

              {/* Steps */}
              {[
                {
                  title:
                    "New York Public Library - Stephen A. Schwarzman Building",
                  desc: "476 5th Ave, New York, NY 10018, USA",
                },
                {
                  title: "Head southwest on 5th Ave toward E 41st St",
                  desc: "0.2 mi",
                },
                { title: "Turn left onto E 36th St", desc: "0.9 mi" },
                {
                  title: "Turn right at the 2nd cross street onto Park Ave",
                  desc: "0.2 mi",
                },
                { title: "Continue onto Union Square E", desc: "0.2 mi" },
                { title: "Continue onto Broadway", desc: "320 ft." },
                {
                  title: "Continue straight to stay on Broadway",
                  desc: "1.5 mi",
                },
                { title: "Turn right onto Thomas St", desc: "0.1 mi" },
                { title: "52 Thomas Street", desc: "New York, NY 10013, USA" },
                { title: "52 Thomas Street", desc: "New York, NY 10013, USA" },
              ].map((step, index) => (
                <div key={index} className="mb-8 relative z-10">
                  <div className="w-4 h-4 bg-[#FF6A00] rounded-full absolute -left-6 top-1" />
                  <div className="font-medium text-lg text-[#131927]">
                    {step.title}
                  </div>
                  <div className="text-gray-500 text-xs">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TimelineSection />

      <div className="flex flex-col gap-y-6 md:flex-row gap-x-10 justify-center items-center my-2" >

      <div className="relative">
  <button
    className="
      flex items-center justify-center gap-2
      bg-white text-black rounded-full
      px-6 py-2 border-[3px] border-black font-semibold
      w-[250px] relative z-20
    "
    style={{
      boxShadow: `0px 6px 0 0 #4ABBC6`,
    }}
  >
    <div className="bg-[#4ABBC6] p-1.5 rounded-full flex items-center justify-center">
      <img
        src="/magic2.png"
        alt="star"
        className="h-4 w-4 object-contain"
      />
    </div>
    Generate again
  </button>
</div>
      <div className="relative">
  <button
    className="
      flex items-center justify-center gap-2
      bg-white text-black rounded-full
      px-6 py-2 border-[3px] border-black font-semibold
      w-[250px] relative z-20
    "
    style={{
      boxShadow: `0px 6px 0 0 #4ABBC6`,
    }}
  >
    <div className="bg-[#4ABBC6] p-1.5 rounded-full flex items-center justify-center">
      <img
        src="/edit2.png"
        alt="star"
        className="h-4 w-4 object-contain"
      />
    </div>
Finalize Itinerary
  </button>
</div>
      </div>



    </div>
  );
};

export default DetailsDestination;
