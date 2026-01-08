import Logo from "../atoms/Logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {[
              { path: "/", name: "Home" },
              { path: "/about", name: "About" },
              { path: "/contact", name: "Contact" },
            ].map((item, index) => (
              <a
                href={item.path}
                key={index}
                className="text-white/95 hover:text-white/80"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {[
              { path: "/", name: "Home" },
              { path: "/about", name: "About" },
              { path: "/contact", name: "Contact" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="block py-2 text-white/95 hover:text-white/80"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
