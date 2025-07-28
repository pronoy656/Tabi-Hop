
import CalendarCard from "../../../components/CalenderCard";
import ReminderCard from "../../../components/ReminderCard";
import SectionHeader from "../../../components/shared/SectionHeader";
import PrimaryButton from "../../../components/shared/PrimaryButton";
import TodoCard from "../../../components/TodoCard";
import BucketCard from "../../../components/BucketCard";
import { ItineraryCard } from "../../../components/ItineraryCard";
import BookingGallery from "../../../components/BookingGallary";
import BookingsTodoCard from "../../../components/BookingsTodoCard";
import BookingsTodoCardTwo from "../../../components/BookingsTodoCardTwo";
import BookingsTodoCardThree from "../../../components/BookingsTodoCardThree";
import { BookingOverviewCard } from "../../../components/BookingOverviewCard";

const todoGroups = [
  {
    title: "Sky Diving",
    todos: [
      {
        id: 1,
        title: "Design login page UI",
        completed: false,
        priority: "High",
      },
      {
        id: 2,
        title: "Fix cart functionality bug",
        completed: true,
        priority: "Medium",
      },
      {
        id: 1,
        title: "Design login page UI",
        completed: false,
        priority: "High",
      },
      {
        id: 2,
        title: "Fix cart functionality bug",
        completed: true,
        priority: "Medium",
      },
      {
        id: 1,
        title: "Design login page UI",
        completed: false,
        priority: "High",
      },
      {
        id: 2,
        title: "Fix cart functionality bug",
        completed: true,
        priority: "Medium",
      },
    ],
  },
  {
    title: "Bug Hunt",
    todos: [
      {
        id: 3,
        title: "Update dashboard layout",
        completed: false,
        priority: "Low",
      },
      {
        id: 4,
        title: "Deploy Firebase backend",
        completed: true,
        priority: "High",
      },
      {
        id: 3,
        title: "Update dashboard layout",
        completed: false,
        priority: "Low",
      },
      {
        id: 4,
        title: "Deploy Firebase backend",
        completed: true,
        priority: "High",
      },
      {
        id: 3,
        title: "Update dashboard layout",
        completed: false,
        priority: "Low",
      },
      {
        id: 4,
        title: "Deploy Firebase backend",
        completed: true,
        priority: "High",
      },
    ],
  },
  {
    title: "Sprint Goals",
    todos: [
      {
        id: 5,
        title: "Test Stripe integration",
        completed: false,
        priority: "High",
      },
      {
        id: 6,
        title: "Write unit tests",
        completed: false,
        priority: "Medium",
      },
      {
        id: 5,
        title: "Test Stripe integration",
        completed: false,
        priority: "High",
      },
      {
        id: 6,
        title: "Write unit tests",
        completed: false,
        priority: "Medium",
      },
      {
        id: 5,
        title: "Test Stripe integration",
        completed: false,
        priority: "High",
      },
      {
        id: 6,
        title: "Write unit tests",
        completed: false,
        priority: "Medium",
      },
    ],
  },
];
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

const Overview = () => {
  return (
    <div className="page ">
      {/* Overview Section */}
      <section className="mb-8 mx-auto">
        <SectionHeader
          title="Overview"
          subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
        />
        <div className="grid md:grid-cols-6 gap-4 mx-auto border">
          <CalendarCard />
          <ReminderCard />
        </div>
      </section>

      {/* To-do List Section */}
      <section>
        <div className="flex justify-between items-center mb-2">
          <div>
            <SectionHeader
              title="To-do List"
              subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
            />
          </div>

          <PrimaryButton text={"Add more"} bgColor={"#e65ceb"} />
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {todoGroups.map((group, idx) => (
            <TodoCard key={idx} title={group.title} todos={group.todos} />
          ))}
        </div>
      </section>
      {/* Bucket List Section */}

      <section>
        <div className="flex justify-between items-center mb-2">
          <SectionHeader
            title="Bucket List"
            subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
          />
          <PrimaryButton
            text={"Add more"}
            bgColor={"#6E67D5"}
            textColor="white"
          />
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {todoGroups.map((group, idx) => (
            <BucketCard key={idx} title={group.title} todos={group.todos} />
          ))}
        </div>
      </section>

      {/* Trending Itinerary Section */}
      <section>
        <div className="flex justify-between items-center mb-2">
          <SectionHeader
            title="Trending Itinerary"
            subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
          />
          <PrimaryButton
            text={"Add more"}
            bgColor={"#4796B5"}
            textColor="white"
          />
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {itineraryData.map((item, idx) => (
            <ItineraryCard key={idx} {...item} />
          ))}
        </div>
      </section>

      {/* BookingsTodo Section*/}
      <section>
        <div className="flex justify-between items-center mb-2">
          <SectionHeader
            title="Bookings"
            subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
          />
          <PrimaryButton
            text={"Add more"}
            textColor="white"
            bgColor={"#EE443F"}
          />
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {todoGroups.map((group, idx) => (
            <BookingsTodoCard
              key={idx}
              title={group.title}
              todos={group.todos}
            />
          ))}

      
        </div>
      </section>

      {/* BookingsTodo Two Section*/}
      <section>
        <div className="flex justify-between items-center mb-2">
          <SectionHeader
            title="Bookings"
            subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
          />
          <PrimaryButton text={"Add more"} bgColor={"#FFAA00"} />
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {todoGroups.map((group, idx) => (
            <BookingsTodoCardTwo
              key={idx}
              title={group.title}
              todos={group.todos}
            />
          ))}
        </div>
      </section>

      {/* Booking Itinerary Section */}
      <section>
        <div className="flex justify-between items-center mb-2">
          <SectionHeader
            title="Bookings"
            subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
          />
          <PrimaryButton text={"Add more"} bgColor={"#FCB0BA"} />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <BookingOverviewCard
            title="Mercure Tokyo Haneda Airport"
            location="Ota Ward, Tokyo"
            image="https://i.ibb.co/Pvs6yxF6/Frame.png"
            rating={3}
            description="Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here', making it look like readable English."
          />
          <BookingOverviewCard
            title="Mercure Tokyo Haneda Airport"
            location="Ota Ward, Tokyo"
            image="https://i.ibb.co/Pvs6yxF6/Frame.png"
            rating={3}
            description="Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here', making it look like readable English."
          />
          <BookingOverviewCard
            title="Mercure Tokyo Haneda Airport"
            location="Ota Ward, Tokyo"
            image="https://i.ibb.co/Pvs6yxF6/Frame.png"
            rating={3}
            description="Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here', making it look like readable English."
          />
          <BookingOverviewCard
            title="Mercure Tokyo Haneda Airport"
            location="Ota Ward, Tokyo"
            image="https://i.ibb.co/Pvs6yxF6/Frame.png"
            rating={3}
            description="Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here', making it look like readable English."
          />
        </div>
      </section>
      {/* BookingsTodo Three Section*/}
      <section>
        <div className="flex justify-between items-center mb-2">
          <SectionHeader
            title="Bookings"
            subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
          />
          <PrimaryButton text={"Add more"} bgColor={"#E66CE5"} />
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {todoGroups.map((group, idx) => (
            <BookingsTodoCardThree
              key={idx}
              title={group.title}
              todos={group.todos}
            />
          ))}
        </div>
      </section>

      {/* Booking  Gallery Section*/}
      <section>
        <div className="flex justify-between items-center mb-2">
          <SectionHeader
            title="Bookings"
            subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
          />
          <PrimaryButton text={"Add more"} bgColor={"#FCB0BA"} />
        </div>
        <BookingGallery />
      </section>
    </div>
  );
};

export default Overview;
