import { useState } from "react"
import AddMoodboardModal from "../../../components/modals/moodboard/AddMoodboardModal"
import MoodBoardGallarey from "../../../components/MoodBoardGallarey"
import PrimaryButton from "../../../components/shared/PrimaryButton"
import SeconderyButton from "../../../components/shared/SeconderyButton"
import SectionHeader from "../../../components/shared/SectionHeader"


const MoodBoard = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);
  const [moodBoards,setMoodBoards] = useState([

  { hero: "/moodboard/moodboard1.png", title: "Hello Cyber Bunny" ,media:"/iterenary.jpg,",location:"Head southwest on 5th Ave toward E 41st St",summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.",socialLink1:"facebook",socialLink2:"facebook",socialLink3:"facebook"},
  { hero: "/moodboard/moodboard-2.png", title: "Hello Cyber Bunny" ,media:"/iterenary.jpg,",location:"Head southwest on 5th Ave toward E 41st St",summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.",socialLink1:"facebook",socialLink2:"facebook",socialLink3:"facebook"},
  { hero: "/moodboard/moodboard-3.png", title: "Hello Cyber Bunny" ,media:"/iterenary.jpg,",location:"Head southwest on 5th Ave toward E 41st St",summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.",socialLink1:"facebook",socialLink2:"facebook",socialLink3:"facebook"},
  { hero: "/moodboard/moodboard-4.png", title: "Hello Cyber Bunny" ,media:"/iterenary.jpg,",location:"Head southwest on 5th Ave toward E 41st St",summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.",socialLink1:"facebook",socialLink2:"facebook",socialLink3:"facebook"},

 
]);
  return (
    <div className="page">

         <div className="flex justify-between items-center mb-2">
          <SectionHeader
            title="Trending Itinerary"
            subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
          />
          <button  onClick={() => setIsModalOpen(true)}>
          <PrimaryButton
            text={"Add more"}
            bgColor={"#4796B5"}
            textColor="white"
          /></button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 mx-auto mb-12">
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


<MoodBoardGallarey moodBoards={moodBoards}/>


      <AddMoodboardModal setMoodBoards={setMoodBoards} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  )
}

export default MoodBoard