import { Link } from "react-router-dom"
import PrimaryButton from "../../../components/shared/PrimaryButton"
import SectionHeader from "../../../components/shared/SectionHeader"


const Itinerary = () => {
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

    </div>
  )
}

export default Itinerary