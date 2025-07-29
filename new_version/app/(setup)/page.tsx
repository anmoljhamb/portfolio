"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";
import { GridLoader } from "react-spinners";
import { APP_LOADING_TIMER } from "@/app/constants";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      redirect("/about");
    }, APP_LOADING_TIMER);
  }, []);

  return (
    <div className="w-screen h-screen bg-dark flex justify-center items-center">
      <GridLoader loading size={90} speedMultiplier={0.8} color="#f05454" />
    </div>
  );
}
