import React from 'react';

export interface Simcard2BrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Simcard2Broken: React.FC<Simcard2BrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 14.03V10.31C2 7.97001 3.56 6.42001 5.89 6.42001H9.72C10.75 6.42001 11.74 6.83001 12.47 7.56001L14.86 9.94001C15.59 10.67 16 11.66 16 12.69V18.08C16 20.42 14.44 21.97 12.11 21.97H5.89C3.56 21.97 2 20.42 2 18.08" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 8.25V13.64C22 15.97 20.44 17.53 18.11 17.53H16V12.69C16 11.66 15.59 10.67 14.86 9.94L12.47 7.56C11.74 6.83 10.75 6.42 9.72 6.42H8V5.86C8 3.53 9.56 1.97 11.89 1.97H15.72C16.75 1.97 17.74 2.38 18.47 3.11L20.86 5.5C21.59 6.23 22 7.22 22 8.25Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default Simcard2Broken;
