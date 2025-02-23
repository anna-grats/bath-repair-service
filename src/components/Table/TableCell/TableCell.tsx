import React from 'react';

interface TableCellProps {
    children: React.ReactNode;
    className?: string;
}

const TableCell: React.FC<TableCellProps> = ({ children, className }) => {
    return (
        <td className={`py-2 px-4 ${className}`}>
            {children}
        </td>
    );
}

export default TableCell;
