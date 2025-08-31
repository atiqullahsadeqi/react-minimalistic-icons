import React from 'react';

export interface ConvertTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ConvertTwotone: React.FC<ConvertTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.005 21.9842C17.5164 21.9842 21.9842 17.5163 21.9842 12.005C21.9842 6.4936 17.5164 2.02576 12.005 2.02576C6.49363 2.02576 2.02579 6.4936 2.02579 12.005C2.02579 17.5163 6.49363 21.9842 12.005 21.9842Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.4" d="M6.13672 4.02148L14.2997 12.2044L14.3197 7.6639" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.4" d="M17.8626 19.9786L9.69965 11.8057L9.67969 16.3362" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default ConvertTwotone;
