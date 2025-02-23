import React from 'react';

export const TableHeader: React.FC = () => {
    return (
        <thead>
        <tr>
            <th className="py-2 px-4 text-left bg-[#F4F7FA] font-light text-[#9A9A9A]">Method</th>
            <th className="py-2 px-4 text-left bg-white rounded-tl-lg font-semibold text-gray-600">Armoglaze Pour-On</th>
            <th className="py-2 px-4 text-left bg-white rounded-tr-lg font-semibold text-gray-600">Spray method</th>
        </tr>
        </thead>
    );
}
