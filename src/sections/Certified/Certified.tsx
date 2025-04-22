import React from 'react';
import Section from '../Section';
import FeatureCard from '@/components/Certified/FeatureCard/FeatureCard';

const images = [
    { src: '/assets/images/bath_cer.png', alt: 'Bath', rowStart: 1, colStart: 1, rowEnd: 5, colEnd: 3 },
    { src: '/assets/images/sink_cer.png', alt: 'Sink', rowStart: 5, colStart: 1, rowEnd: 9, colEnd: 3 },
    { src: '/assets/images/shower_cer.png', alt: 'Shower', rowStart: 3, colStart: 3, rowEnd: 7, colEnd: 5 }
];


interface FeatItems {
    icon:'string';
    text:'string';
}
interface Certified {
    certified: {
        experience: string;
        years: string;
        technics: string;
        warranty: string;
        features: FeatItems[]
    }
}
const Certified: React.FC<Certified> = ({ certified }) => {

    return (
        <Section id='Certified' py={12} bg="#F4F7FA">
            <div className="flex flex-col lg:flex-row items-start lg:space-x-8">
                <div className="grid grid-cols-4 gap-4 w-full lg:w-[465px] lg:h-[574px] h-auto sm:grid-rows-8 lg:grid-rows-8 mr-[35px]">
                    {images?.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className="rounded-3xl w-full h-auto"
                            style={{
                                gridRow: `${image.rowStart} / ${image.rowEnd}`,
                                gridColumn: `${image.colStart} / ${image.colEnd}`
                            }}
                        />
                    ))}
                </div>
                <div className="mt-8 lg:mt-0 lg:flex-1">
                    <h2 className="text-4xl lg:text-5xl font-semibold text-gray-800 mb-4">
                        {certified.experience} <span className="text-primary">{certified.years}</span>
                    </h2>
                    <p className="text-lg text-gray-500 mb-6">
                        {certified.technics}
                    </p>
                    <p className="text-lg text-gray-500 mb-6">
                        {certified.warranty}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 drop-shadow-2xl">
                        {certified.features.map((feature, index) => (
                            <FeatureCard key={index} icon={feature.icon} text={feature.text} />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Certified;
