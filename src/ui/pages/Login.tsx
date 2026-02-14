import { EyeOff } from "lucide-react";
import { NavLink } from "react-router";
import LoginImg from "../../assets/images/Login.png";
import AuthLayout from "../container/AuthLayout";
import AuthInput from "../components/AuthInput";

function Login() {
  return (
    <AuthLayout backgroundImage={LoginImg}>
      <h3 className="text-lg sm:text-2xl font-bold">Masuk</h3>
      <p className="text-[10px] sm:text-[14px] font-normal text-gray-400 mb-5">
        Selamat datang kembali!
      </p>

      <form className="text-left space-y-5">
        <AuthInput
          label="Username"
          type="text"
          placeholder="Masukkan username"
        />

        <div className="relative">
          <AuthInput
            label="Kata Sandi"
            type="password"
            placeholder="Masukkan kata sandi"
          />
          <EyeOff
            className="absolute right-4 sm:right-5 top-7 sm:top-11 text-gray-500 cursor-pointer"
            size={16}
          />
        </div>

        <div className="flex justify-between text-[10px] sm:text-[14px] mb-5">
          <span>
            Belum punya akun?{" "}
            <NavLink to="/register" className="font-bold hover:underline">
              Daftar
            </NavLink>
          </span>
          <span className="cursor-pointer hover:underline">
            Lupa kata sandi?
          </span>
        </div>

        <div className="gap-2 flex flex-col">
          <NavLink
            to="/"
            className="w-full bg-gray-700 py-2 sm:py-3.5 rounded-full font-semibold text-[10px] sm:text-[14px] text-center block hover:bg-gray-600 transition-colors"
          >
            Masuk
          </NavLink>

          <p className="text-center text-gray-500 font-medium text-[10px] sm:text-[14px]">
            Atau
          </p>

          <NavLink
            to="/"
            className="w-full border border-gray-600 py-2 sm:py-3.5 rounded-full flex justify-center items-center gap-2 text-[10px] sm:text-[14px] font-semibold hover:bg-white/5 transition-colors"
          >
            <img
              src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
              className="w-3"
              alt="google-icon"
            />
            Masuk dengan Google
          </NavLink>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Login;
