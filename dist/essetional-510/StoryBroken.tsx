import React from 'react';

export interface StoryBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const StoryBroken: React.FC<StoryBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.42 7.94996C18.86 10.39 18.86 14.3499 16.42 16.7899C13.98 19.2299 10.02 19.2299 7.58 16.7899C5.14 14.3499 5.14 10.39 7.58 7.94996C8.95 6.57996 10.81 5.97998 12.6 6.14998" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.24999 21.64C6.24999 20.84 4.49999 19.39 3.33999 17.38C2.19999 15.41 1.81999 13.22 2.08999 11.13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.8501 4.47998C7.5501 3.14998 9.68009 2.35999 12.0001 2.35999C14.2701 2.35999 16.3601 3.12997 18.0401 4.40997" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.75 21.64C17.75 20.84 19.5 19.39 20.66 17.38C21.8 15.41 22.18 13.22 21.91 11.13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default StoryBroken;
