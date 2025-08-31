import React from 'react';

export interface TicketDiscountBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TicketDiscountBroken: React.FC<TicketDiscountBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 10V9C22 5 21 4 17 4H7C3 4 2 5 2 9V9.5C3.38 9.5 4.5 10.62 4.5 12C4.5 13.38 3.38 14.5 2 14.5V15C2 19 3 20 7 20H17C21 20 22 19 22 15C20.62 15 19.5 13.88 19.5 12.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.62988 15.68L15.3599 8.95001" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.9945 14.75H15.0035" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.99451 9.25H9.00349" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default TicketDiscountBroken;
