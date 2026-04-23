import React from 'react'

type ButtonProps = {
  text?: string;        
  width?: string;             
  height?: string;             
  bgColor?: string;            
  textColor?: string;          
  rounded?: string;
  icon?: React.ReactNode;            
  onClick?: () => void;        
  className?: string;          
};

const Button: React.FC<ButtonProps> = ({
    text,
    width,
    height = 'h-12',
    bgColor = 'transparent',
    textColor = 'text-black',
    rounded,
    icon,
    onClick,
    className = "",
}) => {
    return(
        <button 
        className={`${width} ${height} ${bgColor} ${textColor} ${rounded} ${className}`}
        onClick={onClick}
        >
            {text} {icon}
        </button>
    )
}

export default Button
