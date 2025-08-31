import React from 'react';

export interface TicketStarBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TicketStarBroken: React.FC<TicketStarBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.24001 15.27C2.86001 15.41 2.44001 15.49 2.01001 15.49C2.10001 19.08 3.17001 20 7.00001 20H17C21 20 22 19 22 15V9C22 5 21 4 17 4H7.00001C3.17001 4 2.10001 4.92 2.01001 8.5C3.94001 8.5 5.50001 10.07 5.50001 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 4V7.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 16.5V20" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.8599 14.21C14.7399 14.15 14.5899 14.15 14.4699 14.21L13.2399 14.86C12.9299 15.02 12.5799 14.76 12.6399 14.42L12.8799 13.05C12.8999 12.91 12.8599 12.78 12.7599 12.68L11.7699 11.71C11.5199 11.47 11.6599 11.05 11.9999 11L13.3799 10.8C13.5199 10.78 13.6299 10.7 13.6899 10.57L14.2999 9.32002C14.4499 9.01002 14.8899 9.01002 15.0399 9.32002L15.6599 10.57C15.7199 10.69 15.8399 10.78 15.9699 10.8L17.3499 11C17.6899 11.05 17.8299 11.47 17.5799 11.71L16.5799 12.68C16.4799 12.77 16.4399 12.91 16.4599 13.05" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default TicketStarBroken;
