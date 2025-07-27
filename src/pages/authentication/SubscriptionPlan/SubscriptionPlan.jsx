import { IoCheckmark } from "react-icons/io5";

const SubscriptionPlan = () => {
  const pricingPlans = [
    {
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
    <div className="flex items-center justify-center py-36">
      <div className="rounded-2xl w-[1288px] backdrop-blur-2xl bg-white/40">
        <div className="flex justify-center">
          <div className="px-6 pt-6">
            <div className="text-center">
              <p className="text-[44px] font-semibold">
                Select the subscription plan that matches your preference
              </p>
              <p className="text-base font-medium mb-5">
                You suggested the idea of the delivery person collecting parcels
                along the way{" "}
              </p>
            </div>
          </div>
        </div>
        {/* Subscription Plan Card */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 mt-11 mb-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#6E67D5] text-white p-6 rounded-3xl w-[310px] flex flex-col"
            >
              <h2 className="text-xl font-bold mb-2">{plan.title}</h2>
              <p className="text-sm mb-4">{plan.description}</p>
              <h3 className="text-3xl font-extrabold mb-1">{plan.price}</h3>
              <p className="text-xs mb-7">{plan.subText}</p>

              {/* Main content grows */}
              <ul className="mb-6 space-y-2 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-y-[18px] ">
                    <span className="mr-2">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button pushed to bottom */}
              <button className="bg-white text-black py-4 px-4 rounded-full font-semibold w-full  mt-auto">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
