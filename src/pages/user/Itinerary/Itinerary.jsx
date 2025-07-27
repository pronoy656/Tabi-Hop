import { Link } from "react-router-dom"
import PrimaryButton from "../../../components/shared/PrimaryButton"
import SectionHeader from "../../../components/shared/SectionHeader"
import { ItineraryCard } from "../../../components/ItineraryCard";


const Itinerary = () => {
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

  return (
    <div className="page ">
       

       <div className="md:flex justify-between items-center">
        <SectionHeader
          title="Trending Itinerary"
          subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
        />
        <Link to={'/itinerary/create-itinerary'} >
          <PrimaryButton bgColor={'#4ABBC6'} text={'Create Itinerary'} /></Link>
       </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
                 {itineraryData.map((item, idx) => (
                   <ItineraryCard key={idx} {...item} />
                 ))}
               </div>

    </div>
  )
}

export default Itinerary