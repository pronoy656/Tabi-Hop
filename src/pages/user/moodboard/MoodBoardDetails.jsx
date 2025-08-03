import BookingGallery from "../../../components/BookingGallary";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MoodBoardDetails = () => {
  const defaultProps = {
    center: {
      lat: 10.99835702,
      lng: 77.01502727,
    },
    zoom: 11,
  };
  return (
    <div className="page">
      <div className="flex justify-between">
        <h1 className="text-xl md:text-2xl font-semibold">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Ipsum has been the industry's standard dummy text ever since
          the 1500s,
        </h1>{" "}
        <img src="/dots.png" className="h-8" alt="" />
      </div>
      <div
        className="h-97 w-full rounded-2xl my-4"
        style={{
          backgroundImage: "url('/moodboard-gaalery.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1></h1>
      </div>

      <div className="space-y-3 my-2">
        <h1 className="text-2xl font-semibold">Summary</h1>
        <p className="text-[#7D717F]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1970s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>

      <div className="space-y-1 mt-4">
        <h1 className="text-2xl font-semibold">Gallery Section</h1>
        <p className="text-[#7D717F]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page.
        </p>

        <BookingGallery />
      </div>
      {/* Google Map */}
      <div>
        <section className="my-[10px]">
          <h1 className="text-2xl font-semibold">View Location</h1>
          <p className="text-[#7D717F]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </p>
          <div className="w-full h-[400px] border-2 border-[#9EA2AE] rounded-xl mt-8">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAP_API_KEY" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={10.99835702}
                lng={77.01502727}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </section>
      </div>

      <div className="bg-[#4ABBC7] rounded-2xl p-4 md:p-8 lg:p-12 my-8 ">
        <h1 className="text-3xl font-semibold text-[#FFFFFF]">
          Contact Information
        </h1>
        <p className="text-[#FFFFFF]">Say something to start a live chat!</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center mx-2 lg:mx-10">
          <div className="w-full text-white flex flex-col justify-center items-start gap-4 space-y-4 mx-auto p-2 md:p-4 xl:p-0">
            <div className="flex items-start gap-4">
              <img src="/phone-call.png" alt="Phone" className="w-7 h-7" />
              <span className="">+1012 3457 789</span>
            </div>

            <div className="flex items-start gap-4">
              <img src="/email.png" alt="Email" className="w-7 h-7" />
              <span className="">demo@gmail.com</span>
            </div>

            <div className="flex items-start gap-4">
              <img
                src="/location-fill.png"
                alt="Location"
                className="w-7 h-7 "
              />
              <span className=" leading-5">
                132 Dartmouth Street Boston, <br />
                Massachusetts 02157 United States
              </span>
            </div>
          </div>

         <div className="w-full text-white flex flex-col items-start space-y-4 gap-4 p-2 md:p-4 xl:p-0">
  <div className="flex items-center  gap-4">
    <img src="/twitter.png" alt="Twitter" className="w-7 h-7 mb-[2px]" />
    <span className="">@dad.twitter.com</span>
  </div>

  <div className="flex items-center gap-4">
    <img src="/instagram.png" alt="Instagram" className="w-7 h-7" />
    <span className="">@faf12.instagram.com</span>
  </div>

  <div className="flex items-center gap-4">
    <img src="/discord.png" alt="Discord" className="w-7 h-7 " />
    <span className="mt-[1px]">@fwfes.discord.com</span>
  </div>
</div>


          <div className="w-full col-span-1 lg:col-span-2 xl:col-span-1 p-0 md:p-4 xl:p-0">
            <img src="/circle.png" className=" w-[350px] h-[350px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodBoardDetails;
