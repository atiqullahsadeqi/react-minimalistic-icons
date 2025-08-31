import React from 'react';

export interface PenTool2BrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PenTool2Broken: React.FC<PenTool2BrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7501 22.5H13.2701C14.2301 22.5 14.8501 21.82 14.6701 20.99L14.2601 19.1801H9.76007L9.35008 20.99C9.17008 21.77 9.85007 22.5 10.7501 22.5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.2201 12.6701L13.17 11.34C12.53 10.53 11.48 10.53 10.84 11.34L7.79004 15.21C7.02004 16.18 7.02005 16.81 8.03005 17.64L9.76004 19.1801" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.26 19.17L15.99 17.63C16.96 16.77 17 16.17 16.23 15.2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.01 11.12V13.65" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.52 5H11.52C10.97 5 10.52 4.55 10.52 4V3C10.52 2.45 10.97 2 11.52 2H12.52C13.07 2 13.52 2.45 13.52 3V4C13.52 4.55 13.07 5 12.52 5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.27002 14.17H4.27002C4.82002 14.17 5.27002 13.72 5.27002 13.17V12.17C5.27002 11.62 4.82002 11.17 4.27002 11.17H3.27002C2.72002 11.17 2.27002 11.62 2.27002 12.17V13.17C2.27002 13.72 2.72002 14.17 3.27002 14.17Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.73 14.17H19.73C19.18 14.17 18.73 13.72 18.73 13.17V12.17C18.73 11.62 19.18 11.17 19.73 11.17H20.73C21.28 11.17 21.73 11.62 21.73 12.17V13.17C21.73 13.72 21.28 14.17 20.73 14.17Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.75 11.17C3.75 9.19998 4.49001 7.40999 5.71001 6.04999" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5199 3.56C9.87993 3.64 9.25992 3.79001 8.66992 4.01001" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.25 11.17C20.25 7.24998 17.31 4.03 13.52 3.56" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default PenTool2Broken;
