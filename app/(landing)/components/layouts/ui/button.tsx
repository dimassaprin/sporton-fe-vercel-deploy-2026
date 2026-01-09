import React from "react";
type TButtonProps = {children: React.ReactNode; 
    className?: string; 
    variant?: "primary" | "dark" | "ghost"; 
    size?: "normal" | "small";
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button =({
    children, 
    className, 
    variant = "primary", 
    size = "normal", 
    ...props
}: TButtonProps) => {
  const baseStyles = 
    "inline-flex items-center gap-2 duration-300 justify-center cursor-pointer hover:scale-105";
  const variants = { 
    primary: 'bg-primary text-white hover:bg-primary-dark',
    dark: 'bg-dark-alternate text-white hover:bg-black',
    ghost: 'bg-transparent text-dark-alternate hover:bg-gray-100',
} 
const sizes = {
  normal: "px-9 py-4 text-base",
  small: "px-7 py-[10px] text-sm",
} 
  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
        {children}</button>
  )
}
export default Button;