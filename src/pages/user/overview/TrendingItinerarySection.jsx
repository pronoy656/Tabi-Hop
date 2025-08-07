import { useState } from "react";
import { ItineraryCard } from "../../../components/ItineraryCard";
import PrimaryButton from "../../../components/shared/PrimaryButton";
import SectionHeader from "../../../components/shared/SectionHeader";
import { Link } from "react-router-dom";

const TrendingItinerarySection = () => {
  const [showAll, setShowAll] = useState(false);

  const itineraryData = [
    {
      day: 1,
      date: "August 1st, 2025",
      title: "The Great Osaka Tower - Suzuki Maruti of Heights",
      description:
        "Explore Paris' most iconic landmark and enjoy panoramic views of the city.",
      image: "/iterenary.jpg",
    },
    {
      day: 2,
      date: "August 2nd, 2025",
      title: "Tokyo Skytree Exploration",
      description:
        "Enjoy the tallest tower in Japan with a glass-floor skywalk experience.",
      image: "/iterenary.jpg",
    },
    {
      day: 3,
      date: "August 3rd, 2025",
      title: "Kyoto Cultural Walk",
      description:
        "Experience shrines, temples, and geisha traditions in Gion district.",
      image: "/iterenary.jpg",
    },
    {
      day: 4,
      date: "August 3rd, 2025",
      title: "Kyoto Cultural Walk",
      description:
        "Experience shrines, temples, and geisha traditions in Gion district.",
      image: "/iterenary.jpg",
    },
  ];

  const displayedItems = showAll ? itineraryData : itineraryData.slice(0, 1);

  return (
    <section>
      {/* Section Header */}
      <div className="md:flex justify-between items-center mb-4">
        <SectionHeader
          title="Trending Itinerary"
          subtitle="Explore the most popular itineraries and start planning your next adventure."
        />
        <Link to={'/itinerary/create-itinerary'} className="hidden sm:flex">
        <PrimaryButton
          text="Add more"
          bgColor="#4796B5"
          textColor="white"
        /></Link>
      </div>

      {/* Small screen layout */}
      <div className="block sm:hidden">
        <div className="grid sm:grid-cols-1 gap-4">
          {displayedItems.map((item, idx) => (
            <ItineraryCard key={idx} {...item} />
          ))}
        </div>

        {/* See All / See Less button */}
        <div className=" mt-4 text-center sm:hidden  items-center flex justify-center gap-x-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-white border border-[#4796B5] text-[#4796B5] rounded-lg font-semibold transition-colors hover:bg-[#4796B6] hover:text-white"
          >
            {showAll ? "See Less" : "See All"}
          </button>
           <Link to={'/itinerary/create-itinerary'}  className="" onClick={() => setIsModalOpen(true)}>
            <PrimaryButton
              round
              bgColor="#4796B5"
              text="Add more"
              textColor="white"
            />
          </Link>
        </div>
      </div>

      {/* Large screen layout */}
      <div className="hidden sm:block">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {itineraryData.map((item, idx) => (
            <ItineraryCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingItinerarySection;
