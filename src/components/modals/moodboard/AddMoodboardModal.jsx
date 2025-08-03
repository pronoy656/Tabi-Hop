import { useForm } from "react-hook-form";
import ModalHeader from "../ModalHeader";
import { useEffect, useState } from "react";

const AddMoodboardModal = ({ isOpen, onClose, setMoodBoards }) => {
  const { register, handleSubmit, reset } = useForm();
  const [heroPreview, setHeroPreview] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);

 const onSubmit = (data) => {
  const newMoodBoard = {
    hero: heroPreview || "", // fallback to empty string if no preview
    title: data.title,
    media: mediaPreview || "",
    location: data.location,
    summary: data.summary,
    socialLink1: data["socialLink-1"],
    socialLink2: data["socialLink-2"],
    socialLink3: data["socialLink-3"],
  };

  // Add new moodboard to the state
  setMoodBoards((prev) => [...prev, newMoodBoard]);

  console.log("New MoodBoard Added:", newMoodBoard);

  reset();
  setHeroPreview(null);
  setMediaPreview(null);
  onClose();
};


  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-black/30 p-2 md:p-6"
    >
      <div className="bg-white rounded-2xl p-6 md:p-12 w-[90%] max-w-3xl shadow-xl max-h-[90vh] noscrollbar overflow-y-auto">
        {/* header */}
        <ModalHeader
          title={"Create Moodboard"}
          subTitle={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
          {/* Hero Image */}
          <div>
            <label className="block label-class">Hero Image</label>
            <div className="relative w-full">
              <div className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-[13px] pr-[90px] text-[#9EA2AE]">
                upload JPG format
              </div>
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1 bg-gray-200 text-[#212936] font-semibold rounded-md transition"
                onClick={() => document.getElementById("hero-upload").click()}
              >
                Upload
              </button>
              <input
                {...register("hero")}
                type="file"
                id="hero-upload"
                accept=".jpg,.jpeg"
                className="hidden form-input"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const previewUrl = URL.createObjectURL(file);
                    setHeroPreview(previewUrl);
                    console.log("Uploaded file:", file);
                  }
                }}
              />
            </div>
            {heroPreview && (
              <img
                src={heroPreview}
                alt="Hero Preview"
                className="mt-2 rounded-lg border border-gray-200 max-h-32 object-contain"
              />
            )}
          </div>

          {/* Title */}
          <div>
            <label className="label-class">Title</label>
            <input
              {...register("title")}
              type="text"
              required
              placeholder="Write here"
              className="form-input pr-10"
            />
          </div>

          {/* Location */}
          <div>
            <label className="label-class">Location</label>
            <div className="relative">
              <input
                {...register("location")}
                type="text"
                required
                placeholder="Head southwest on 5th Ave toward E 41st St"
                className="form-input pr-10"
              />
              <img
                src="/input.png"
                alt=""
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
              />
            </div>
          </div>

          {/* Add Media */}
          <div>
            <label className="label-class">Add Media</label>
            <div className="relative">
              <input
                {...register("media")}
                type="file"
                required
                accept="image/*"
                className="form-input pr-10 cursor-pointer"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const previewUrl = URL.createObjectURL(file);
                    setMediaPreview(previewUrl);
                    console.log("Uploaded media:", file);
                  }
                }}
              />
              <img
                src="/media1.png"
                alt=""
                className="absolute right-3 top-1/2 cursor-pointer transform -translate-y-1/2 h-5 w-5"
              />
            </div>
            {mediaPreview && (
              <img
                src={mediaPreview}
                alt="Media Preview"
                className="mt-2 rounded-lg border border-gray-200 max-h-32 object-contain"
              />
            )}
          </div>

          {/* Summary */}
          <div>
            <label className="label-class">Summary</label>
            <textarea
              {...register("summary")}
              rows={4}
              placeholder="Write here"
              required
              className="form-input"
            ></textarea>
          </div>

          {/* Social Links */}
          {[1, 2, 3].map((num) => (
            <div key={num}>
              <label className="label-class">{`Social Link 0${num}`}</label>
              <input
                {...register(`socialLink-${num}`)}
                type="text"
                required
                placeholder="Write here"
                className="form-input pr-10"
              />
            </div>
          ))}

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="h-14 w-fit px-6 lg:px-28 py-2 bg-[#4ABBC6] rounded-xl text-black text-lg font-semibold transition hover:bg-[#86d0d6]"
            >
              Create MoodBoard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMoodboardModal;
