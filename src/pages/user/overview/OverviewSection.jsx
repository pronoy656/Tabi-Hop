import CalendarCard from "../../../components/CalenderCard"
import ReminderCard from "../../../components/ReminderCard"
import SectionHeader from "../../../components/shared/SectionHeader"


const OverviewSection = () => {
  return (
    <section className="mb-8 mx-auto">
        <SectionHeader
          title="Overview"
          subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
        />
        <div className="grid md:grid-cols-6 gap-0 md:gap-8 gap-y-4 md:gap-y-0 mx-auto ">
          <CalendarCard />
          <ReminderCard />
        </div>
      </section>
  )
}

export default OverviewSection