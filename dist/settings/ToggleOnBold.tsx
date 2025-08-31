import React from 'react';

export interface ToggleOnBoldProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ToggleOnBold: React.FC<ToggleOnBoldProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.65 3.86011H7.35C3.25 3.86011 2 5.11011 2 9.21011V14.7901C2 18.8901 3.25 20.1401 7.35 20.1401H16.65C20.75 20.1401 22 18.8901 22 14.7901V9.21011C22 5.11011 20.75 3.86011 16.65 3.86011ZM18.74 13.1201C18.74 15.3701 17.69 16.4201 15.44 16.4201H13.21C10.96 16.4201 9.91 15.3701 9.91 13.1201V10.8901C9.91 8.64011 10.96 7.59011 13.21 7.59011H15.44C17.69 7.59011 18.74 8.64011 18.74 10.8901V13.1201Z" fill={color}/>
</svg>

  );
};

export default ToggleOnBold;
