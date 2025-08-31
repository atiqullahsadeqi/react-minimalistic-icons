import React from 'react';

export interface TreeLinearProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TreeLinear: React.FC<TreeLinearProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.1701 10.0599H7.83007C6.65007 10.0599 6.24007 9.26994 6.93007 8.30994L11.1001 2.46995C11.5901 1.76995 12.4101 1.76995 12.8901 2.46995L17.0601 8.30994C17.7601 9.26994 17.3501 10.0599 16.1701 10.0599Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5901 17.9999H6.4201C4.8401 17.9999 4.3001 16.9499 5.2301 15.6699L9.22009 10.0599H14.7901L18.7801 15.6699C19.7101 16.9499 19.1701 17.9999 17.5901 17.9999Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22V18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default TreeLinear;
