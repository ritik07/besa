import React from "react";
import { Row, Col } from "antd";
import CSS from "./aboutBrief.module.scss"; // SCSS module import
import Meteors from "../magicui/meteors";

const AboutBrief = () => {
  return (
    <div className={CSS.about_brief_container}>
      <span
        className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b
       from-black to-gray-300/80 bg-clip-text text-center text-7xl 
       font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
      >
        Who are we & What we do?
      </span>
      <Row justify="center" gutter={[32, 32]} className="invisible">
        <Col xs={24} sm={20} md={16} lg={14}>
          <div className={CSS.about_content}>
            <p className={CSS.about_text}>
              Besa Marketing Solutions, a media communications agency based in
              India. We understand the importance of a brand's online presence.
              We get to know them and their target audiences intimately, then we
              create, develop, and communicate brands and their messages in an
              impactful & engaging way on their social media platforms.
            </p>

            <p className={CSS.about_text}>
              BESA designs and implements a social media marketing campaign for
              its clients in such a way that adds value to potential and
              existing stakeholders and does not look like a mere company
              pushing product.
            </p>

            <p className={CSS.about_text}>
              The best way for us to tell you our story is through the projects
              that we deliver for our clients – the following pages will show a
              brief about us, our services, and some of the best creative – we
              hope you like it!
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutBrief;
