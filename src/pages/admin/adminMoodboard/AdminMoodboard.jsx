import { useState } from "react"

import SeconderyButton from "../../../components/shared/SeconderyButton";

import AddMoodboardModal from "../../../components/modals/moodboard/AddMoodboardModal";
import { Link } from "react-router-dom";
import AdminMoodBoardGallery from "./AdminMoodBoardGallarey";


const AdminMoodBoard = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);
  const [moodBoards,setMoodBoards] = useState([

  { hero: "/moodboard/moodboard1.png", title: "Hello Cyber Bunny" ,media:"/iterenary.jpg,",location:"Head southwest on 5th Ave toward E 41st St",summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.",socialLink1:"facebook",socialLink2:"facebook",socialLink3:"facebook"},
  { hero: "/moodboard/moodboard-2.png", title: "Hello Cyber Bunny" ,media:"/iterenary.jpg,",location:"Head southwest on 5th Ave toward E 41st St",summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.",socialLink1:"facebook",socialLink2:"facebook",socialLink3:"facebook"},
  { hero: "/moodboard/moodboard-3.png", title: "Hello Cyber Bunny" ,media:"/iterenary.jpg,",location:"Head southwest on 5th Ave toward E 41st St",summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.",socialLink1:"facebook",socialLink2:"facebook",socialLink3:"facebook"},
  { hero: "/moodboard/moodboard-4.png", title: "Hello Cyber Bunny" ,media:"/iterenary.jpg,",location:"Head southwest on 5th Ave toward E 41st St",summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.",socialLink1:"facebook",socialLink2:"facebook",socialLink3:"facebook"},

 
]);
  return (
    <div className="admin-page">

  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5 gap-4">
        <div>
          <p className="text-xl sm:text-2xl font-semibold">User management</p>
          <p className="text-sm sm:text-base text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>

        {/* <Link to={'/admin-dashboard/admin-itinerary/create-itinerary'} className="bg-[#131927] text-white px-6 py-2.5 rounded-md text-sm w-full sm:w-auto">
          + Add New Itinerary
        </Link> */}
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


<AdminMoodBoardGallery moodBoards={moodBoards}/>


      <AddMoodboardModal setMoodBoards={setMoodBoards} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  )
}

export default AdminMoodBoard