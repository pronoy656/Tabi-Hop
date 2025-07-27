import MoodBoardGallarey from "../../../components/MoodBoardGallarey"
import PrimaryButton from "../../../components/shared/PrimaryButton"
import SeconderyButton from "../../../components/shared/SeconderyButton"
import SectionHeader from "../../../components/shared/SectionHeader"


const MoodBoard = () => {

  return (
    <div className="page">

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4">
            <div className="flex flex-col space-y-4">
                  <SeconderyButton text={'Hair Transplant'} shadow={'#2DAD9D'}></SeconderyButton>
                  <SeconderyButton text={'Hair Transplant'} shadow={'#2DAD9D'}></SeconderyButton>
            
            </div>
            <div className="flex flex-col space-y-4">
                <SeconderyButton text={'Hair Transplant'} shadow={'#6E67D5'}></SeconderyButton>
                <SeconderyButton text={'Hair Transplant'} shadow={'#6E67D5'}></SeconderyButton>
            
            </div>
            <div className="flex flex-col space-y-4">
                <SeconderyButton text={'Hair Transplant'} shadow={'#E66CE5'}></SeconderyButton>
                <SeconderyButton text={'Hair Transplant'} shadow={'#E66CE5'}></SeconderyButton>
            
            </div>
            <div className="flex flex-col space-y-4">
                <SeconderyButton text={'Hair Transplant'} shadow={'#FCB0BA'}></SeconderyButton>
                <SeconderyButton text={'Hair Transplant'} shadow={'#FCB0BA'}></SeconderyButton>
            
            </div>
              
        </div>
<MoodBoardGallarey/>




    </div>
  )
}

export default MoodBoard