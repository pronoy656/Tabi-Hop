
import { Link } from "react-router-dom";
import SeconderyButton from "../shared/SeconderyButton";
import AddDestination from "./AddDestination";

const CreateItinerary = () => {
  const locations = [
    {
      label: "Starting Location",
      title: "New York Public Library – Stephen A. Schwarzman Building",
      address: "476 5th Ave, New York, NY 10018, USA",
    },
    {
      label: "Destination - 01",
      title: "Head southwest on 5th Ave toward E 41st St",
      address: "476 5th Ave, New York, NY 10018, USA",
    },
    {
      label: "Destination - 02",
      title: "Turn left onto E 36th St",
      address: "476 5th Ave, New York, NY 10018, USA",
    },
    {
      label: "Destination - 03",
      title: "Turn left onto E 36th St",
      address: "476 5th Ave, New York, NY 10018, USA",
    },
    {
      label: "Destination - 04",
      title: "Continue onto Union Square E",
      address: "476 5th Ave, New York, NY 10018, USA",
    },
    {
      label: "Destination - 05",
      title: "Continue straight to stay on Broadway",
      address: "476 5th Ave, New York, NY 10018, USA",
    },
    {
      label: "Destination - 06",
      title: "Turn right onto Thomas St",
      address: "476 5th Ave, New York, NY 10018, USA",
    },
    {
      label: "Ending Location",
      title: "Turn right onto Thomas St",
      address: "476 5th Ave, New York, NY 10018, USA",
    },
  ];
  const foodList = [
    {
      title: "Food items",
      items: [
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
      ],
    },
    {
      title: "Food items",
      items: [
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
      ],
    },
    {
      title: "Food items",
      items: [
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
      ],
    },
    {
      title: "Food items",
      items: [
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
      ],
    },
    {
      title: "Food items",
      items: [
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
      ],
    },
    {
      title: "Food items",
      items: [
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
      ],
    },
  ];

  return (
    <div className=" mx-auto px-4 py-6 space-y-8 page">
      {/* step-1 */}
      <section>
        <h2 className="font-semibold text-xl mb-4 text-[#1F4F53]">
          Step - 01 : Basic Information
        </h2>

        <div className=" bg-[#FFFFFF] p-8 rounded-xl shadow-lg">
          <div className="flex justify-between items-center">
            <h1 className="text-xl text-[#1F4F53] font-semibold ">
              How many additional people travelling with you on this day?
            </h1>

            <button className="ml-auto text-xs md:text-lg  font-medium">
              Skip for now
            </button>
          </div>

          <div className="space-y-4 my-4">
            <div className="text-[#1F4F53] flex  gap-x-8 items-center">
              <label className="block font-semibold ">Kids</label>
              <input
                type="number"
                className="w-40 border bg-[#EDF8F9] border-[#EDF8F9]   rounded-md px-3 py-2 mt-1 ml-3"
                placeholder=""
              />
              <p className="text-xs text-[#6D717F]">
                Note : Write the whole number, no decimals
              </p>
            </div>
            <div className="text-[#1F4F53] flex  gap-x-8 items-center">
              <label className="block font-semibold ">Adults</label>
              <input
                type="number"
                className="w-40 border bg-[#EDF8F9] border-[#EDF8F9]   rounded-md px-3 py-2 mt-1"
                placeholder=""
              />
              <p className="text-xs text-[#6D717F]">
                Note : Write the whole number, no decimals
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* step-02 */}
 <section>
    <AddDestination/>
 </section>

      {/* Step 03 */}
      <section className="my-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg text-[#1F4F53]">
            Step - 03 : Select how you want to spend your day
          </h2>
          <button className="bg-[#E66CE5] text-white px-4 py-2 rounded-md text-sm">
            + Add more
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {foodList.map((food, i) => (
            <div
              key={i}
              className="bg-white border border-gray-300 shadow-xl rounded-md p-4 space-y-2"
            >
              <div className="flex justify-between">
                <span className="font-medium text-xl text-[#131927]">
                  {food.title}
                </span>
                <span className="text-red-500 cursor-pointer flex items-center gap-2">
                  <img src="/edit-pencil.png" className="h-5" alt="Edit" />
                  <img src="/delete.png" className="h-5" alt="Delete" />
                </span>
              </div>
              <ul className="text-sm text-gray-600">
                {food.items.map((item, idx) => (
                  <li
                    key={idx}
                    className={`py-1 ${
                      idx !== food.items.length - 1
                        ? "border-b border-gray-300 mb-2"
                        : ""
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <button className="bg-[#F7D1F7] w-full py-1 rounded-full font-medium text-sm mt-2">
                + Add new item
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Step 04 */}
      
      <section className="my-8">
        <h2 className="font-semibold text-lg mb-4 text-[#1F4F53]">
          Step - 04 : Please write your preferred budget allocation
        </h2>
        <div className="bg-[#FFFFFF] p-6 rounded-xl w-full shadow-md">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row md:items-center gap-4 mb-4"
              >
                <label className="w-full md:w-40 font-semibold">
                  Lunch Budget
                </label>

                <div className="flex items-center gap-2 flex-grow">
                  <h3 className="text-[#4ABBC6]">0$</h3>

                  {/* This wrapper grows, and the input inside takes 100% */}
                  <div className="flex-grow">
                    <input
                      type="range"
                      className="w-full accent-[#4ABBC6] custom-range"
                    />
                  </div>

                  <h3 className="text-[#4ABBC6]">5000$</h3>
                </div>

                <span className="w-full md:w-40 p-2 font-semibold rounded-xl text-center text-sm bg-[#C7EAED]">
                  Estimate: $12 - $32
                </span>
              </div>
            ))}
        </div>
      </section>

      {/* step-05 */}

      <section>
        <h2 className="font-semibold text-lg mb-4 text-[#1F4F53]">
          Step - 05 : Write a prompt sharing how you want to spend you day
        </h2>

        <div className="bg-white border border-gray-300 shadow-xl rounded-md p-6 space-y-2">
          <div className="pb-4 flex gap-2">
            <div className="flex  items-end ">
              <img src="/profile1.png" className="h-8 " alt="" />
            </div>
            <div className="bg-[#F2F3F5] w-full  shadow-xl rounded-md p-4 font-medium">
              <h3>Hi there 👋</h3>
              <h3>
                Please share information about your journey briefly. So we can
                assist you to create the perfect plan for you!
              </h3>
            </div>
          </div>

          <div className="bg-white   shadow-xl shadow-gray-300 rounded-md p-6 md:flex justify-between items-center gap-2">
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries,Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy{" "}
            </h3>
            <button className="bg-black text-white p-2 rounded-2xl md:w-30 h-10 mt-2 md:mt-0">
              <img src="/up-arrow.png" className="h-4 w-8" alt="" />
            </button>
          </div>
        </div>
      </section>

      <Link to={'/itinerary/details-destination'} className="flex justify-center"><SeconderyButton text={'Generate'} shadow={'#2DAD9D'}></SeconderyButton></Link>
    </div>
  );
};

export default CreateItinerary;
