import Logo from "../../assets/images/Logo.png";

interface AuthLayoutProps {
  children: React.ReactNode;
  backgroundImage: string;
}

const AuthLayout = ({ children, backgroundImage }: AuthLayoutProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image & Overlay */}
      <img
        src={backgroundImage}
        className="absolute inset-0 sm:w-full h-full object-cover"
        alt="bg"
      />
      <div className="absolute inset-0 bg-black/20" />

      {/* Auth Card */}
      <div className="relative z-10 w-75 sm:w-120 bg-[#181A1C]/84 p-6 sm:p-10 rounded-xl text-white text-center">
        <img src={Logo} className="w-24 sm:w-34 mx-auto mb-5" alt="logo" />
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;