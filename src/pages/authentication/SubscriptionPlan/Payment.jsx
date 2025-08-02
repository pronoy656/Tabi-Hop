import React from "react";
import { useParams } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY = "your_stripe_publishable_key_here";
const stripePromise = loadStripe(PUBLIC_KEY);

const Payment = () => {
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

  const { id } = useParams();

  const data = pricingPlans.find((plan) => plan.id === parseInt(id));
  console.log(data);

  return (
    <div className="flex items-center justify-center py-36">
      {/* <div className="rounded-2xl border w-[1280px] backdrop-blur-2xl bg-white/40">
        <div className="flex justify-center">
          <div className="px-6 pt-6 ">
            <div className="text-center">
              <p className="text-[44px] font-semibold">Complete the payment.</p>
              <p className="text-base font-medium mb-5">
                You suggested the idea of the delivery person collecting parcels
                along the way
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div className="w-[744px] rounded-xl bg-[#EDE8FF] py-16">
            <Elements stripe={stripePromise}>
              <PaymentForm></PaymentForm>
            </Elements>
          </div>
        </div>
      </div> */}

      <div className="rounded-2xl w-full max-w-[1280px] mx-auto backdrop-blur-2xl bg-white/40 px-4 sm:px-6">
        <div className="flex justify-center">
          <div className="pt-6">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-[36px] lg:text-[44px] font-semibold leading-snug">
                Complete the payment.
              </p>
              <p className="text-sm sm:text-base font-medium mb-5 px-2 sm:px-6">
                You suggested the idea of the delivery person collecting parcels
                along the way
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-8 px-2">
          <div className="w-full max-w-2xl rounded-xl bg-[#EDE8FF] py-10 px-4 sm:px-8">
            <Elements stripe={stripePromise}>
              <PaymentForm />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
