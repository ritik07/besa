"use client";

import { useState } from "react";
import Meteors from "@/components/magicui/meteors";
import Particles from "@/components/magicui/particles";
import TextRevealByWord from "@/components/magicui/text-reveal";
import Image from "next/image";
import Ripple from "@/components/magicui/ripple";
import HomePage from "@/pages/home/page";

export default function Home() {
  // const [color, setColor] = useState("#ffffff");

  // return (
  //   <div className="relative flex h-[86.6vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black md:shadow-xl">
  //     <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
  //       COMING SOON
  //     </span>
  //     <Particles
  //       className="absolute inset-0"
  //       quantity={200}
  //       ease={80}
  //       size={1}
  //       staticity={10}
  //       color={color}
  //       refresh={true}
  //     />
  //   </div>
  // );
  return (
    <div>
      <HomePage />
    </div>
  );
}
