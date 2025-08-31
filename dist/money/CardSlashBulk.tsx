import React from 'react';

export interface CardSlashBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CardSlashBulk: React.FC<CardSlashBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M21.9999 9V16.46C21.9999 18.75 20.1399 20.6 17.8499 20.6H6.3999L9.9699 17.03L11.2499 15.75L17.9999 9H21.9999Z" fill={color}/>
<path opacity="0.4" d="M15 9L4 20C2.8 19.28 2 17.96 2 16.46V9H15Z" fill={color}/>
<path d="M22 7.54003V9.00003H18L21.47 5.53003C21.81 6.12003 22 6.81003 22 7.54003Z" fill={color}/>
<path d="M20 4.00002L15 9.00002H2V7.54002C2 5.25002 3.86 3.40002 6.15 3.40002H17.85C18.64 3.40002 19.37 3.62002 20 4.00002Z" fill={color}/>
<path d="M8.21 15.79L6.75 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.07 15.75 8.14 15.76 8.21 15.79Z" fill={color}/>
<path d="M15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25H10.5C10.3 17.25 10.11 17.16 9.96997 17.03L11.25 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5Z" fill={color}/>
<path d="M21.7699 2.23C21.4699 1.93 20.9799 1.93 20.6799 2.23L2.22988 20.69C1.92988 20.99 1.92988 21.48 2.22988 21.78C2.37988 21.92 2.56988 22 2.76988 22C2.96988 22 3.15988 21.92 3.30988 21.77L21.7699 3.31C22.0799 3.01 22.0799 2.53 21.7699 2.23Z" fill={color}/>
</svg>

  );
};

export default CardSlashBulk;
