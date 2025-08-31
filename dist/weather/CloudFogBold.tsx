import React from 'react';

export interface CloudFogBoldProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CloudFogBold: React.FC<CloudFogBoldProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.8 12H4.19999C3.97999 12 3.77999 11.85 3.70999 11.64C0.959989 2.54997 14.84 -0.940027 16.45 8.81997C18.11 9.02997 19.42 9.96997 20.23 11.23C20.44 11.56 20.19 12 19.8 12Z" fill={color}/>
<path d="M20 15.78H4C3.59 15.78 3.25 15.44 3.25 15.03C3.25 14.62 3.59 14.28 4 14.28H20C20.41 14.28 20.75 14.62 20.75 15.03C20.75 15.44 20.41 15.78 20 15.78Z" fill={color}/>
<path d="M18 18.78H6C5.59 18.78 5.25 18.44 5.25 18.03C5.25 17.62 5.59 17.28 6 17.28H18C18.41 17.28 18.75 17.62 18.75 18.03C18.75 18.44 18.41 18.78 18 18.78Z" fill={color}/>
<path d="M15 21.78H9C8.59 21.78 8.25 21.44 8.25 21.03C8.25 20.62 8.59 20.28 9 20.28H15C15.41 20.28 15.75 20.62 15.75 21.03C15.75 21.44 15.41 21.78 15 21.78Z" fill={color}/>
</svg>

  );
};

export default CloudFogBold;
