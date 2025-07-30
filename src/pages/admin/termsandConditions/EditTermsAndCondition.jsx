import { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';

const EditTermAndCondition = () => {
      const editor = useRef(null);

  const [content, setContent] = useState('     Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  return (
    <div className="admin-page">   <div className=" mb-6 lg:flex justify-between">
       <div>
           <h2 className="text-4xl font-semibold ">Terms and Conditions</h2>
          <p className="text-[#6D717F] self-stretch  text-base font-medium mt-1">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p> 

       </div>
            <div className="mt-4 lg:mt-0">

          
          <button to={"/admin-dashboard/admin-privacy-policy/edit-privacy-policy"} className="bg-[#131927] text-white px-7 py-2 text-base font-semibold rounded-md">
           Save & Change
          </button></div>
        </div>
    
       <JoditEditor
            className="border-none "
            ref={editor}
            value={content}
            config={{ height: 550, theme: 'light', readonly: false }}
            onBlur={(newContent) => setContent(newContent)}
          /></div>
  )
}

export default  EditTermAndCondition