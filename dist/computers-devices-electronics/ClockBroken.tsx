import React from 'react';

export interface ClockBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ClockBroken: React.FC<ClockBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 9.66V12.45L13.4 13.85" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.96 7.89C8.16 6.43 9.97 5.5 12 5.5C15.59 5.5 18.5 8.41 18.5 12C18.5 14.08 17.52 15.94 16 17.13H15.99C14.89 17.99 13.51 18.5 12 18.5C10.51 18.5 9.14 18 8.04 17.15H8.03C6.49 15.96 5.5 14.1 5.5 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.03003 17.15H8.04003C9.14003 18 10.51 18.5 12 18.5C13.51 18.5 14.89 17.99 15.99 17.13H16L15.49 19.6C15 21.5 13.9 22 12.55 22H11.46C10.11 22 9.00003 21.5 8.52003 19.59L8.03003 17.15Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.03003 6.85H8.04003C9.14003 6 10.51 5.5 12 5.5C13.51 5.5 14.89 6.01 15.99 6.87H16L15.49 4.4C15 2.5 13.9 2 12.55 2H11.46C10.11 2 9.00003 2.5 8.52003 4.41L8.03003 6.85Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default ClockBroken;
