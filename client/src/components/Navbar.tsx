import { useEffect, useRef, useState } from "react";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import { Logo } from "../assets";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const dropDown = useRef<HTMLDivElement>(null);
  useEffect(() => {}, [open]);

  return (
    <>
      <div
        ref={dropDown}
        className={`fixed transition-all duration-500 ease-in-out bg-bgColor w-screen z-20 h-screen ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-24 w-full p-4 flex flex-row justify-end">
          <button
            className="text-5xl transition-all duration-300 hover:scale-105 hover:text-brand"
            onClick={() => setOpen(false)}
          >
            <RiCloseFill />
          </button>
        </div>
      </div>
      <nav className="w-screen h-24 p-4 flex flex-row justify-between items-center bg-bgColor">
        <div className="flex flex-row items-center gap-2">
          <img src={Logo} alt="" />
          <h1 className="font-bold text-3xl tracking-[2px]">Portfolio</h1>
        </div>
        <button className="hidden group text-brand rounded-lg border-2 border-brand hover:text-text hover:bg-brand hover:rounded-none md:flex md:flex-row text-3xl justify-center items-center p-2 gap-2 duration-300 ease-in-out transition-all font-semibold">
          <FaGithub />
          <p className="transition-all ease-in-out duration-300 tracking-normal group-hover:tracking-wide">
            Github
          </p>
        </button>
        <button
          className="text-5xl transition-all duration-300 hover:scale-105 hover:text-brand md:hidden"
          onClick={() => setOpen(true)}
        >
          <RiMenu3Fill />
        </button>
      </nav>
    </>
  );
}

export default Navbar;
