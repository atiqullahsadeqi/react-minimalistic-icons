import React from 'react';

export interface MicroscopeBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MicroscopeBulk: React.FC<MicroscopeBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.84 10.9L20.5 7.10998C21.07 6.72998 21.22 5.95001 20.84 5.39001L19.02 2.67999C18.64 2.10999 17.86 1.95999 17.3 2.33999L11.64 6.13L14.84 10.9Z" fill={color}/>
<path d="M14.52 10.42L12.76 11.6L10.09 13.39L9.74 13.62L9.58 13.38L7.34 10.04L7.18 9.79999L11.96 6.60001L14.52 10.42Z" fill={color}/>
<path d="M5.64 16.02L9.59 13.38L7.35 10.04L3.4 12.68C2.94 12.99 2.82 13.61 3.13 14.07L4.26 15.75C4.56 16.21 5.18 16.33 5.64 16.02Z" fill={color}/>
<path opacity="0.4" d="M16.56 21.81C16.46 21.85 16.35 21.88 16.25 21.88C15.96 21.88 15.69 21.71 15.56 21.43L11.83 13.19L8.05 21.44C7.92 21.71 7.65 21.88 7.36 21.88C7.26 21.88 7.15 21.85 7.05 21.81C6.68 21.63 6.51 21.19 6.68 20.81L10.09 13.39L12.76 11.6L16.93 20.82C17.1 21.19 16.93 21.64 16.56 21.81Z" fill={color}/>
</svg>

  );
};

export default MicroscopeBulk;
