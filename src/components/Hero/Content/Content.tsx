'use client';

import React, { useEffect, useState } from 'react';
import Link from "next/link";

interface ContentProps {
    setConsultation: React.Dispatch<React.SetStateAction<boolean>>;
    consultation: string;
    content: {
        professionalism: string;
        toxic: string;
    };
}

const Content: React.FC<ContentProps> = ({ setConsultation, consultation, content }) => {
    const [currentLang, setCurrentLang] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const path = window.location.pathname;
            const lang = path.split('/')[1];
            setCurrentLang(lang);
        }
    }, []);

    const handleConsultationClick = () => {
        setConsultation(prevState => !prevState);
    };

    return (
        <div className="mt-10 mb-6 lg:flex-1 lg:pr-8 text-center lg:text-left">
            <h1 className="text-[32px] lg:text-[47px] font-semibold text-gray-900 leading-[40px] lg:leading-[56.4px] tracking-tight lg:w-[588px]">
                {content.professionalism}
            </h1>
            <p className="text-lg text-gray-700 mt-6 mb-6">
                {content.toxic}
            </p>
            {currentLang && (
                <Link
                    onClick={handleConsultationClick}
                    className="bg-primary text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
                    href={`/${currentLang}`}
                >
                    {consultation}
                </Link>
            )}
        </div>
    );
};

export default Content;
