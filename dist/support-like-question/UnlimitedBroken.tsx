import React from 'react';

export interface UnlimitedBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const UnlimitedBroken: React.FC<UnlimitedBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0001 15.77C19.2701 16.26 18.4001 16.5499 17.4601 16.5499C15.9601 16.5499 14.6501 15.8099 13.8201 14.6799" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.18 9.31995C9.35999 8.18995 8.05001 7.44995 6.54001 7.44995C4.03001 7.44995 1.98999 9.48994 1.98999 11.9999C1.98999 14.5099 4.03001 16.5499 6.54001 16.5499C8.23001 16.5499 9.80001 15.66 10.67 14.21L12 11.9999L13.32 9.78992C14.19 8.33992 15.76 7.44995 17.45 7.44995C19.96 7.44995 22 9.48994 22 11.9999" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default UnlimitedBroken;
