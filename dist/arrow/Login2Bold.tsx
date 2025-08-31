import React from 'react';

export interface Login2BoldProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Login2Bold: React.FC<Login2BoldProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.76 2C10.28 2 9.90002 2.38 9.90002 2.86V11.32H13.57L12 9.75C11.71 9.46 11.71 8.98 12 8.69C12.29 8.4 12.77 8.4 13.06 8.69L15.9 11.54C16.19 11.83 16.19 12.31 15.9 12.6L13.06 15.45C12.91 15.6 12.72 15.67 12.53 15.67C12.34 15.67 12.15 15.6 12 15.45C11.71 15.16 11.71 14.68 12 14.39L13.56 12.83H9.90002V21.16C9.90002 21.63 10.28 22.02 10.76 22.02C16.65 22.02 20.76 17.91 20.76 12.02C20.76 6.13 16.64 2 10.76 2Z" fill={color}/>
<path d="M3.98999 11.32C3.57999 11.32 3.23999 11.66 3.23999 12.07C3.23999 12.48 3.57999 12.82 3.98999 12.82H9.88999V11.32H3.98999Z" fill={color}/>
</svg>

  );
};

export default Login2Bold;
