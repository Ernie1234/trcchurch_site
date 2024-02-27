import { Link, useParams } from "react-router-dom";
import { navLinks } from "../constants/data";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useParams().path;
  console.log(pathname);

  const toggleFn = () => {
    setIsOpen((prev) => !prev);
  };
  const closeFn = () => {
    setIsOpen(false);
  };

  return (
    <>
      {" "}
      <nav className="w-full sticky top-0 z-50 shadow-md bg-white">
        <div className="max-w-screen-lg w-full mx-auto my-0 flex justify-between items-center">
          <Link to="/" className="flex items-center self-stretch ">
            <img alt="Logo" src="/assets/Logo.png" className="w-8" />
          </Link>
          <ul className="flex items-center self-stretch ">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.url}
                className={`pathname === link.url ? 'text-rose-500' : 'text-black'`}
              >
                {link.title}
              </Link>
            ))}
          </ul>
          <div className="flex gap-3">
            <div className="block md:hidden text-rose-500">
              <Menu size={35} onClick={toggleFn} />
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="bg-linear  h-screen fixed top-0 left-0 right-0 z-[100] opacity-100 w-screen transition-all duration-300">
          <div
            className="bg-rose-300 text-white p-2 rounded-[50%] flex justify-center items-center absolute left-[50%] top-[10%] transform-[translate(-50%, -50%)] cursor-pointer transition-all duration-300 "
            onClick={closeFn}
          >
            <X size={40} />
          </div>

          <ul className="absolute top-[50%] left-[50%] transform-[translate(-50%, -50%)] list-none text-center w-full">
            {navLinks.map((link, i) => (
              <Link
                key={link.title}
                to={link.url}
                onClick={closeFn}
                className={`${pathname === link.url}
                    ? ' text-black uppercase bg-rose-300 transition-all duration-300'
                    : ' text-white ' py-1 px-2 inline-block text-5xl font-bold `}
              >
                <span>{i + 1}</span>
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default NavBar;
