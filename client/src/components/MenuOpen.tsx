import { RiCloseFill } from "react-icons/ri";

type Props = { open: boolean; setOpen(arg0: boolean): void };

export default function MenuOpen({ open, setOpen }: Props) {
  return (
    <div
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
  );
}
