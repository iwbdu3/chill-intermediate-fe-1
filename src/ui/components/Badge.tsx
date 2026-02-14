interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "new-episode" | "top-10";
  className?: string; // Untuk fleksibilitas tambahan
}

const Badge = ({
  children,
  variant = "default",
  className = "",
}: BadgeProps) => {
  // Mapping Style berdasarkan Variant
  const variants = {
    default: "bg-transparent border-white/50 sm:py-2.5 py-1.5 sm:px-2.5 px-1.5",
    "new-episode": "bg-blue-800 border-none font-bold px-3 sm:px-4",
    "top-10":
      "bg-red-800 border-none font-bold rounded-tr-sm rounded-br-none rounded-tl-none rounded-bl-sm px-2 w-5 text-center sm:w-8 sm:px-3",
  };

  return (
    <div
      className={`
        flex items-center justify-center 
        sm:py-1 py-0.5 
        sm:px-2.5 px-1.5 
        border text-white text-[8px] sm:text-[10px] font-normal z-50 rounded-full
        ${variants[variant]} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Badge;
