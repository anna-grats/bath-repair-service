'use client'

import React, { useState, useEffect } from 'react';
import Logo from '@/components/Header/Logo/Logo';
import Navigation from '@/components/Header/Navigation/Navigation';
import Actions from '@/components/Header/Actions/Actions';
import Link from 'next/link';
import ActionsG from './Actions';

interface HeaderProps {
    header?: {
        NAV_ITEMS: {
            href: string;
            label: string;
        }[];
    };
}

const HeaderG: React.FC<HeaderProps> = ({ header }) => {
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        setIsSticky(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`sticky z-30 ${isSticky ? 'top-0' : 'top-5'} max-w-[1096px] bg-white rounded-3xl mb-8 h-[54px] mx-auto transition-all duration-300`}>
            <div className="container mx-auto flex justify-between items-center h-full p-1">
                <Link href={`/en`}><Logo /></Link>
                {header?.NAV_ITEMS && <Navigation NAV_ITEMS={header.NAV_ITEMS} />}
                <ActionsG />
            </div>
        </header>
    );
};

export default HeaderG;
