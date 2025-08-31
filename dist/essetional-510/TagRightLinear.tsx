import React from 'react';

export interface TagRightLinearProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TagRightLinear: React.FC<TagRightLinearProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.22013 3.09998H15.6601C16.3401 3.09998 17.1901 3.56998 17.5501 4.14998L21.7301 10.83C22.1301 11.48 22.0902 12.5 21.6302 13.11L16.4502 20.01C16.0802 20.5 15.2801 20.9 14.6701 20.9H4.22013C2.47013 20.9 1.41018 18.98 2.33018 17.49L5.10013 13.06C5.47013 12.47 5.47013 11.51 5.10013 10.92L2.33018 6.48998C1.41018 5.01998 2.48013 3.09998 4.22013 3.09998Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default TagRightLinear;
