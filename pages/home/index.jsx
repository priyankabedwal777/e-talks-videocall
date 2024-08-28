
import React from "react";
import { Inter } from 'next/font/google'
import EasyCampusEtalks from "@/components/etalks";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Homeindex() {

  return (
    <>
    <main className={`${inter.variable}  flex min-h-screen flex-col w-[100%]`}>
      <EasyCampusEtalks/>
    </main>
    </>
  );
}
