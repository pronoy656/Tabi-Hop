import React from "react";
import { Link } from "react-router-dom";

const AdminSubscriptionsPlan = () => {
  //Array for Subscription card
  const pricingPlans = [
    {
      id: 1,
      title: "Free",
      description:
        "Experience the excellence of our services with a handful of small projects.",
      price: "$0/mo",
      subText: "Pause or cancel anytime. 7 days money-back guarantee",
      features: [
        "One request at a time",
        "Two week delivery",
        "Unlimited requests & revisions",
        "Up to 1 meeting per week",
        "Dev ready Figma files",
        "Unlimited Stock Photos",
      ],
      buttonText: "Start",
    },
    {
      id: 2,
      title: "Basic",
      description:
        "Experience the excellence of our services with a handful of small projects.",
      price: "$49/mo",
      subText: "Cancel anytime. 14 days money-back guarantee",
      features: [
        "Two requests at a time",
        "One week delivery",
        "Unlimited revisions",
        "Up to 3 meetings per week",
        "Priority support",
        "Access to premium assets",
      ],
      buttonText: "Next",
    },
    {
      id: 3,
      title: "Premium",
      description:
        "Experience the excellence of our services with a handful of small projects.",
      price: "$99.9/mo",
      subText: "Let’s build something together. Custom contracts available.",
      features: [
        "Unlimited requests",
        "Dedicated design team",
        "Daily progress updates",
        "Custom integrations",
        "Slack channel support",
        "Design system management",
      ],
      buttonText: "Next",
    },
    {
      id: 4,
      title: "Gold",
      description:
        "Experience the excellence of our services with a handful of small projects.",
      price: "$99.9/mo",
      subText: "Let’s build something together. Custom contracts available.",
      features: [
        "Unlimited requests",
        "Dedicated design team",
        "Daily progress updates",
        "Custom integrations",
        "Slack channel support",
        "Design system management",
      ],
      buttonText: "Next",
    },
  ];

  return (
    <div className="admin-page">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5 gap-4">
        <div>
          <p className="text-xl sm:text-2xl font-semibold">
            Subscription management
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>

        <button className="bg-[#131927] text-white px-6 py-2.5 rounded-md text-sm w-full sm:w-auto">
          + Add New
        </button>
      </div>
      {/* Subscription Plan Card */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-6 mt-11 mb-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-[#6E67D5] text-white p-6 rounded-3xl w-[90%] max-w-[310px]  mx-auto flex flex-col"
          >
            <h2 className="text-xl font-bold mb-2">{plan.title}</h2>
            <p className="text-sm mb-4">{plan.description}</p>
            <h3 className="text-3xl font-extrabold mb-1">{plan.price}</h3>
            <p className="text-xs mb-7">{plan.subText}</p>

            {/* Main content grows */}
            <ul className="mb-6 space-y-1 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start space-y-[18px] ">
                  <span className="mr-2">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button pushed to bottom */}
            <Link to={`/signin/details/${plan.id}`} className="w-full">
              <button className="bg-white text-black py-4 px-4 rounded-full font-semibold w-full  mt-auto">
                {plan.buttonText}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSubscriptionsPlan;
