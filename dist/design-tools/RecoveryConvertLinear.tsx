import React from 'react';

export interface RecoveryConvertLinearProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const RecoveryConvertLinear: React.FC<RecoveryConvertLinearProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6 12.58V15.31C14.6 17.59 13.69 18.5 11.41 18.5H8.69C6.42 18.5 5.5 17.59 5.5 15.31V12.58C5.5 10.31 6.41 9.39999 8.69 9.39999H11.42C13.69 9.39999 14.6 10.31 14.6 12.58Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 8.68V11.41C18.5 13.69 17.59 14.6 15.31 14.6H14.6V12.58C14.6 10.31 13.69 9.4 11.41 9.4H9.40002V8.68C9.40002 6.4 10.31 5.5 12.59 5.5H15.32C17.59 5.5 18.5 6.41 18.5 8.68Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default RecoveryConvertLinear;
