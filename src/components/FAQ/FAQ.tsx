"use client";
import Section from '@/sections/Section';
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqData: { question: string; answer: string }[];
}

const FAQ: React.FC<FAQProps> = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id='Faq'>
    <div className="max-w-[1900px] bg-white mt-[50px] mx-auto rounded-3xl p-6 lg:p-8">
    <h2 className="text-[40px] font-semibold leading-[48px] text-center text-gray-900 mb-8">
        FAQ
    </h2>
    <div style={{ flex: '1 1 calc(50% - 20px)', padding: '30px', borderRadius: '20px' }}>
      {faqData.map((item, index) => (
        <div key={index} className="border-b pb-4 mt-[14px]">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFAQ(index)}>
            <h3 className="text-lg font-semibold flex-1">{item.question}</h3>
            <div className="ml-2">
              {openIndex === index ? (
                <svg width="24" height="12" viewBox="0 0 37 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.63965 1L18.6396 15L35.6396 1" stroke="#007BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="24" height="12" viewBox="0 0 37 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.63965 15L18.6396 1L35.6396 15" stroke="#007BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
    </div>
    </Section>
  );
};

export default FAQ;
