import React from "react";
import classNames from "classnames";
import CSS from "./ourclients.module.scss";
import GradualSpacing from "../magicui/gradual-spacing";
import { useInView } from "react-intersection-observer";
import logo from "@/static/logo/logo.png";
import FlickeringGrid from "../magicui/flickering-grid";
import { Col, Row } from "antd";
import Image from "next/image";
import one from "./assets/1.png";
import two from "./assets/2.png";
import three from "./assets/3.png";
import four from "./assets/4.png";
import five from "./assets/5.png";
import six from "./assets/6.png";
import seven from "./assets/7.png";
import eight from "./assets/8.png";
import nine from "./assets/9.png";
import ten from "./assets/10.png";
import elevel from "./assets/11.png";
import twelve from "./assets/12.png";
import thirteen from "./assets/13.png";
import ClientBase from "../client-base/clientBase";

const OurClients = () => {
  return (
    <div>
      <span
        className={classNames(
          "pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none dark:from-white dark:to-slate-900/10 cs-tm-120",
          CSS.text_transparent_abt_brief
        )}
      >
        <GradualSpacing text="Our Esteemed Clients" />
      </span>

      <div className="mr-10 ml-10">
        <div className="relative mt-10 h-[500px] rounded-lg w-full bg-transparent overflow-hidden">
          <FlickeringGrid
            className="z-0 absolute inset-0 size-full w-full"
            squareSize={2}
            gridGap={12}
            color="#76ABAE"
            maxOpacity={0.5}
            flickerChance={0.5}
            height={800}
          />

          <Row>
            <Col xs={12} xl={4}>
              <Image height={300} src={one} alt="" />
            </Col>

          <Col xs={12} xl={4}>
              <Image height={300} src={two} alt="" />
            </Col>

          <Col xs={12} xl={4}>
              <Image height={300} src={three} alt="" />
            </Col>

          <Col xs={12} xl={4}>
              <Image height={300} src={four} alt="" />
            </Col>

          <Col xs={12} xl={4}>
              <Image height={300} src={five} alt="" />
            </Col>

          <Col xs={12} xl={4}>
              <Image height={300} src={six} alt="" />
            </Col>

          <Col xs={12} xl={4}>
              <Image height={300} src={seven} alt="" />
            </Col>

          <Col xs={12} xl={4}>
              <Image height={300} src={eight} alt="" />
            </Col>

          <Col xs={12} xl={4}>
              <Image height={300} src={nine} alt="" />
            </Col>

          <Col xs={12} xl={4}>
              <Image height={300} src={ten} alt="" />
            </Col>

          <Col xs={12} xl={4}>
              <Image height={300} src={elevel} alt="" />
            </Col>

          <Col xs={12} xl={4}>
              <Image height={300} src={twelve} alt="" />
            </Col>

          <Col xs={12} xl={4}>
              <Image height={300} src={thirteen} alt="" />
            </Col>
          </Row>
        </div>
        <ClientBase />
      </div>
    </div>
  );
};

export default OurClients;
