import React from 'react';

export const BenefitCard: React.FC<{ title: string, content: any, additionalClass?: string }> = ({ title, content, additionalClass }) => {
    return (
        <div className={`py-5 px-6 bg-white rounded-3xl ${additionalClass}`}>
            <h3 className="text-xl font-semibold text-primary mb-4">{title}</h3>
            <p className="text-[18px] font-light leading-[25.2px] text-left text-gray-500">
                {typeof content === 'string' ? content : (
                    <>
                        {content.firstString}
                        <span className='text-gray-800'>{content.secondaryString}</span>
                        {content.threeString}
                    </>
                )}
            </p>
        </div>
    );
}

export default BenefitCard;
