import React from 'react';
import Section from '../Section';
import BenefitCard from '@/components/Benefits/BenefitCard/BenefitCard';

interface ItemsContent {
    firstString: string;
    secondaryString: string;
    threeString;
}
interface BenefitsItems{
    title: string;
    content: string & ItemsContent
}
interface Benefits {
    title: string;
    items: BenefitsItems[];
    highlight: string;
    additionalClass: string;
}

const Benefits: React.FC = ({ benefits }:Benefits) => {
    return (
        <Section id='Benefits' py={12}>
            <div className="max-w-[1096px] mx-auto relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="w-full lg:w-[550px] relative">
                        <img
                            src='assets/images/vectors/blue_vector_2.png'
                            className="absolute inset-0 w-full h-full object-cover transform blur-lg"
                         alt='blue vector 2'/>
                        <h2 className="relative text-[32px] lg:text-[38px] font-semibold leading-[40px] lg:leading-[48px] pr-10 mt-[10px] text-gray-900">
                            {benefits.title}
                        </h2>
                    </div>
                    {benefits.items.map(({ title, content, additionalClass }, index) => (
                        <BenefitCard
                            key={index}
                            title={title}
                            content={content}
                            additionalClass={additionalClass || ''}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}

export default Benefits;
