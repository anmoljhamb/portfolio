import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Logo } from "../assets";
import MenuOpen from "./MenuOpen";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MenuOpen open={open} setOpen={setOpen} />
      <nav className="w-screen h-24 p-4 flex flex-row justify-between items-center bg-bgColor">
        <div className="flex flex-row items-center gap-2">
          <img src={Logo} alt="" />
          <h1 className="font-bold text-3xl tracking-[1px]">Portfolio</h1>
        </div>
        <button
          className="text-5xl transition-all duration-300 hover:scale-105 hover:text-brand"
          onClick={() => setOpen(true)}
        >
          <RiMenu3Fill />
        </button>
      </nav>
    </>
  );
}

export default Navbar;
