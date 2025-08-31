import React from 'react';

export interface LocationTickBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const LocationTickBroken: React.FC<LocationTickBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.25 11.5L10.75 13L14.75 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.97996 4.29994C10.35 0.189939 18.82 1.59994 20.38 8.50994C21.53 13.5899 18.37 17.8899 15.6 20.5499C13.59 22.4899 10.41 22.4899 8.38996 20.5499C5.62996 17.8799 2.45996 13.5799 3.61996 8.49994" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default LocationTickBroken;
