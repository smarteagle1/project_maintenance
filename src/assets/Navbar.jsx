import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const navigate=useNavigate()
  return (
    <nav className="sticky top-0 w-full z-50 bg-slate-950/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:h-full">
        <div className="grid grid-cols-1 justify-items-center md:justify-items-stretch gap-3 md:gap-0 md:grid-cols-[auto_1fr_auto] items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              onClick={()=>navigate(`/`)}
              src="/logo_gripper.jpg"
              alt="logo"
              className="rounded-full h-14 w-14 border-4 border-gray-600"
            />
          </div>

          {/* Center text */}
          <div className="text-center">
            <span className="text-lg sm:text-xl md:text-4xl font-medium">
              <span className="text-white">Assembly </span>
              <span className="text-white">Line </span>
              <span className="text-gray-500">Maintenance</span>
            </span>
          </div>

          {/* Menu / Hamburger */}
          <div className="flex items-center justify-end">
            <button aria-label="Open menu" className="text-gray-300 hover:text-white md:hidden">
              <Menu className="h-6 w-6" />
            </button>

            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-400 hover:text-white text-sm lg:text-base">
                Features
              </a>
              <a href="#login" className="text-gray-400 hover:text-white text-sm lg:text-base">
                LogIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
