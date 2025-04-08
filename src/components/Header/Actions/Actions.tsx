'use client'
import React, { useState } from 'react';
import LanguageSwitcher from '../LanguageSwicher/LanguageSwitcher';
import Modal from '@/components/Modal/Modal';
import Form from '@/components/Form';
 const Actions = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <div className="flex items-center space-x-4">
            <LanguageSwitcher/>
            <button onClick={toggleModal} className="bg-blue-100 text-blue-600 p-2 rounded-full">
                <img className="w-6 h-6" src="/assets/icons/phone.svg" alt="Phone"/>
            </button>
            {modal && (
                <Modal onClose={toggleModal}>
                    <span
                        className="w-full z-0 text-black font-raleway text-[20px] font-semibold leading-[42px] text-left">
                                Free consultation
                    </span>
                    <div className='mt-5'>
                    <Form isVertical={true}/>
                    </div>
                </Modal>
            )}
        </div>
    );
 };

export default Actions