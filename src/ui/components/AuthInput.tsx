interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const AuthInput = ({ label, ...props }: InputProps) => (
  <div>
    <label className="block mb-1 sm:mb-1.5 text-[10px] sm:text-[14px]">
      {label}
    </label>
    <input
      {...props}
      className="w-full bg-transparent border border-gray-600 rounded-full px-3 sm:px-5 py-2 sm:py-3.5 text-[10px] sm:text-[14px] focus:outline-none focus:border-gray-400 transition-all"
    />
  </div>
);

export default AuthInput;