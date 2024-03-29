// import Image from "next/image";
import { Inter } from "next/font/google";
// import path from "path";
// import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        FAQ. Hello World!
      </div>
    </main>
  );
}
