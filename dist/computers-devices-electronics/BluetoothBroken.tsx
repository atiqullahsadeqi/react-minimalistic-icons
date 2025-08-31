import React from 'react';

export interface BluetoothBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BluetoothBroken: React.FC<BluetoothBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.95 3.39002L13.82 2.44001C12.82 1.61001 12 1.99001 12 3.29001V20.71C12 22.01 12.82 22.39 13.82 21.56L17.67 18.35C18.21 17.9 18.22 17.15 17.71 16.68L5.35999 5.35999" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.35999 18.64L17.71 7.32001C18.22 6.85001 18.21 6.09999 17.67 5.64999" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default BluetoothBroken;
