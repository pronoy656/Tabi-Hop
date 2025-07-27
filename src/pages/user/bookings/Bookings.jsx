import BookingCard from "../../../components/bookings/BookingCard";
import PrimaryButton from "../../../components/shared/PrimaryButton"
import SectionHeader from "../../../components/shared/SectionHeader"


const Bookings = () => {
    const bookings = [
  {
    id: 1,
    image: "/accommodation.png",
    title: "Mercure Tokyo Haneda Airport",
    location: "Ota Ward, Tokyo",
    stars: 3,
    checkIn: "20th May, 2025 – 10:23 AM",
    checkOut: "25th May, 2025 – 10:23 AM",
    contact: "+652 552 5855",
    note: `Lorem Ipsum is that it has a more-or-less normal distribution of
    letters, as opposed to using 'Content here, content here', making it
    look like readable English.`,
  },

];
  return (
    <div className="page">

        <div className="flex justify-between items-center mb-2">
          <div>
            <SectionHeader
              title="Bookings"
              subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
            />
          </div>

          <PrimaryButton text={"Add more"} bgColor={"#6E67D5"} textColor="white" />
        </div>

           {bookings.map((acc) => {
        return <BookingCard key={acc.id} acc={acc} />;
      })}
    </div>
  )
}

export default Bookings