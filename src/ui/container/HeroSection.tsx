import Hero from "../../assets/images/Hero.png";
import { Info, VolumeX } from "lucide-react";
import Button from "../components/Button";
import Badge from "../components/Badge";

function HeroSection() {
  return (
    <div>
      <section
        id="hero"
        className="relative w-full h-58 sm:h-130 overflow-hidden"
      >
        {/* Background Image */}
        <img
          src={Hero}
          alt="Hero After School"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradasi */}
        <div className="absolute inset-0 bg-linear-to-t from-[#181A1C] from-0% via-[#181A1C]/90 via-40% to-transparent to-100%"></div>

        {/* Konten Teks & Tombol */}
        <div className="absolute inset-0 flex flex-col justify-end px-5 sm:px-20 pb-10 sm:pb-16">
          <div className="max-w-3xl">
            <h1 className="text-white text-xl sm:text-5xl font-bold sm:mb-5 mb-3 tracking-tight">
              Duty After School
            </h1>
            <p className="text-white sm:text-lg text-xs mb-3 sm:mb-8 leading-relaxed line-clamp-2 sm:line-clamp-none opacity-90">
              Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
              Departemen Pertahanan mulai merekrut lebih banyak tentara,
              termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang
              garis depan dalam perang.
            </p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <Button>Mulai</Button>

              <Button variant="secondary">
                <Info size={16} />
                Selengkapnya
              </Button>

              <Badge>18+</Badge>
            </div>

            {/* Tombol Mute/Volume */}
            <Button variant="outline">
              <VolumeX size={16} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
