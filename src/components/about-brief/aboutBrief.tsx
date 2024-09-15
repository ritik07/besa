import React, { useState } from "react";
import { Row, Col } from "antd";
import CSS from "./aboutBrief.module.scss"; // SCSS module import
import Meteors from "../magicui/meteors";
import Particles from "../magicui/particles";
import classNames from "classnames";
import BlurIn from "../magicui/blur-in";
import { useInView } from "react-intersection-observer";
import GradualSpacing from "../magicui/gradual-spacing";

const whoWeAre = [
  {
    key: 1,
    title: "Brand-Focused Media Agency",
    brief: `Based in India, we specialize in helping brands build a strong
  and impactful online presence through tailored communication
  strategies.`,
    detail: `We create tailored, data-driven strategies that help brands
  build meaningful connections with their audience, driving both
  engagement and long-term growth.`,
  },
  {
    key: 2,
    title: "Customized Social Media Campaigns",
    brief: `We craft value-driven campaigns that resonate with target audiences, going beyond traditional marketing to create genuine connections.`,
    detail: `We deliver campaigns that truly connect with audiences, elevating your brand beyond traditional marketing.`,
  },
  {
    key: 3,
    title: "Proven Results",
    brief: `Our success is defined by the impact we deliver, showcased through innovative projects that elevate brand awareness, engagement, and conversions.`,
    detail: `We achieve success through innovative projects that enhance brand visibility, interaction, and results.`,
  },
];

const AboutBrief = () => {
  const color = "#FF204E";

  const [activeRow, setActiveRow] = useState<number | null>(1);
  const [activeRowText, setActiveRowText] = useState<string | null>(
    `We create tailored, data-driven strategies that help brands
    build meaningful connections with their audience, driving both
    engagement and long-term growth.`
  );

  const handleRowClick = (rowIndex: number, detail: string) => {
    setActiveRowText(detail);
    setActiveRow(rowIndex === activeRow ? null : rowIndex); // Toggle active state
  };

  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger only once when in view
    threshold: 0.1, // Adjust to define when the section is considered in view
  });

  return (
    <div>
      <div
        className={classNames(
          "relative flex h-[600] w-full flex-col overflow-hidden rounded-lg bg-transperant"
        )}
      >
        <div
          className={classNames(
            "pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none dark:from-white dark:to-slate-900/10 cs-tm-120",
            CSS.text_transparent_abt_brief
          )}
        >
          <GradualSpacing className="sm:text-[22px] font-semibold" text="Who are we & What we do?" />
        </div>

        <div className="z-10 mt-32 sm:ml-16 sm:mr-16 lg:ml-40 lg:mr-40">
          <Row gutter={[20, 20]}>
            <Col xs={24} xl={10}>
              {whoWeAre.map((data) => (
                <Row
                  key={data.key}
                  className={classNames(CSS.row_container, {
                    [CSS.active]: activeRow === data.key, // Apply 'active' class if this row is active
                  })}
                  onClick={() =>
                    activeRow === data.key
                      ? null
                      : handleRowClick(data.key, data.detail)
                  } // Make row clickable
                >
                  <Col xl={24} className={classNames(CSS.title_container)}>
                    <div className={classNames(CSS.title)}>{data.title}</div>
                    <div className={classNames(CSS.brief, "mt-4")}>
                      {data.brief}
                    </div>
                  </Col>
                </Row>
              ))}
            </Col>

            <Col xs={24} xl={14} className="flex items-center" ref={ref}>
              {inView && (
                <BlurIn
                  duration={0.9}
                  key={activeRow}
                  word={activeRowText ?? ""}
                  className="md:text-3xl sm:text-2xl font-bold text-white/70 dark:text-white"
                />
              )}
            </Col>
          </Row>
        </div>
        {/* <Particles
          className="absolute inset-0"
          quantity={150}
          ease={80}
          size={2}
          staticity={4}
          color={color}
          refresh
        /> */}
      </div>
    </div>
  );
};

export default AboutBrief;
