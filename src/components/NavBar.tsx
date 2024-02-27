import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants/data";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useLocation().pathname;

  return (
    <>
      <nav className="w-full sticky top-0 z-50 shadow-md bg-white">
        <div className="max-w-screen-xl w-full px-5 md:px-0 h-20 mx-auto my-0 flex justify-between items-center">
          <Link to="/" className="flex items-center self-stretch ">
            <img alt="Logo" src="/assets/Logo.png" className="w-12 md:w-16" />
          </Link>
          <div>
            {" "}
            <ul className="hidden md:flex items-center self-stretch">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.url}
                  className={`${
                    pathname === link.url
                      ? "border-b border-rose-500 text-rose-500 font-bold"
                      : "text-black hover:bg-rose-500 hover:text-white"
                  } py-0 px-4 font-semibold text-lg capitalize flex items-center h-full transition-all duration-300 cursor-pointer`}
                >
                  {link.title}
                </Link>
              ))}
            </ul>
            <div className="flex gap-3">
              <div className="block md:hidden text-rose-500">
                <Menu
                  size={35}
                  onClick={() => {
                    setIsOpen((prev) => !prev);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="bg-gradient-to-r from-rose-400 to-red-500 h-screen fixed top-0 left-0 right-0 z-[100] opacity-100 w-screen transition-all duration-300 flex flex-col justify-center items-center">
          <div
            className="bg-rose-300 text-white p-2 rounded-[50%] flex justify-center items-center  cursor-pointer transition-all duration-300 "
            onClick={() => setIsOpen(false)}
          >
            <X size={40} />
          </div>

          <ul className="flex flex-col justify-center items-center gap-3 list-none text-center w-full mt-20">
            {navLinks.map((link, i) => (
              <Link
                key={link.title}
                to={link.url}
                onClick={() => setIsOpen(false)}
                className={`${
                  pathname === link.url
                    ? "text-black bg-rose-50 transition-all duration-300"
                    : "text-white "
                } py-1 px-2 inline-block text-3xl font-bold capitalize`}
              >
                <span>{i + 1}</span> {link.title}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default NavBar;
