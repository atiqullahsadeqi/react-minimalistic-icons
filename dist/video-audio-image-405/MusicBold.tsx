import React from 'react';

export interface MusicBoldProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MusicBold: React.FC<MusicBoldProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.89 5.17995V16.4799C20.89 18.4599 19.28 20.0699 17.3 20.0699C15.33 20.0699 13.71 18.4599 13.71 16.4799C13.71 14.5099 15.33 12.8999 17.3 12.8999C18.14 12.8999 18.89 13.1899 19.5 13.6699V7.71995L10.29 10.3399V18.4099C10.29 20.3899 8.67 21.9999 6.7 21.9999C4.72 21.9999 3.11 20.3899 3.11 18.4099C3.11 16.4399 4.72 14.8299 6.7 14.8299C7.53 14.8299 8.28 15.1199 8.89 15.5899V6.74995C8.89 5.27995 9.78 4.13995 11.19 3.75995L16.97 2.17995C18.14 1.85995 19.13 1.96995 19.83 2.50995C20.54 3.03995 20.89 3.93995 20.89 5.17995Z" fill={color}/>
</svg>

  );
};

export default MusicBold;
