import { useState } from "react";
import MiniLogo from "../../assets/images/MiniLogo.png";
import Logo from "../../assets/images/Logo.png";
import UserImg from "../../assets/images/User.png"; 
import { User, Star, LogOut } from "lucide-react"; 
import { NavLink } from "react-router";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center bg-[#181A1C] sm:py-6.25 sm:px-20 py-1.5 px-5 text-white sm:text-[18px] text-[10px] font-medium z-50">
      <div className="flex items-center gap-4 sm:gap-20">
        <div>
          <img src={MiniLogo} alt="Logo" className="sm:hidden w-5" />
          <img src={Logo} alt="" className="hidden sm:block w-26" />
        </div>

        <ul className="flex gap-4 sm:gap-20">
          <li className="cursor-pointer hover:text-gray-300">Series</li>
          <li className="cursor-pointer hover:text-gray-300">Film</li>
          <li className="cursor-pointer hover:text-gray-300">Daftar Saya</li>
        </ul>
      </div>

      {/* Bagian Kanan: Profile Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 focus:outline-none"
        >
          <img
            src={UserImg}
            alt="profile"
            className="w-5 sm:w-10 rounded-full border border-gray-600 shadow-sm"
          />
          <span
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""} text-xs sm:text-xl`}
          >
            ▾
          </span>
        </button>

        {isOpen && (
          <>
            {/* Overlay untuk menutup saat klik luar */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            ></div>

            {/* Menu Dropdown */}
            <div className="absolute right-0 sm:mt-3.75 mt-2 w-32 sm:w-42 bg-[#181A1C] border border-gray-700 rounded-md z-20 overflow-hidden">
              <ul className="flex flex-col text-[10px] sm:text-[14px]">
                {/* Profil Saya */}
                <li className="flex items-center gap-2 px-3 py-2.5 hover:bg-[#25282c] cursor-pointer border-b border-gray-800 transition-colors">
                  <User size={16} className="text-white fill-white" />
                  <span>Profil Saya</span>
                </li>

                {/* Ubah Premium */}
                <li className="flex items-center gap-2 px-3 py-2.5 hover:bg-[#25282c] cursor-pointer border-b border-gray-800 transition-colors">
                  <Star size={16} className="text-white fill-white" />
                  <span>Ubah Premium</span>
                </li>

                {/* Keluar */}
                <li className="flex items-center gap-2 px-3 py-2.5 hover:bg-[#25282c] cursor-pointer font-bold transition-colors">
                  <LogOut size={16} />
                  <NavLink to="/login">Keluar</NavLink>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
