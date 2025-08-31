import React from 'react';

export interface FilterEditBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const FilterEditBroken: React.FC<FilterEditBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.33008 2H18.67C19.78 2 20.6901 2.90999 20.6901 4.01999V6.23999C20.6901 7.04999 20.1801 8.06 19.6801 8.56" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.41 20.7899L12.0001 21.7C10.6901 22.51 8.87006 21.5999 8.87006 19.9799V14.6299C8.87006 13.9199 8.47006 13.0099 8.06006 12.5099L4.22003 8.46994C3.71003 7.95994 3.31006 7.05995 3.31006 6.44995" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.0799 11.89L13.5399 15.43C13.3999 15.57 13.2699 15.83 13.2399 16.02L13.0499 17.37C12.9799 17.86 13.3199 18.2 13.8099 18.13L15.1599 17.94C15.3499 17.91 15.6199 17.78 15.7499 17.64L19.2899 14.1C19.8999 13.49 20.1899 12.78 19.2899 11.88C18.3999 10.99 17.6899 11.28 17.0799 11.89Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5801 12.39C16.8801 13.47 17.72 14.31 18.8 14.61" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default FilterEditBroken;
