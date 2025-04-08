import React from 'react';
import Section from '../Section';
import Form from '@/components/Form';
import Divider from '@/components/Divider/Divider';

interface Contact {
    contact: {
        title: string;
        description: string;
        subscribe: string;
    };
}

// The component now correctly expects 'contact' as a prop based on the Contact interface
const ContactForm: React.FC<Contact> = ({ contact }) => {
    return (
        <Section id='ContactForm' py={12}>
            <div className="max-w-[1096px] px-7 py-5 mx-auto bg-white rounded-3xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-[40px] font-semibold leading-[48px] text-gray-900 mb-4">
                            {contact.title}
                        </h2>
                        <p className="text-gray-700 text-lg mb-8">
                            {contact.description}
                        </p>
                    </div>
                    <div>
                        <Form />
                    </div>
                </div>
                <Divider mt='30px' mb='30px'/>
                <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-4">
                            <img src="/assets/icons/phone.svg" alt="Phone" className="w-6 h-6 text-primary"/>
                            <a href="tel:7472356546" className="text-gray-700 hover:text-[#2195D7]">+17472356546</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img src="/assets/icons/message.svg" alt="Email" className="w-6 h-6 text-primary"/>
                            <a href="mailto:biz.daniloff@gmail.com" className="text-gray-700 hover:text-[#2195D7]">biz.daniloff@gmail.com</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img src="/assets/icons/pin.svg" alt="Location" className="w-6 h-6 text-primary"/>
                            <a href="https://www.google.com/maps?q=1353+N+Martel+Ave,+Los+Angeles,+CA,+90046"
                               target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#2195D7]">
                                1353 N Martel Ave, Los Angeles, CA, 90046
                            </a>
                        </div>
                    </div>
                    <div className="mr-[120px] flex flex-col mt-4">
                        <span className="text-gray-700 font-semibold mb-2">
                            {contact.subscribe}
                        </span>
                        <div className="flex space-x-4 mt-2">
                            <a href="https://www.instagram.com/daniloffllc" target="_blank" className="text-gray-700 ">
                                <img src="/assets/logo/inst.svg" alt="Instagram"/>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61561935593017"
                               className="text-gray-700"
                               target="_blank"
                            >
                                <img src="/assets/logo/fb.svg" alt="Facebook"/>
                            </a>
                            <a href="https://www.youtube.com/@DaniloffLLC" target="_blank" className="text-gray-700">
                                <img src="/assets/logo/yt.svg" alt="YouTube"/>
                            </a>
                            <a href="https://wa.me/13234999841" target="_blank" className="text-gray-700">
                                <img className='w-[40px] h-[40px]' src="/assets/logo/whatsapp.svg" alt="Whatsapp"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ContactForm;
