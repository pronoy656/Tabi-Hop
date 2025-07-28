import { FaArrowRight } from "react-icons/fa6";

const Allergies = () => {
  const allergyData = [
    {
      title: "Environmental Allergies",
      items: [
        "Dogs (dander, saliva)",
        "Cats (dander, fur)",
        "Pollen (trees, grasses, weeds)",
        "Dust mites",
        "Insect stings (bees, wasps, fire ants)",
        "Feathers or bird droppings",
        "Cockroach droppings",
      ],
    },
    {
      title: "Chemical/Material Allergies",
      items: [
        "Latex (e.g., gloves, balloons)",
        "Plastic (certain types or additives)",
        "Rubbing alcohol (isopropyl alcohol)",
        "Fragrances/perfumes",
        "Cleaning products",
        "Detergents or soaps",
        "Nickel (jewellery, belts, snaps)",
      ],
    },
    {
      title: "Food Allergies",
      items: [
        "Peanuts",
        "Tree nuts (e.g., almonds, walnuts, cashews)",
        "Shellfish (e.g., shrimp, crab, lobster)",
        "Fish (e.g., salmon, tuna)",
        "Wheat/gluten",
        "Dairy (milk, cheese, yogurt)",
        "Sesame and Soy",
      ],
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-36">
        <div>
          <div className="rounded-2xl w-[1320px]">
            <div className="flex justify-center">
              <div className="pt-6 ">
                <div className="text-center">
                  <p className="text-[44px] font-semibold">
                    Allergies (Environmental, Chemical, and Food)
                  </p>
                  <p className="text-base font-medium mb-5">
                    Just Flights are okay right now. You can always modify later
                  </p>
                </div>
                {/* /* allergies card */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-8 mx-auto">
                  {allergyData.map((category, i) => (
                    <div
                      key={i}
                      className="bg-[#C7EAED] w-[416px] rounded-xl p-6 shadow-lg"
                    >
                      <h2 className="text-xl font-semibold mb-4 text-[#1F3B57]">
                        {category.title}
                      </h2>
                      <ul className="space-y-3">
                        {category.items.map((item, j) => (
                          <li key={j} className="py-1">
                            <div className="flex items-center space-x-3">
                              <input
                                type="checkbox"
                                className="form-checkbox w-5 h-5 accent-blue-500"
                              />
                              <span className="text-gray-800">{item}</span>
                            </div>
                            <div className="bg-white w-full h-0.5 mt-3" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Subscription Plan Card */}
            <div className="rounded-2xl bg-[#C7EAED] flex items-center justify-center  py-7 px-7 shadow-lg mt-4">
              <div>
                <p className="text-xl font-semibold">
                  Any Other Allergies – Anything we didn’t mention?{" "}
                </p>
                <p>Please write down if we missed. </p>
              </div>
              <div className="w-[968px] bg-white rounded-2xl flex items-center justify-center py-6 px-4">
                <p className="font-medium">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and{" "}
                </p>
                <button className="bg-black py-2.5 px-[50px] rounded-2xl">
                  <div className="flex items-center justify-center space-x-2.5">
                    <p className="text-white">Send</p>
                    <FaArrowRight className="text-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* /////2//////// */}
          <div className="rounded-2xl w-[1320px] mt-6">
            <div className="flex justify-center">
              <div className="pt-6 ">
                <div className="text-center">
                  <p className="text-[44px] font-semibold">
                    Medical Conditions
                  </p>
                  <p className="text-base font-medium mb-5">
                    Just Flights are okay right now. You can always modify later
                  </p>
                </div>
                {/* /* allergies card */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-8 mx-auto">
                  {allergyData.map((category, i) => (
                    <div
                      key={i}
                      className="bg-[#F7D1F7] w-[416px] rounded-xl p-6 shadow-lg"
                    >
                      <h2 className="text-xl font-semibold mb-4 text-[#1F3B57]">
                        {category.title}
                      </h2>
                      <ul className="space-y-3">
                        {category.items.map((item, j) => (
                          <li key={j} className="py-1">
                            <div className="flex items-center space-x-3">
                              <input
                                type="checkbox"
                                className="form-checkbox w-5 h-5 accent-blue-500"
                              />
                              <span className="text-gray-800">{item}</span>
                            </div>
                            <div className="bg-white w-full h-0.5 mt-3" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Subscription Plan Card */}
            <div className="rounded-2xl bg-[#F7D1F7] flex items-center justify-center  py-7 px-7 shadow-lg mt-4">
              <div>
                <p className="text-xl font-semibold">
                  Any Other Allergies – Anything we didn’t mention?{" "}
                </p>
                <p>Please write down if we missed. </p>
              </div>
              <div className="w-[968px] bg-white rounded-2xl flex items-center justify-center py-6 px-4">
                <p className="font-medium">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and{" "}
                </p>
                <button className="bg-black py-2.5 px-[50px] rounded-2xl">
                  <div className="flex items-center justify-center space-x-2.5">
                    <p className="text-white">Send</p>
                    <FaArrowRight className="text-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* /////3//////// */}
          <div className="rounded-2xl  w-[1320px] mt-6">
            <div className="flex justify-center">
              <div className="pt-6 ">
                <div className="text-center">
                  <p className="text-[44px] font-semibold">
                    Allergies (Environmental, Chemical, and Food)
                  </p>
                  <p className="text-base font-medium mb-5">
                    Just Flights are okay right now. You can always modify later
                  </p>
                </div>
                {/* /* allergies card */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-8 mx-auto">
                  {allergyData.map((category, i) => (
                    <div
                      key={i}
                      className="bg-[#D2D0F2] w-[416px] rounded-xl p-6 shadow-lg"
                    >
                      <h2 className="text-xl font-semibold mb-4 text-[#1F3B57]">
                        {category.title}
                      </h2>
                      <ul className="space-y-3">
                        {category.items.map((item, j) => (
                          <li key={j} className="py-1">
                            <div className="flex items-center space-x-3">
                              <input
                                type="checkbox"
                                className="form-checkbox w-5 h-5 accent-blue-500"
                              />
                              <span className="text-gray-800">{item}</span>
                            </div>
                            <div className="bg-white w-full h-0.5 mt-3" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Subscription Plan Card */}
            <div className="rounded-2xl bg-[#D2D0F2] flex items-center justify-center  py-7 px-7 shadow-lg mt-4">
              <div>
                <p className="text-xl font-semibold">
                  Any Other Allergies – Anything we didn’t mention?{" "}
                </p>
                <p>Please write down if we missed. </p>
              </div>
              <div className="w-[968px] bg-white rounded-2xl flex items-center justify-center py-6 px-4">
                <p className="font-medium">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and{" "}
                </p>
                <button className="bg-black py-2.5 px-[50px] rounded-2xl">
                  <div className="flex items-center justify-center space-x-2.5">
                    <p className="text-white">Send</p>
                    <FaArrowRight className="text-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* button */}
          <div className="flex justify-between items-center gap-7">
            <div className="bg-[#FF6A00]  h-20 border-3 border-black  rounded-bl-[60px] rounded-br-[60px] rounded-tl-2xl rounded-tr-2xl  mt-20 relative w-full">
              <button className=" h-[87.5px]  bg-white border-3 border-black rounded-[50px] absolute top-[-26px] text-[20px] font-semibold w-[101.55%] -ml-[5px]">
                Skip for now
              </button>
            </div>

            <div className="bg-[#FF6A00]  h-20 border-3 border-black  rounded-bl-[60px] rounded-br-[60px] rounded-tl-2xl rounded-tr-2xl  mt-20 relative w-full">
              <button className=" h-[87.5px]  bg-white border-3 border-black rounded-[50px] absolute top-[-26px] text-[20px] font-semibold w-[101.55%] -ml-[5px]">
                Confirm & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allergies;
