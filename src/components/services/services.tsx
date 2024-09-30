import React from "react";
import CSS from "./services.module.scss";
import { Col, Row } from "antd";
import classNames from "classnames";
import OrbitingCircles from "../ui/orbiting-circles";
import GradualSpacing from "../magicui/gradual-spacing";

const Services = () => {
  const Icons = {
    web: () => <div className={CSS.orbit_txt}>Web Development</div>,
    SEO: () => <div className={CSS.orbit_txt}>SEO</div>,
    openai: () => <div className={CSS.orbit_txt}>Photography</div>,
    photography: () => <div className={CSS.orbit_txt}>Photography</div>,
    branding: () => <div className={CSS.orbit_txt}>Branding</div>,
    smm: () => <div className={CSS.orbit_txt}>Social Media Marketing</div>,
    smmm: () => <div className={CSS.orbit_txt}>Social Media Management</div>,
  };
  return (
    <div>
      <Row gutter={[10, 10]}>
        <Col xl={3}></Col>

        <Col xl={8} className={classNames("flex items-center")}>
          <div>
            <div className={classNames(CSS.title, "text-left")}>
              Our Services
            </div>

            <p className={classNames(CSS.description, "text-left")}>
              We take pride in serving clients across the globe, providing
              customized marketing solutions tailored to various markets.
            </p>
            <p className={classNames(CSS.serviceDetail, "text-left")}>
              We aim at creating brand awareness, initiate & encourage consumer
              interactions, and also look after reputation management.
            </p>
          </div>
        </Col>

        <Col xl={12}>
          <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent md:shadow-xl">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-green-600 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent">
              Services
            </span>

            {/* Inner Circles */}
            <OrbitingCircles
              className="size-[30px] border-none bg-transparent"
              duration={20}
              delay={20}
              radius={80}
            >
              <Icons.branding />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[30px] border-none bg-transparent"
              duration={20}
              delay={10}
              radius={80}
            >
              <Icons.web />
            </OrbitingCircles>

            {/* Outer Circles (reverse) */}
            <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              radius={190}
              duration={20}
              reverse
            >
              <Icons.SEO />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              radius={190}
              duration={20}
              delay={20}
              reverse
            >
              <Icons.photography />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              radius={280}
              duration={20}
              delay={10}
              reverse
            >
              <Icons.smmm />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              radius={280}
              duration={20}
              delay={20}
              reverse
            >
              <Icons.smm />
            </OrbitingCircles>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
