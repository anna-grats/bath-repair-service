'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormProps {
    isVertical?: boolean;
    onSubmit?: (data: any) => void;
}

const Form: React.FC<FormProps> = ({ isVertical = false }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isError, setIsError] = useState(false);
    console.log(errors)
    const onSubmit = async data => {
        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();
            console.log({ responseData });

            if (response.ok) {
                setIsSubmitted(true);
                setIsError(false);
            } else {
                setIsError(true);
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setIsError(true);
        }
    };

    const getErrorClass = (fieldName: string) => errors[fieldName] ? 'border-red-500' : '';

    return (
        <div>
            {isSubmitted ? (
                <div className="text-center py-6">
                    <div className="text-blue-600 flex justify-center mx-auto">
                        <img src='/assets/icons/tick.svg' alt='tick'/>
                    </div>
                    <p className="text-gray-700 text-lg mt-4">Information sent successfully, we will contact you shortly</p>
                </div>
            ) : isError ? (
                <div className="text-center py-6">
                    <div className="text-red-600">
                        <img className="mx-auto h-12 w-12" src='/assets/icons/cross.svg'/>
                    </div>
                    <p className="text-gray-700 text-lg mt-4">Something went wrong, try again later</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4 w-full">
                    <div className='block'>
                        <input
                            type="text"
                            placeholder="Name"
                            {...register("Name", {required: "Name is required",  minLength: 3, maxLength: 20 })}
                            className={`w-full border ${getErrorClass("Name")} rounded-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600`}
                        />
                        {errors.Name && <p className="text-red-500 text-sm">Invalid name</p>}
                    </div>

                    <div className='block'>
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("Email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
                            className={`w-full border ${getErrorClass("Email")} rounded-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600`}
                        />
                        {errors.Email && <p className="text-red-500 text-sm mt-1">Invalid email address</p>}
                    </div>

                    <div className={`grid ${isVertical ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-4`}>
                        <div className='block'>
                            <input
                                type="tel"
                                placeholder="Phone"
                                {...register("Phone", { minLength: 10, maxLength: 12 })}
                                className={`w-full border ${getErrorClass("Phone")} rounded-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600`}
                            />
                            {errors.Phone && <p className="text-red-500 text-sm">Invalid phone number</p>}
                        </div>

                        <div className='block'>
                            <input
                                type="text"
                                placeholder="Zip-code"
                                {...register("Zipcode", {required: "Zip-code is required", minLength: 5, maxLength: 10 })}
                                className={`w-full border ${getErrorClass("Zip-code")} rounded-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600`}
                            />


                            {errors.Zipcode && <p className="text-red-500 text-sm">Invalid zip-code</p>}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
                    >
                        Send for free consultation
                    </button>
                </form>
            )}
        </div>
    );
};

export default Form;