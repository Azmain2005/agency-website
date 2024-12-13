"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function Faq() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "What is growth marketing?",
      answer:
        "Growth marketing focuses on data-driven strategies to attract, engage, and retain customers. Unlike traditional marketing, it emphasizes experimentation, analytics, and ongoing optimization to achieve sustainable business growth.",
    },
    {
      question: "How long does it take to see results from growth marketing?",
      answer:
        "Results can vary based on the specific strategies implemented and your business's unique goals. Generally, you can expect to see initial improvements within a few months, but sustained growth often takes several quarters of consistent effort and optimization.",
    },
    {
      question:
        "Do I need a big budget to implement growth marketing strategies?",
      answer:
        "Not necessarily! Growth marketing can be tailored to fit any budget. We focus on cost-effective strategies that maximize ROI, ensuring that even small businesses can benefit from effective growth marketing without overspending.",
    },
    {
      question: "How do you measure the success of your marketing strategies?",
      answer:
        "We use a variety of key performance indicators (KPIs) such as conversion rates, customer acquisition costs, and overall revenue growth. By continuously monitoring these metrics, we can adjust our strategies to ensure optimal performance and sustained success.",
    },
  ];

  const togglefaq = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };
  return (
    <>
      <div
        className="flex  flex-col justify-center items-center mt-[100px] mb-[50px] "
        id="faq"
      >
        <p className="font-bold text-blue-600">FAQs</p>
        <h1 className="text-[50px]  font-extrabold  capitalize  leading-[60px] max-sm:leading-[30px] max-sm:text-[30px]">
          Frequently asked
        </h1>
      </div>

      <div className="flex flex-col items-center space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-4 border-2 border-black border-b-4 rounded-md  w-full"
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => togglefaq(index)}
            >
              <h3 className="font-bold">{faq.question}</h3>
              {open === index ? (
                <FaMinus className="cursor-pointer" />
              ) : (
                <FaPlus className="cursor-pointer" />
              )}
            </div>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                open === index ? "max-h-[300px]" : "max-h-0"
              }`}
            >
              <p className="mt-4 text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Faq;
