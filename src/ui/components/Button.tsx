interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  icon?: React.ElementType;
  className?: string;
}

const Button = ({
  children,
  variant = "primary",
  icon: Icon,
  className = "",
}: ButtonProps) => {
  const variants = {
    primary: "bg-[#19229D] hover:bg-blue-800 text-white",
    secondary: "bg-[#22282E]/80 hover:bg-[#22282E] text-white backdrop-blur-md",
    outline: "border border-white/50 text-white hover:bg-white/10",
  };

  return (
    <button
      className={`flex items-center justify-center gap-1.5 rounded-full font-bold transition-all sm:text-sm text-xs sm:px-6 px-4 sm:py-2.5 py-1.5 ${variants[variant]} ${className}`}
    >
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );
};

export default Button;
