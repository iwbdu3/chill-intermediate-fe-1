interface BadgeProps {
  children: React.ReactNode;
}

const Badge = ({ children }: BadgeProps) => (
  <div className="flex items-center justify-center sm:px-2.5 px-1.5 sm:py-2.5 py-1.5 border border-white/50 rounded-full text-white text-[10px] sm:text-xs font-normal">
    {children}
  </div>
);
export default Badge;
