import React from 'react';

export interface TagRightBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TagRightBulk: React.FC<TagRightBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8799 6.11997L3.92985 20.07C3.49985 20.5 2.77985 20.46 2.42985 19.97C1.92985 19.28 1.82986 18.32 2.34986 17.49L5.10985 13.06C5.47985 12.47 5.47985 11.51 5.10985 10.92L2.34986 6.48997C1.41986 5.00997 2.48985 3.08997 4.22985 3.08997H15.6798C16.3598 3.08997 17.1999 3.55997 17.5599 4.12997L18.0299 4.86997C18.2599 5.27997 18.2099 5.78997 17.8799 6.11997Z" fill={color}/>
<path opacity="0.4" d="M21.6299 13.11L16.4499 20.01C16.0899 20.5 15.2899 20.9 14.6699 20.9H7.50986C6.61986 20.9 6.16987 19.82 6.79987 19.19L18.3099 7.67999C18.7599 7.22999 19.5299 7.30999 19.8699 7.85999L21.7199 10.83C22.1299 11.47 22.0899 12.5 21.6299 13.11Z" fill={color}/>
</svg>

  );
};

export default TagRightBulk;
