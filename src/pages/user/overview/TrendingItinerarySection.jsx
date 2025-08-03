import { useState } from "react";
import { ItineraryCard } from "../../../components/ItineraryCard";
import PrimaryButton from "../../../components/shared/PrimaryButton";
import SectionHeader from "../../../components/shared/SectionHeader";

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
        <PrimaryButton
          text="Add more"
          bgColor="#4796B5"
          textColor="white"
        />
      </div>

      {/* Small screen layout */}
      <div className="block md:hidden">
        <div className="grid sm:grid-cols-1 gap-4">
          {displayedItems.map((item, idx) => (
            <ItineraryCard key={idx} {...item} />
          ))}
        </div>

        {/* See All / See Less button */}
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-white border border-[#4E61F6] text-[#4E61F6] rounded-lg font-semibold transition-colors hover:bg-[#4E61F6] hover:text-white"
          >
            {showAll ? "See Less" : "See All"}
          </button>
        </div>
      </div>

      {/* Large screen layout */}
      <div className="hidden md:block">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {itineraryData.map((item, idx) => (
            <ItineraryCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingItinerarySection;
