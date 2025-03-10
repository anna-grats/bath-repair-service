

import React from 'react';
import FAQ from './FAQ';
import Section from '@/sections/Section';

interface Faq {
    title: string;

}
const Faq: React.FC = () => {
  return (
    <Section>
                    <div className="max-w-[1900px] bg-white mt-[50px] mx-auto rounded-3xl p-6 lg:p-8">
                <h2 className="text-[40px] font-semibold leading-[48px] text-center text-gray-900 mb-8">
                    FAQ
                </h2>
      <FAQ/>
      </div>
    </Section>
  );
};

export default Faq;
