'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentLocale, setCurrentLocale] = useState('EN'); 
    const router = useRouter();
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleMainMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    const changeLanguage = (locale: string) => {
        router.push(`/${locale}`);
        setIsOpen(false);
        setCurrentLocale(locale.toUpperCase());
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        // Get the current language from the URL
        const path = window.location.pathname;
        const lang = path.split('/')[1];
        setCurrentLocale(lang.toUpperCase());
    }, []);

    return (
        <div className="relative z-20">
            <div className="hidden md:flex">
                <button onClick={toggleMenu}
                        className="bg-white border border-gray-300 text-gray-500 px-3 py-1 rounded-full flex items-center">
                    {currentLocale}
                    <svg className={`w-4 h-4 ml-1 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                         fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                {isOpen && (
                    <div className="absolute top-full mt-2 w-[82px] bg-white border rounded-md shadow-lg">
                        <button onClick={() => changeLanguage('es')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">ES</button>
                        <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">EN</button>
                    </div>
                )}
            </div>

            <div className="flex md:hidden">
                <button onClick={toggleMainMenu} className="text-gray-700">
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    ) : (
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    )}
                </button>
                {isMenuOpen && (
                    <div ref={menuRef}
                         className="fixed inset-x-0 bottom-0 h-[360px] bg-white z-50 px-[20px] py-[30px] rounded-t-2xl shadow-lg">
                        <div className="relative flex justify-between items-center">
                            <button onClick={toggleMenu}
                                    className="bg-gray-200 text-gray-700 p-3 py-1 rounded-full flex items-center">
                                {currentLocale}
                                <svg
                                    className={`w-4 h-4 ml-1 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <button onClick={toggleMainMenu} className="absolute right-1 w-[40px] h-[40px] bg-gray-200 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 group">
                                <span className="relative block w-[20px] h-[20px]">
                                    <span className="absolute block w-full h-[2px] bg-gray-600 top-1/2 left-0 transform -translate-y-1/2 rotate-45 transition-colors duration-300 group-hover:bg-blue-500"></span>
                                    <span className="absolute block w-full h-[2px] bg-gray-600 top-1/2 left-0 transform -translate-y-1/2 -rotate-45 transition-colors duration-300 group-hover:bg-blue-500"></span>
                                </span>
                            </button>
                        </div>
                        {isOpen && (
                            <div className="absolute w-[82px] bg-white border rounded-md shadow-lg">
                                <button onClick={() => changeLanguage('es')}
                                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">ES
                                </button>
                                <button onClick={() => changeLanguage('en')}
                                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">EN
                                </button>
                            </div>
                        )}
                        <nav className="height=[302px] flex flex-col items-start">
                            <Link onClick={toggleMainMenu} href="#Reviews" className="text-gray-700 text-xl py-6">
                                Reviews
                            </Link>
                            <Link onClick={toggleMainMenu} href="#Certified" className="text-gray-700 text-xl pb-6">
                                About
                            </Link>
                            <Link onClick={toggleMainMenu} href="#Benefits" className="text-gray-700 text-xl pb-6">
                                Comparison
                            </Link>
                            <Link onClick={toggleMainMenu} href="#Faq" className="text-gray-700 text-xl pb-6">
                                FAQ                            
                            </Link>
                            <Link onClick={toggleMainMenu} href="#Before&After" className="text-gray-700 text-xl pb-6">
                                Before & After
                            </Link>
                            <Link onClick={toggleMainMenu} href="#ContactForm" className="text-gray-700 text-xl pb-6">
                                Contact
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LanguageSwitcher;
