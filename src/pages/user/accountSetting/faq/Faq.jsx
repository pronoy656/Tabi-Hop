
import { useForm } from "react-hook-form";

const Faq = () => {
    const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    reset();
  
  };
;
  return (
    <div className="page p-12">
  {/* header */}
    <div className=" mb-6">
          <h2 className="text-4xl font-semibold ">Frequently Asked Questions</h2>
          <p className="text-[#6D717F]  self-stretch  text-base font-medium mt-1">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        

        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white rounded-2xl p-12 ">
  <div>
    <label className="label-class">
    Subject
    </label>
    <input
      {...register("subject")}
      type="text"
      required
      placeholder="Write Subject here"
      className="form-input"
    />
  </div>



  <div>
    <label className="label-class">
      Problem type
    </label>
    <input
      {...register("problemType")}
      type="text"
      required
      placeholder="Write ProblemType here"
      className="form-input"
    />
  </div>

 

  <div>
    <label className="label-class">Write down the problem you are facing</label>
    <textarea
      {...register("problem")}
      rows={8}
      placeholder="Write Problems here"
      required
      className="form-input"
    ></textarea>
  </div>

  <button
    type="submit"
    className="h-14 px-6 py-4 bg-indigo-500 rounded-xl text-white text-lg font-semibold w-full transition hover:bg-indigo-600"
  >
    Send Mail
  </button>
</form>
      </div>
 
  )
}

export default Faq