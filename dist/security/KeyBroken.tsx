import React from 'react';

export interface KeyBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const KeyBroken: React.FC<KeyBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9899 2.14996C15.3699 1.68996 17.9399 2.37996 19.7899 4.21996C22.7399 7.16996 22.7399 11.98 19.7899 14.92C17.7299 16.97 14.7799 17.6 12.1899 16.79L7.4799 21.49C7.1399 21.84 6.4699 22.05 5.9899 21.98L3.8099 21.68C3.0899 21.58 2.4199 20.9 2.3099 20.18L2.0099 18C1.9399 17.52 2.1699 16.85 2.4999 16.51L3.6199 15.39L7.1899 11.82C6.3899 9.21996 7.0099 6.26996 9.0699 4.21996" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.88989 17.49L9.18989 19.79" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default KeyBroken;
