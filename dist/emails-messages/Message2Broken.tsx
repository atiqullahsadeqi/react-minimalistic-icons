import React from 'react';

export interface Message2BrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Message2Broken: React.FC<Message2BrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 10.5H15.5" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 11.56V13.43C2 16.43 4 18.43 7 18.43H11L15.45 21.39C16.11 21.83 17 21.36 17 20.56V18.43C20 18.43 22 16.43 22 13.43V7.42999C22 4.42999 20 2.42999 17 2.42999H7C4 2.42999 2 4.42999 2 7.42999" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default Message2Broken;
