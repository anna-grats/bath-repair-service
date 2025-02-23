import React from 'react';

interface DividerProps {
    mt?: string;
    mb?: string;
    orientation?: 'horizontal' | 'vertical';
    color?: string;
    thickness?: string;
    length?: string;
    className?: string;
}

const Divider: React.FC<DividerProps> = ({
   mt = '0px',
   mb = '0px',
   orientation = 'horizontal',
   color = '#E8E8E8',
   thickness = '1px',
   length = '100%',
   className = ''
  }) => {
    const isHorizontal = orientation === 'horizontal';
    const style = {
        backgroundColor: color,
        width: isHorizontal ? length : thickness,
        height: isHorizontal ? thickness : length,
        margin: isHorizontal ? `${mt} auto ${mb}` : `${mt} 0 ${mb} 0`,
    };

    return <div className={`divider ${className}`} style={style}></div>;
};

export default Divider;
