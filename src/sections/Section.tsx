import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    mt?: number;
    px?: number;
    py?: number;
    bg?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, mt, px = 4, py, bg }) => {
    const marginTopClass = mt ? `mt-${mt}` : '';
    const paddingXClass = `px-${px}`;
    const paddingYClass = py ? `py-${py}` : '';
    const backgroundClass = bg ? `bg-[${bg}]` : 'bg-[#FAFAFA]';

    return (
        <section id={id} className={`${backgroundClass} max-w-[1096px] mx-auto ${marginTopClass} ${paddingXClass} ${paddingYClass} sm:px-6 lg:px-8 rounded-3xl`}>
            {children}
        </section>
    );
}

export default Section;
