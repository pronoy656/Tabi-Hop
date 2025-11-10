
import { Link } from "react-router-dom";

const AdminPrivacyPolicy = () => {
  return (
    <div className="admin-page">
           <div className=" mb-6 lg:flex justify-between">
       <div>
           <h2 className="text-4xl font-semibold ">Privacy Policy's</h2>
          <p className="text-[#6D717F] self-stretch  text-base font-medium mt-1">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p> 

       </div>
            <div className="mt-4 lg:mt-0">

          
          <Link to={"/admin-dashboard/admin-privacy-policy/edit-privacy-policy"} className="bg-[#131927] text-white px-7 py-2 text-base font-semibold rounded-md">
            Edit Details
          </Link></div>
        </div>

        <div className=" bg-[#F3F4F6] rounded-2xl p-12 text-gray-600 text-lg font-medium space-y-8 border border-black/10">
            <div className="self-stretch text-justify justify-start  leading-7 tracking-tight">Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci. Egestas duis id nisl sed ante congue scelerisque. Eleifend facilisis aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis habitant. Imperdiet tincidunt nisl consectetur hendrerit accumsan vehicula imperdiet mattis. Neque a vitae diam pharetra duis habitasse convallis luctus pulvinar. Pharetra nunc morbi elementum nisl magnis convallis arcu enim tortor. Cursus a sed tortor enim mi imperdiet massa donec mauris. Sem morbi morbi posuere faucibus. Cras risus ultrices duis pharetra sit porttitor elementum sagittis elementum. Ut vitae blandit pulvinar fermentum in id sed. At pellentesque non semper eget egestas vulputate id volutpat quis. Dolor etiam sodales at elementum mattis nibh quam placerat ut. Suspendisse est adipiscing proin et. Leo nisi bibendum donec ac non eget euismod suscipit. At ultricies nullam ipsum tellus. Non dictum orci at tortor convallis tortor suspendisse. Ac duis senectus arcu nullam in suspendisse vitae. Tellus interdum enim lorem vel morbi lectus.</div>
            <div className="self-stretch text-justify justify-start   leading-7 tracking-tight">Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci. Egestas duis id nisl sed ante congue scelerisque. Eleifend facilisis aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis habitant. Imperdiet tincidunt nisl consectetur hendrerit accumsan vehicula imperdiet mattis. Neque a vitae diam pharetra duis habitasse convallis luctus pulvinar. Pharetra nunc morbi elementum nisl magnis convallis arcu enim tortor. Cursus a sed tortor enim mi imperdiet massa donec mauris. Sem morbi morbi posuere faucibus. Cras risus ultrices duis pharetra sit porttitor elementum sagittis elementum. Ut vitae blandit pulvinar fermentum in id sed. At pellentesque non semper eget egestas vulputate id volutpat quis. Dolor etiam sodales at elementum mattis nibh quam placerat ut. Suspendisse est adipiscing proin et. </div>

         

        </div>
    </div>
  );
};

export default AdminPrivacyPolicy;
