import React from 'react';

export interface SpeakerBoldProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SpeakerBold: React.FC<SpeakerBoldProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 1.62H9C5.81 1.62 4.62 2.81 4.62 6V18C4.62 21.19 5.81 22.38 9 22.38H15C18.19 22.38 19.38 21.19 19.38 18V6C19.38 2.81 18.19 1.62 15 1.62ZM12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5C10.5 6.67 11.17 6 12 6ZM12 18C10.34 18 9 16.66 9 15C9 13.34 10.34 12 12 12C13.66 12 15 13.34 15 15C15 16.66 13.66 18 12 18Z" fill={color}/>
</svg>

  );
};

export default SpeakerBold;
