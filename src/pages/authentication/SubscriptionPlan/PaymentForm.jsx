import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { Link } from "react-router-dom";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("Hong Kong SAR China");
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: { email },
    });

    if (!error) {
      console.log("PaymentMethod:", paymentMethod);
      setStatus("success");
    } else {
      console.log(error.message);
      setStatus("error");
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto bg-[#F3F0FF] p-6 rounded-lg shadow-md">
        {/* Title */}
        <div className="bg-white flex items-center px-4 py-2 rounded-t-md border-b border-gray-200">
          <input type="checkbox" checked readOnly className="mr-2" />
          <span className="text-[#635BFF] font-semibold mr-2">Stripe</span>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white px-4 py-6 rounded-b-md space-y-4"
        >
          <div>
            <label>Email</label>
            <input
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-gray-300 outline-none py-2"
            />
          </div>

          <div>
            <label>Card number</label>
            <div className="w-full py-2 border-b border-gray-300">
              <CardElement />
            </div>
          </div>

          <div className="flex justify-between space-x-4">
            <div className="w-1/2">
              <label>Expiration</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full border-b border-gray-300 outline-none py-2"
                disabled
              />
            </div>
            <div className="w-1/2">
              <label>CVC</label>
              <input
                type="text"
                placeholder="CVC"
                className="w-full border-b border-gray-300 outline-none py-2"
                disabled
              />
            </div>
          </div>

          <div>
            <label>Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border-b border-gray-300 outline-none py-2"
            >
              <option>Hong Kong SAR China</option>
              <option>Bangladesh</option>
              <option>India</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#635BFF] text-white font-semibold py-3 rounded mt-4"
          >
            Done
          </button>
        </form>
        {/* Modals */}
        {/*Success Modal */}
        {status === "success" && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white w-[926px] py-28 rounded-2xl shadow-sm shadow-green-400 text-center relative top-[70px]">
              <img
                src="/right.png"
                alt="Error Icon"
                className="w-[148px] h-[145px] mx-auto mb-6"
              />
              <h2 className="text-[32px] font-bold text-[#1A1A1A] mt-8">
                Congratulation! <br /> You Payment is Successful
              </h2>

              <p className="mt-6 text-[#5F5F5F] font-semibold">
                As you have successfully purchased subscription, now you can
                enjoy all the <br /> functionalities of the respective package.
              </p>

              <button
                onClick={() => setStatus(null)}
                className="mt-12 px-[60px] py-4 bg-black text-white rounded-lg text-2xl font-semibold"
              >
                Go to Home
              </button>
            </div>
          </div>
        )}
        {/*Error Modal */}
        {status === "error" && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white w-[926px] py-28 rounded-2xl shadow-sm shadow-red-400 text-center relative  top-[70px]">
              <img
                src="/cross.png"
                alt="Error Icon"
                className="w-[148px] h-[145px] mx-auto mb-6"
              />
              <h2 className="text-[32px] font-bold text-[#1A1A1A] mt-8">
                Oops! 😥
              </h2>
              <p className="text-[32px] font-bold text-[#1A1A1A] mt-2">
                Payment Failed
              </p>
              <p className="mt-6 text-[#5F5F5F] font-semibold">
                Sorry! Something went wrong while processing your payment.{" "}
                <br />
                Please check your card information and try again.
              </p>
              <button
                onClick={() => setStatus(null)}
                className="mt-12 px-[60px] py-4 bg-red-600 text-white rounded-lg text-2xl font-semibold"
              >
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
