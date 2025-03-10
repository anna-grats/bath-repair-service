"use client";
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Are you insured?",
    answer: "Absolutely! Daniloff LLC is fully insured, so you can book our services with confidence.",
  },
  {
    question: "Do you work with property managers, hotels, or apartment complexes?",
    answer: "Yes! We specialize in working with property management companies, hotels and apartment complexes to help them save on expensive bathtub replacements.",
  },
  {
    question: "Do you offer a warranty for your services?",
    answer: "Yes! We provide a 5-year warranty on all reglazing services.",
  },
  {
    question: "What’s the difference between spray refinishing and liquid Armoglaze?",
    answer: "Unlike spray painting, which creates thin, flimsy coatings, our Armoglaze method creates a coating that is 10 times thicker, stronger and smoother, without runs or uneven spots.",
  },
  {
    question: "How soon can I use my bathtub after refinishing?",
    answer: "Your tub will be ready to use in just 24 hours after reglazing. The process itself only takes about 4 hours.",
  },
  {
    question: "Is bathtub refinishing safe and odor-free?",
    answer: "Yes! We use a non-toxic, odorless method that is safe for your home and health. Unlike traditional spray coatings, our process does not emit harmful fumes.",
  },
  {
    question: "How long does bathtub reglazing last?",
    answer: "Our Armoglaze refinishing lasts 15-20 years with proper care. It's much more durable than spray polishing.",
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ flex: '1 1 calc(50% - 20px)', padding: '30px', borderRadius: '20px' }}>
      {faqData.map((item, index) => (
        <div key={index} className="border-b pb-4 mt-[14px]">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFAQ(index)}>
            <h3 className="text-lg font-semibold flex-1">{item.question}</h3>
            <div className="ml-2">
              {openIndex === index ? (
                <svg 
                  width="24"
                  height="12"
                  viewBox="0 0 37 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.63965 1L18.6396 15L35.6396 1"
                    stroke="#007BFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg 
                  width="24"
                  height="12"
                  viewBox="0 0 37 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.63965 15L18.6396 1L35.6396 15"
                    stroke="#007BFF" 
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
          {openIndex === index && (
            <p className="text-gray-700 mt-[14px]">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
