"use client";

import { GridLoader } from "react-spinners";

export default function ClientOnlyGridLoader() {
  return <GridLoader loading size={50} speedMultiplier={0.8} color="#f05454" />;
}
