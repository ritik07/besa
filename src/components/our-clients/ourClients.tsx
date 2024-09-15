import React from "react";
import classNames from "classnames";
import CSS from "./ourclients.module.scss";
import GradualSpacing from "../magicui/gradual-spacing";
import { useInView } from "react-intersection-observer";
import logo from "@/static/logo/logo.png";
import FlickeringGrid from "../magicui/flickering-grid";

const OurClients = () => {
  return (
    <div>
      <span
        className={classNames(
          "pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none dark:from-white dark:to-slate-900/10 cs-tm-120",
          CSS.text_transparent_abt_brief
        )}
      >
        <GradualSpacing
          className="sm:text-[22px] font-semibold"
          text="Our esteemed clients"
        />
      </span>

      {/* <div className="relative h-[500px] rounded-lg w-full bg-transparent overflow-hidden">
        <FlickeringGrid
          className="z-0 absolute inset-0 size-full w-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.5}
          height={800}
        />
      </div> */}
    </div>
  );
};

export default OurClients;
