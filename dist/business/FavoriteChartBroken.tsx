import React from 'react';

export interface FavoriteChartBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const FavoriteChartBroken: React.FC<FavoriteChartBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.32996 14.49L9.70996 11.4C10.05 10.96 10.68 10.88 11.12 11.22L12.95 12.66C13.39 13 14.02 12.92 14.36 12.49L16.67 9.51001" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.55 16.9799C20.25 16.9299 19.89 16.6599 19.75 16.3799L19.47 15.8099C18.93 14.7199 18.05 14.7199 17.52 15.8099L17.24 16.3799C17.1 16.6599 16.75 16.9199 16.44 16.9799L16.06 17.0399C14.92 17.2299 14.65 18.0699 15.47 18.8999L15.82 19.2499C16.05 19.4899 16.1799 19.9499 16.1099 20.2699L16.06 20.4799C15.75 21.8599 16.48 22.3899 17.68 21.6699L17.94 21.5199C18.25 21.3399 18.75 21.3399 19.06 21.5199L19.32 21.6699C20.53 22.3999 21.26 21.8599 20.94 20.4799L20.89 20.2699" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default FavoriteChartBroken;
