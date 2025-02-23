'use client'
import React, { useState } from 'react';
import Section from '../Section';
import Content from '@/components/Hero/Content/Content';
import Form from '@/components/Form';
import ImageHero from "@/components/Hero/ImageHero/ImageHero";

interface HeroContent {
    professionalism: string;
    toxic: string;
}

interface HeroProps {
    consultation: string;
    content: HeroContent;
}

const Hero: React.FC<{ hero: HeroProps }> = ({ hero }) => {
    const [consultation, setConsultation] = useState(false);

    const handleClose = () => {
        setConsultation(false);
    };

    return (
        <Section id="Hero">
            <div className="relative flex flex-col-reverse lg:flex-row items-center lg:items-start py-12">
                <Content setConsultation={setConsultation} content={hero.content} consultation={hero.consultation} />

                {consultation ? (
                    <div className="relative lg:flex-1 mt-8 lg:mt-0 w-full flex justify-center items-center">
                        <img
                            alt='blue vector 1'
                            src='assets/images/vectors/blue_vector_1.png'
                            className="absolute inset-0 w-[93%] h-full object-cover transform scale-125 blur-lg brightness-5"
                        />
                        <div className="relative bg-white rounded-3xl w-full h-auto flex flex-col justify-center items-center px-10 pb-4">
                            <button
                                onClick={handleClose}
                                className="absolute w-[50px] h-[50px] bg-gray-200 rounded-full top-4 right-4 flex items-center justify-center hover:bg-white transition-colors duration-300 group z-10"
                            >
                                <span className="relative block w-[20px] h-[20px]">
                                    <span className="absolute block w-full h-[2px] bg-gray-600 top-1/2 left-0 transform -translate-y-1/2 rotate-45 transition-colors duration-300 group-hover:bg-blue-500"></span>
                                    <span className="absolute block w-full h-[2px] bg-gray-600 top-1/2 left-0 transform -translate-y-1/2 -rotate-45 transition-colors duration-300 group-hover:bg-blue-500"></span>
                                </span>
                            </button>
                            <span className="w-full text-black mt-[50px] mb-8 font-raleway text-[30px] font-semibold leading-[42px] text-left relative">
                                {hero.consultation}
                            </span>
                            <div className="w-full relative z-10">
                                <Form isVertical={true} />
                            </div>
                        </div>
                    </div>
                ) : (
                    <ImageHero />
                )}
            </div>
        </Section>
    );
}

export default Hero;
