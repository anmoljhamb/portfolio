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
    <>
      {/* Noscript fallback for crawlers and users without JS */}
      <noscript>
        <meta httpEquiv="refresh" content="0;url=/about" />
        <div style={{ padding: "2rem", fontFamily: "sans-serif", color: "#ddd", backgroundColor: "#222831" }}>
          <h1>Anmol Jhamb — Software Engineer</h1>
          <p>
            Anmol Jhamb is a software engineer and full-stack developer based in India,
            currently working as an Associate Software Engineer in the CTO&apos;s Office at ConsultAdd.
            He is a Google Code-in 2019 Grand Prize Winner and an ICPC 2024 Regionalist.
          </p>
          <p>
            <a href="/about" style={{ color: "#f05454" }}>View Portfolio →</a>
          </p>
        </div>
      </noscript>
      <div className="w-screen h-screen bg-dark flex justify-center items-center">
        <ClientOnlyGridLoader />
      </div>
    </>
  );
}
