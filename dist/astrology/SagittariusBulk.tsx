import React from 'react';

export interface SagittariusBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SagittariusBulk: React.FC<SagittariusBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.6902 2.71002C21.6102 2.53002 21.4702 2.37999 21.2802 2.29999C21.1902 2.25999 21.0901 2.23999 20.9901 2.23999H11.9901C11.5801 2.23999 11.2401 2.57999 11.2401 2.98999C11.2401 3.39999 11.5801 3.73999 11.9901 3.73999H19.1801L2.46018 20.46C2.17018 20.75 2.17018 21.23 2.46018 21.52C2.61018 21.67 2.80014 21.74 2.99014 21.74C3.18014 21.74 3.37017 21.67 3.52017 21.52L20.2401 4.79999V12C20.2401 12.41 20.5801 12.75 20.9901 12.75C21.4001 12.75 21.7401 12.41 21.7401 12V3C21.7501 2.9 21.7302 2.81002 21.6902 2.71002Z" fill={color}/>
<path opacity="0.4" d="M17.4001 18.1501C17.2101 18.1501 17.02 18.08 16.87 17.93L6.07004 7.13004C5.78004 6.84004 5.78004 6.36004 6.07004 6.07004C6.36004 5.78004 6.84004 5.78004 7.13004 6.07004L17.93 16.87C18.22 17.16 18.22 17.64 17.93 17.93C17.78 18.08 17.5901 18.1501 17.4001 18.1501Z" fill={color}/>
</svg>

  );
};

export default SagittariusBulk;
