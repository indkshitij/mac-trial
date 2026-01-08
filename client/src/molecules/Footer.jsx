import React from "react";
import Logo from "../atoms/Logo";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand */}
          <Logo/>

          {/* Links */}
          <div className="flex space-x-6">
            {[
              { path: "/", name: "Home" },
              { path: "/about", name: "About" },
              { path: "/contact", name: "Contact" },
            ].map((item) => {
              return (
                <a
                  href={item.path}
                  className="text-white hover:text-white/80"
                >
                  {item.name}
                </a>
              );
            })}
           
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/80 my-6"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-300">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
