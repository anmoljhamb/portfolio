"use client";

import clsx from "clsx";
import { useState } from "react";

export default function MenuIcon() {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      id="nav-icon"
      className={clsx("nav-icon", { open: toggle }, "top-6 right-4")}
      onClick={() => {
        setToggle((old) => !old);
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
