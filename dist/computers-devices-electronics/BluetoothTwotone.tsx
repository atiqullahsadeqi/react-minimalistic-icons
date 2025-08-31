import React from 'react';

export interface BluetoothTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BluetoothTwotone: React.FC<BluetoothTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.64001 18.64L17.99 7.32001C18.5 6.85001 18.49 6.1 17.95 5.65L14.1 2.44001C13.1 1.61001 12.28 1.99001 12.28 3.29001V20.71C12.28 22.01 13.1 22.39 14.1 21.56L17.95 18.35C18.49 17.9 18.5 17.15 17.99 16.68L5.64001 5.35999" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default BluetoothTwotone;
