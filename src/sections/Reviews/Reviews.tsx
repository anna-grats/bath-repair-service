"use client";
import React, { useEffect } from 'react';
import Section from '../Section';

const Reviews = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.setAttribute('data-use-service-core', '');
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const containerStyle = {
        maxWidth: '100%',
        overflow: 'hidden',
    };

    const appStyle = {
        width: '100%',
        maxWidth: '100%',
    };

    return (
        <Section id='Reviews' py={12} mt={10}>
            <div style={containerStyle}>
                <div
                    className="elfsight-app-915d8d1c-a998-4282-a755-a141223789d6"
                    data-elfsight-app-lazy
                    style={appStyle}
                ></div>
            </div>
        </Section>
    );
}

export default Reviews;
