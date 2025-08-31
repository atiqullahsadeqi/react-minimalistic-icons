import React from 'react';

export interface WalletMoneyBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const WalletMoneyBroken: React.FC<WalletMoneyBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7501 16.86V18.89C10.7501 20.61 9.15011 22 7.18011 22C5.21011 22 3.6001 20.61 3.6001 18.89V16.86C3.6001 18.58 5.20011 19.8 7.18011 19.8C9.15011 19.8 10.7501 18.57 10.7501 16.86Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.7501 14.11C10.7501 14.61 10.6101 15.07 10.3701 15.47C9.78006 16.44 8.57004 17.05 7.17004 17.05C5.77004 17.05 4.56003 16.43 3.97003 15.47C3.73003 15.07 3.59009 14.61 3.59009 14.11C3.59009 13.25 3.99007 12.48 4.63007 11.92C5.28007 11.35 6.17003 11.01 7.16003 11.01C8.15003 11.01 9.04006 11.36 9.69006 11.92C10.3501 12.47 10.7501 13.25 10.7501 14.11Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.7501 14.11V16.86C10.7501 18.58 9.15011 19.8 7.18011 19.8C5.21011 19.8 3.6001 18.57 3.6001 16.86V14.11C3.6001 12.39 5.20011 11 7.18011 11C8.17011 11 9.06014 11.35 9.71014 11.91C10.3501 12.47 10.7501 13.25 10.7501 14.11Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 10.97V13.03C22 13.58 21.56 14.03 21 14.05H19.0399C17.9599 14.05 16.97 13.26 16.88 12.18C16.82 11.55 17.0599 10.96 17.4799 10.55C17.8499 10.17 18.36 9.95001 18.92 9.95001H21C21.56 9.97001 22 10.42 22 10.97Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 3.5C16.26 3.5 16.51 3.50999 16.75 3.54999C19.33 3.84999 21 5.76 21 8.5V9.95001H18.92C18.36 9.95001 17.85 10.17 17.48 10.55C17.06 10.96 16.82 11.55 16.88 12.18C16.97 13.26 17.96 14.05 19.04 14.05H21V15.5C21 18.5 19 20.5 16 20.5H13.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 10.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default WalletMoneyBroken;
