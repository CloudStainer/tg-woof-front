"use client"
import Loading from "@/components/loading";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.open = (function (open) {
      return function (url, _, features) {
        return open.call(window, url, "_blank", features);
      };
    })(window.open);
  })
  return (
    <main className=" flex flex-col justify-start w-screen h-lvh">
      <Loading /> 
    </main>
  );
}
