import { RiCloseFill } from "react-icons/ri";

type Props = { open: boolean; setOpen(arg0: boolean): void };

type MenuProps = {
  title: string;
  url: string;
  active?: boolean;
};

function MenuLink(props: MenuProps) {
  return (
    <li className="text-text-primary text-3xl xxs:text-4xl xs:text-5xl group lowercase font-medium">
      <a href={props.url} className="flex flex-row">
        <p className={`text-brand mr-1`}>#</p>
        <p
          className={`${
            props.active
              ? "text-text-primary tracking-wider cursor-default"
              : "text-text-secondary"
          } group-hover:text-text-primary transition-all group-hover:tracking-wider duration-300 ease-in-out`}
        >
          {props.title}
        </p>
      </a>
    </li>
  );
}

export default function MenuOpen({ open, setOpen }: Props) {
  return (
    <div
      className={`fixed transition-all duration-500 ease-in-out bg-bgColor w-screen z-20 h-screen ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        className="absolute top-6 right-4 text-5xl transition-all duration-300 hover:scale-105 hover:text-brand"
        onClick={() => setOpen(false)}
      >
        <RiCloseFill />
      </button>
      <ul className="absolute w-3/4 sm:w-2/3 max-w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4">
        <MenuLink title="home" url="/" active />
        <MenuLink title="works" url="/" />
        <MenuLink title="about-me" url="/" />
        <MenuLink title="contact-me" url="/" />
        <MenuLink title="Home" url="/" />
      </ul>
    </div>
  );
}
