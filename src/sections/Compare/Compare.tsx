import React from 'react';
import Section from '../Section';

const data = [
    { method: "Odorless", armoglaze: true, text: 'Yes', spray: "No" },
    { method: "Non-Toxic", armoglaze: true, text: 'Yes', spray: "Very toxic" },
    { method: "Without leaving home", armoglaze: true, text: 'Yes', spray: "No" },
    { method: "Dust", armoglaze: true, text: 'No', spray: "A lot" },
    { method: "Need exhaust system", armoglaze: true, text: 'No', spray: "Yes" },
    { method: "Thickness", armoglaze: true, text: "1/16 inch = 1.5mm", spray: "1/160 = 0.15mm" },
    { method: "Durability", armoglaze: true, text: "15-20 years", spray: "2-5 years" },
    { method: "Bathtub mat with suction cups", armoglaze: true, text: "Yes", spray: "No" },
    { method: "Peeling if dripping faucet", armoglaze: true, text: "No", spray: "Yes (in 2-3 weeks)" },
];

interface Headers {
    "method": string;
    "armoglaze": string;
    "spray": string;
}
interface Compare {
    title: string;
    tableHeaders: Headers;
}

interface CompareProps {
    compare: any; 
  }
const Compare: React.FC<CompareProps> = ({ compare }) => {
    return (
        <Section id='Comparison' py={12} bg='#F4F7FA'>
            <div className="max-w-[777px] mx-auto rounded-3xl p-6 lg:p-8">
                <h2 className="text-[40px] font-semibold leading-[48px] text-center text-gray-900 mb-8">
                    {compare.title}
                </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                        <tr>
                            <th className="py-2 px-4 text-left font-light text-[#9A9A9A]">{compare.tableHeaders.method}</th>
                            <th className="py-2 px-4 text-left bg-white rounded-tl-3xl font-semibold text-gray-600">{compare.tableHeaders.armoglaze}</th>
                            <th className="py-2 px-4 text-left bg-white rounded-tr-3xl font-semibold text-gray-600">{compare.tableHeaders.spray}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {compare.data.map(({method, armoglaze, spray, text}, index) => (
                            <tr key={index}>
                                <td className={`py-2 px-4 text-[#9A9A9A]`}>{method}</td>
                                <td className={`py-2 px-4 bg-white text-primary text-left ${index === data.length - 1 ? 'rounded-bl-3xl' : ''}`}>
                                    {armoglaze === true && text && (
                                        <>
                                            <img src={`/assets/icons/like.svg`} alt={method}
                                                 className="inline w-[24px] h-[24px] mr-2"/>
                                            {text}
                                        </>
                                    )}
                                    {armoglaze === false && "No"}
                                    {typeof armoglaze === "string" && armoglaze}
                                </td>
                                <td className={`py-2 px-4 bg-white text-[#696E71] ${index === data.length - 1 && 'rounded-br-3xl'}`}>{spray}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Section>
    );
}

export default Compare;
