"use client";

import Arrow from "@/app/components/Arrow";
import { useEffect, useMemo, useState } from "react";
import { allRoutes } from "./routes";
import { redirect, usePathname } from "next/navigation";

const Arrows = () => {
  const pathname = usePathname();

  const currentIndex = useMemo(() => {
    for (let index = 0; index < allRoutes.length; index++) {
      if (allRoutes[index].link === pathname) {
        return index;
      }
    }
    return 0;
  }, [pathname]);

  const handleDecrement = () => {
    if (currentIndex === 0) {
      return;
    }
    redirect(allRoutes[currentIndex - 1].link);
  };

  const handleIncrement = () => {
    if (currentIndex === allRoutes.length - 1) {
      return;
    }
    redirect(allRoutes[currentIndex + 1].link);
  };

  return (
    <>
      {currentIndex > 0 && <Arrow reverse onClick={handleDecrement} />}
      {currentIndex < allRoutes.length - 1 && (
        <Arrow onClick={handleIncrement} />
      )}
    </>
  );
};

export default Arrows;
