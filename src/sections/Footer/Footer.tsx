import React from 'react';
import Section from '../Section';
import Link from 'next/link';
import Image from "next/image";


export const Footer: React.FC = () => {
    return (
        <Section >
            <footer
                className="w-full bg-color-white mx-auto flex flex-col items-center py-4 mt-4 space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center">
                <div className='flex flex-col items-center md:items-start'>
                    <Link href="/en/certificate" className="text-[#9A9A9A] hover:text-primary pb-1">
                        © 2024 - 2025 Daniloff LLC. All Rights Reserved.
                    </Link>
                    <Link href="/en/certificate" className="text-[#9A9A9A] hover:text-primary">
                        Certificate
                    </Link>
                </div>
                <div className="flex items-center space-x-2">

                    <span className="text-[#9A9A9A]">Website development by</span>
                    <a href='https://tasqa.org/'><img src='/assets/logo/tasqa.svg' alt="TASQA Logo" className="h-6"/>
                    </a>
                </div>
            </footer>
        </Section>
    );
}

export default Footer;