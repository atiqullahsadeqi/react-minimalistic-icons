import React from 'react';

export interface BrushSquareBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BrushSquareBroken: React.FC<BrushSquareBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.96997 12.94V15C1.96997 20 3.96997 22 8.96997 22H14.97C19.97 22 21.97 20 21.97 15V13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.97 2H8.96997C3.96997 2 1.96997 4 1.96997 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.51 3C19.17 2.63 19.81 2.32 20.41 2.08C20.88 1.9 21.34 2.04 21.63 2.33C21.93 2.63 22.08 3.09 21.89 3.56C20.66 6.63 17.57 10.81 14.99 12.88L13.41 14.14C13.21 14.29 13.01 14.41 12.78 14.5C12.78 14.35 12.77 14.2 12.75 14.04C12.66 13.37 12.36 12.74 11.82 12.21C11.27 11.66 10.61 11.35 9.92995 11.26C9.76995 11.25 9.60995 11.24 9.44995 11.25C9.53995 11 9.66995 10.77 9.83995 10.58L11.09 9C12.16 7.66 13.81 6.18 15.58 4.89" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.7801 14.49C12.7801 15.37 12.4401 16.21 11.8101 16.85C11.3201 17.34 10.6601 17.68 9.87009 17.78L7.90009 17.99C6.83009 18.11 5.91009 17.2 6.03009 16.11L6.24009 14.14C6.43009 12.39 7.89009 11.27 9.45009 11.24C9.61009 11.23 9.77009 11.24 9.93009 11.25C10.6101 11.34 11.2701 11.65 11.8201 12.2C12.3601 12.74 12.6601 13.36 12.7501 14.03C12.7701 14.19 12.7801 14.35 12.7801 14.49Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.82 11.98C15.82 9.89 14.13 8.19 12.03 8.19" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default BrushSquareBroken;
