import { Link } from 'react-router-dom';
import { ItineraryCard } from '../ItineraryCard';
import PrimaryButton from '../shared/PrimaryButton';
import SectionHeader from '../shared/SectionHeader';

const itineraryData = [
  {
    day: 1,
    date: 'August 1st, 2025',
    title: 'The Great Osaka Tower - Suzuki Maruti of Heights',
    description:
      "Explore Paris' most iconic landmark and enjoy panoramic views of the city.",
    image: '/iterenary.jpg',
  },
  {
    day: 2,
    date: 'August 2nd, 2025',
    title: 'Tokyo Skytree Exploration',
    description:
      'Enjoy the tallest tower in Japan with a glass-floor skywalk experience.',
    image: '/iterenary.jpg',
  },
  {
    day: 3,
    date: 'August 3rd, 2025',
    title: 'Kyoto Cultural Walk',
    description:
      'Experience shrines, temples, and geisha traditions in Gion district.',
    image: '/iterenary.jpg',
  },
  {
    day: 4,
    date: 'August 3rd, 2025',
    title: 'Kyoto Cultural Walk',
    description:
      'Experience shrines, temples, and geisha traditions in Gion district.',
    image: '/iterenary.jpg',
  },
  {
    day: 1,
    date: 'August 1st, 2025',
    title: 'The Great Osaka Tower - Suzuki Maruti of Heights',
    description:
      "Explore Paris' most iconic landmark and enjoy panoramic views of the city.",
    image: '/iterenary.jpg',
  },
  {
    day: 2,
    date: 'August 2nd, 2025',
    title: 'Tokyo Skytree Exploration',
    description:
      'Enjoy the tallest tower in Japan with a glass-floor skywalk experience.',
    image: '/iterenary.jpg',
  },
  {
    day: 3,
    date: 'August 3rd, 2025',
    title: 'Kyoto Cultural Walk',
    description:
      'Experience shrines, temples, and geisha traditions in Gion district.',
    image: '/iterenary.jpg',
  },
  {
    day: 4,
    date: 'August 3rd, 2025',
    title: 'Kyoto Cultural Walk',
    description:
      'Experience shrines, temples, and geisha traditions in Gion district.',
    image: '/iterenary.jpg',
  },
];

const AllIterenaryTab = () => {
  return (
    <section className="">
      <div>
        <div className="mb-2">
          <SectionHeader
            title="My Workspace"
            subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
          />

          <div className="h-66 flex flex-col justify-center items-center  p-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center">
              Oops! You don’t have any Itinerary yet
            </h2>
            <p className="text-gray-500 mb-6 text-center text-sm md:text-base">
              Start planning your journey by creating your first itinerary.
            </p>
          </div>
        </div>
      </div>

      <SectionHeader
        title="Bunny’s All Iterenary"
        subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
      />

      <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 gap-x-12 ">
        {itineraryData.map((item, idx) => (
          <ItineraryCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};

export default AllIterenaryTab;
