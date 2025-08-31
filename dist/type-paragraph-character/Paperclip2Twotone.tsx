import React from 'react';

export interface Paperclip2TwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Paperclip2Twotone: React.FC<Paperclip2TwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3301 12.15L9.86005 14.62C8.49005 15.99 8.49005 18.2 9.86005 19.57C11.2301 20.94 13.4401 20.94 14.8101 19.57L18.7001 15.68C21.4301 12.95 21.4301 8.51004 18.7001 5.78004C15.9701 3.05004 11.5301 3.05004 8.80005 5.78004L4.56005 10.02C2.22005 12.36 2.22005 16.16 4.56005 18.51" stroke="#00B2E3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default Paperclip2Twotone;
