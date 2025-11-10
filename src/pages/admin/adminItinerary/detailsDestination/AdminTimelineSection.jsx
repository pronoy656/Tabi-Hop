
import { Link } from "react-router-dom";

import { ArrowBigRight, ArrowRight } from "lucide-react";
import SeconderyButton from "../../../../components/shared/SeconderyButton";

const timelineSteps = [
  {
    title: "Starting Location",
    images: ["/bookingCard.png", "/itirenary2.png", "/itirenary.png"],
    moreImages: ["/bookingCard.png", "/bookingCard.png", "/iterenary.jpg"],
    locationImage: "/location.png",
    mediaImages: ["/media.png", "/media.png", "/media.png",],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Destination 01",
    images: ["/bookingCard.png", "/itirenary2.png", "/itirenary.png"],
    moreImages: ["/bookingCard.png", "/bookingCard.png", "/iterenary.jpg"],
    locationImage: "/location.png",
    mediaImages: ["/media.png", "/media.png", "/media.png", ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Destination 02",
    images: ["/bookingCard.png", "/itirenary2.png", "/itirenary.png"],
    moreImages: ["/bookingCard.png", "/bookingCard.png", "/iterenary.jpg"],
    locationImage: "/location.png",
    mediaImages: ["/media.png", "/media.png", "/media.png"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Destination 03",
    images: ["/bookingCard.png", "/itirenary2.png", "/itirenary.png"],
    moreImages: ["/bookingCard.png", "/bookingCard.png", "/iterenary.jpg"],
    locationImage: "/location.png",
    mediaImages: ["/media.png", "/media.png", "/media.png",],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Ending Location",
    images: ["/bookingCard.png", "/itirenary2.png", "/itirenary.png"],
    moreImages: ["/bookingCard.png", "/bookingCard.png", "/iterenary.jpg"],
    locationImage: "/location.png",
    mediaImages: ["/media.png", "/media.png", "/media.png"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const AdminTimelineSection = () => {
  return (
    <section className="pt-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {timelineSteps.map((step, index) => {
          const isLast = index === timelineSteps.length - 1;

          return (
            <div key={index} className="relative pl-6 pb-6">
              <div className="flex items-center gap-3 mb-8 relative z-20">
                <div className="w-4 h-4 bg-red-600 rounded-full flex-shrink-0 -ml-6 relative z-30" />
                <SeconderyButton text={step.title} shadow={"#e84d4d"} />
              </div>

              {!isLast && (
                <div
                  className="absolute left-[6px] top-4 w-[4px] bg-red-600 rounded-full z-10"
                  style={{ height: "calc(100% - 2px)" }}
                />
              )}

              {/* Content Grid */}
              <div className="grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 bg-white shadow-md p-6 rounded-lg relative z-20">
                
                {/* Images Section */}
        <div className="col-span-1 lg:col-span-2">
  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-12 gap-2">
    {step.images.map((img, i) => (
      <div
        key={i}
        className={`
          ${i === 0
            ? "col-span-2 sm:col-span-2 lg:col-span-6 h-[125px]"
            : "col-span-1 sm:col-span-1 lg:col-span-3 h-[136px]"
          }
        `}
      >
        <img
          className="w-full h-full object-cover rounded-md"
          src={img}
          alt=""
        />
      </div>
    ))}

    {step.moreImages.map((img, i) => (
      <div
        key={i}
        className="col-span-1 sm:col-span-2 lg:col-span-4 h-[125px]"
      >
        <img
          className="w-full h-full object-cover rounded-md"
          src={img}
          alt=""
        />
      </div>
    ))}
  </div>

  <h2 className="font-bold text-xl mb-1 mt-4">
    The Great Udoka of Manhattan
  </h2>
  <p className="text-sm text-[#6D717F]">{step.description}</p>
</div>



                {/* Location Section */}
                <div className="flex gap-4  col-span-1 lg:col-span-2 ">
                  <div className="flex flex-col items-center">
                    <div className="w-[1px]  bg-gray-300 h-full" />
                  </div>
                  <div className="flex flex-col">
                    <img
                      src={step.locationImage}
                      alt="media"
                      className="h-68 w-fit object-cover rounded-md"
                    />
                    <h3 className="font-semibold text-xl mt-3">Location</h3>
                    <p className="text-xs mt-1 text-[#6D717F]">
                      1123 Any Appartment, Any city, State
                    </p>
                   <Link className="text-base text-blue-500 flex  underline items-center gap-x-1" to={'/'}>view Location <span><ArrowRight size={18}></ArrowRight></span></Link>
                  </div>
                </div>

                {/* Media Section */}
                <div className="flex gap-4 col-span-1 lg:col-span-2 ">
                  <div className="flex flex-col items-center">
                    <div className="w-[1px] bg-gray-300 h-full" />
                  </div>
                  <div className="flex flex-col">
                    <div className="md:flex gap-2">
                      {step.mediaImages.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt="media"
                          className="h-66 md:w-32 object-cover rounded-md"
                        />
                      ))}
                    </div>
                    <h3 className="font-semibold mt-3 text-xl">Media Section</h3>
                    <p className="text-xs mt-1 text-[#6D717F]">
                      1123 Any Appartment, Any city, State
                    </p>
                  </div>
                </div>

                {/* Video Section */}
                <div className="flex gap-4 col-span-1 lg:col-span-2 ">
                  <div className="flex flex-col items-center">
                    <div className="w-[1px] bg-gray-300 h-full" />
                  </div>
                  <div className="flex flex-col w-full">
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Video Frame"
                      className="w-full h-40 md:h-64 rounded-md"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <h3 className="font-semibold mt-3 text-xl">Video Section</h3>
                    <p className="text-xs mt-1 text-[#6D717F]">
                      1123 Any Appartment, Any city, State
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AdminTimelineSection;
