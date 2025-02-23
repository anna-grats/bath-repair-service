'use client'
import React, { useEffect, useRef } from 'react';

const Modal = ({ children, onClose }) => {
    const modalRef = useRef(null);

    // Блокируем прокрутку при открытой модалке
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div style={{margin: 0}} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div ref={modalRef} className="bg-white rounded-3xl p-6 w-[90%] md:w-[400px] relative">
                <button
                    onClick={onClose}
                    className="absolute w-[50px] h-[50px] bg-gray-200 rounded-full top-4 right-4 flex items-center justify-center hover:bg-white transition-colors duration-300 group"
                >
                    <span className="relative block w-[20px] h-[20px]">
                        <span className="absolute block w-full h-[2px] bg-gray-600 top-1/2 left-0 transform -translate-y-1/2 rotate-45 transition-colors duration-300 group-hover:bg-blue-500"></span>
                        <span className="absolute block w-full h-[2px] bg-gray-600 top-1/2 left-0 transform -translate-y-1/2 -rotate-45 transition-colors duration-300 group-hover:bg-blue-500"></span>
                    </span>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
