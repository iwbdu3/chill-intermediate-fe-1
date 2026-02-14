import { useState } from "react";
import { genres, helps } from "../../const/footer";
import Logo from "../../assets/images/Logo.png";
import { ChevronRight, ChevronDown } from "lucide-react";

const Footer = () => {
  // State untuk mengontrol bagian mana yang terbuka di mobile
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    // Jika bagian yang diklik sudah terbuka, tutup. Jika tidak, buka yang baru.
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-[#181A1C] border-t border-gray-800 mt-10 pb-10">
      <div className="px-5 sm:px-20 grid grid-cols-1 sm:grid-cols-12 gap-10 text-white my-10">
        {/* Brand Section */}
        <div className="sm:col-span-4 flex flex-col gap-4 sm:gap-6.5 justify-center">
          <img src={Logo} alt="Logo Chill" className="w-24 sm:w-32" />
          <p className="text-gray-400 text-xs font-normal sm:text-sm">
            © 2023 Chill. All rights reserved.
          </p>
        </div>

        {/* Genre Section */}
        <div className="sm:col-span-6">
          <div
            onClick={() => toggleSection("genre")}
            className="flex justify-between items-center sm:block cursor-pointer sm:cursor-default"
          >
            <h3 className="font-medium sm:font-bold sm:mb-4 text-[16px]">
              Genre
            </h3>
            <div className="sm:hidden">
              {openSection === "genre" ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={20} />
              )}
            </div>
          </div>

          <ul
            className={`
            ${openSection === "genre" ? "flex" : "hidden"} 
            sm:grid grid-cols-4 flex-col gap-y-2 text-gray-400 text-xs sm:text-sm mt-4 sm:mt-0
          `}
          >
            {genres.map((genre) => (
              <li
                key={genre}
                className="hover:text-white cursor-pointer transition"
              >
                {genre}
              </li>
            ))}
          </ul>
        </div>

        {/* Help Section */}
        <div className="sm:col-span-2">
          <div
            onClick={() => toggleSection("help")}
            className="flex justify-between items-center sm:block cursor-pointer sm:cursor-default"
          >
            <h3 className="font-medium sm:mb-4 text-[16px] sm:text-lg">
              Bantuan
            </h3>
            <div className="sm:hidden">
              {openSection === "help" ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={20} />
              )}
            </div>
          </div>

          <ul
            className={`
            ${openSection === "help" ? "flex" : "hidden"} 
            sm:flex flex-col gap-2 text-gray-400 text-xs sm:text-sm mt-4 sm:mt-0
          `}
          >
            {helps.map((help) => (
              <li
                key={help}
                className="hover:text-white cursor-pointer transition"
              >
                {help}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
