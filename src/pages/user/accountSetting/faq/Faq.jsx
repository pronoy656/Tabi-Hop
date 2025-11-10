import { useState } from "react";

const faqs = [
  {
    question: "How can I reset my password?",
    answer:
      "To reset your password, go to the login page and click on 'Forgot password'. Follow the instructions to reset it.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can contact support by emailing support@example.com or using the contact form on our website.",
  },
  {
    question: "Where can I view my bookings?",
    answer:
      "Go to your dashboard and click on 'My Bookings' to see all your current and past bookings.",
  },
  {
    question: "Can I cancel or reschedule an event?",
    answer:
      "Yes, from the bookings page, choose the event and click 'Reschedule' or 'Cancel'.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="page ">
      {/* Header */}
      <div className="mb-8 mt-4">
        <h2 className="text-4xl font-semibold">Frequently Asked Questions</h2>
        <p className="text-[#6D717F] text-base mt-1 max-w-2xl">
          Here are some of the most common questions people ask. Click to reveal the answers.
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center text-lg font-medium hover:bg-gray-100 transition"
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-[#4D5461] text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
