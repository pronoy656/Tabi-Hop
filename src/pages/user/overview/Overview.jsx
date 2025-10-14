import SectionHeader from '../../../components/shared/SectionHeader';
import PrimaryButton from '../../../components/shared/PrimaryButton';
import BookingGallery from '../../../components/BookingGallary';
import BookingOverviewCard from '../../../components/AccommodationOverviewCard';
import OverviewSection from './OverviewSection';
import TodoListSection from './TodoListSection';
import BucketListSection from './BucketListSection';
import TrendingItinerarySection from './TrendingItinerarySection';
import PackingListSection from './PackingListSection';
import AccommodationListSection from './BookingListSection';
import AccomodationOverviewCard from '../../../components/AccommodationOverviewCard';
import { Link } from 'react-router-dom';
import BookingListSection from './BookingListSection';

const todoGroups = [
  {
    title: 'Sky Diving',
    todos: [
      {
        id: 1,
        title: 'Design login page UI',
        completed: false,
        priority: 'High',
      },
      {
        id: 2,
        title: 'Fix cart functionality bug',
        completed: true,
        priority: 'Medium',
      },
      {
        id: 1,
        title: 'Design login page UI',
        completed: false,
        priority: 'High',
      },
      {
        id: 2,
        title: 'Fix cart functionality bug',
        completed: true,
        priority: 'Medium',
      },
      {
        id: 1,
        title: 'Design login page UI',
        completed: false,
        priority: 'High',
      },
      {
        id: 2,
        title: 'Fix cart functionality bug',
        completed: true,
        priority: 'Medium',
      },
    ],
  },
  {
    title: 'Bug Hunt',
    todos: [
      {
        id: 3,
        title: 'Update dashboard layout',
        completed: false,
        priority: 'Low',
      },
      {
        id: 4,
        title: 'Deploy Firebase backend',
        completed: true,
        priority: 'High',
      },
      {
        id: 3,
        title: 'Update dashboard layout',
        completed: false,
        priority: 'Low',
      },
      {
        id: 4,
        title: 'Deploy Firebase backend',
        completed: true,
        priority: 'High',
      },
      {
        id: 3,
        title: 'Update dashboard layout',
        completed: false,
        priority: 'Low',
      },
      {
        id: 4,
        title: 'Deploy Firebase backend',
        completed: true,
        priority: 'High',
      },
    ],
  },
  {
    title: 'Sprint Goals',
    todos: [
      {
        id: 5,
        title: 'Test Stripe integration',
        completed: false,
        priority: 'High',
      },
      {
        id: 6,
        title: 'Write unit tests',
        completed: false,
        priority: 'Medium',
      },
      {
        id: 5,
        title: 'Test Stripe integration',
        completed: false,
        priority: 'High',
      },
      {
        id: 6,
        title: 'Write unit tests',
        completed: false,
        priority: 'Medium',
      },
      {
        id: 5,
        title: 'Test Stripe integration',
        completed: false,
        priority: 'High',
      },
      {
        id: 6,
        title: 'Write unit tests',
        completed: false,
        priority: 'Medium',
      },
    ],
  },
];
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
];

const Overview = () => {
  return (
    <div className="px-6">
      {/* Overview Section */}
      <OverviewSection />

      {/* To-do List Section */}
      <TodoListSection />
      {/* Bucket List Section */}

      <BucketListSection />

      {/* Trending Itinerary Section */}

      <TrendingItinerarySection />
      {/* Packing List Section*/}

      <PackingListSection />

      {/* Booking List section  */}
      <BookingListSection />

      {/*Accomodation Section */}
      <section>
        <div className="flex justify-between items-center mb-2">
          <SectionHeader
            title="Accomodation"
            subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
          />
          <Link to="/accommodations" className="hidden sm:flex">
            <PrimaryButton text={'Add more'} bgColor={'#FCB0BA'} />
          </Link>
        </div>

        <AccomodationOverviewCard />
      </section>

      {/* Moodboard  Gallery Section*/}
      <section>
        <div className="flex justify-between items-center mb-2">
          <SectionHeader
            title="Moodboard "
            subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
          />
          <Link to={'/moodboard'}>
            <PrimaryButton text={'See more'} bgColor={'#FCB0BA'} />{' '}
          </Link>
        </div>
        <BookingGallery />
      </section>
    </div>
  );
};

export default Overview;
