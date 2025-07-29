"use client";

import { APP_LOADING_TIMER } from "@/app/constants";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const ClientOnlyGridLoader = dynamic(
  () => import("@/app/components/ClientOnlyGridLoader"),
  {
    ssr: false,
  },
);

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      redirect("/about");
    }, APP_LOADING_TIMER);
  }, []);

  return (
    <div className="w-screen h-screen bg-dark flex justify-center items-center">
      <ClientOnlyGridLoader />
    </div>
  );
}
