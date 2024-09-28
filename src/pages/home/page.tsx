import React from "react";
import AboutBrief from "@/components/about-brief/aboutBrief";
import Cover from "@/components/cover/cover";
import OurClients from "@/components/our-clients/ourClients";
import CSS from "./home.module.scss";
import classNames from "classnames";
import Particles from "@/components/magicui/particles";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import ClientBase from "@/components/client-base/clientBase";

const HomePage = () => {
  const color = "#FF204E";

  return (
    <div>
      <Cover />
      <div
        className={classNames(
          "relative flex h-full w-full flex-col overflow-hidden rounded-lg bg-transperant"
        )}
      >
        <div className={classNames(CSS.about_brief_container)}>
          <AboutBrief />
          <div className={classNames("mb-[100px]")}>
            <VelocityScroll
              text="WE ARE THINKERS DESIGNERS STRATEGISTS"
              default_velocity={5}
              className="font-display mt-[100px] text-center text-4xl font-bold tracking-[-0.02em] text-white/50 drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem] bg-transperant"
            />
          </div>
        </div>

        <div className={classNames(CSS.our_clients_container)}>
          <OurClients />
        </div>

        <Particles
          className="absolute inset-0"
          quantity={180}
          ease={150}
          size={2}
          staticity={4}
          color={color}
          refresh
        />
      </div>
    </div>
  );
};

export default HomePage;
