'use client'
import React, { useState, useEffect } from 'react';
import Logo from '@/components/Header/Logo/Logo';
import Navigation from '@/components/Header/Navigation/Navigation';
import Actions from '@/components/Header/Actions/Actions';
import Link from 'next/link';



const Header = ({ header } ) => {
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`sticky z-30 ${isSticky ? 'top-0' : 'top-5'} max-w-[1096px] bg-white rounded-3xl h-[54px] mx-auto transition-all duration-300`}>
            <div className="container mx-auto flex justify-between items-center h-full p-1">
                <Link href={`/en`} > <Logo /> </Link>
                <Navigation NAV_ITEMS={header.NAV_ITEMS}/>
                <Actions />
            </div>
        </header>
    );
};

export default Header;
