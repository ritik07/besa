"use client";
import React, { useRef, useState } from "react";
import { Row, Col } from "antd";
import classNames from "classnames";
import CSS from "./nav-bar-web.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import logo from "../../../static/logo/black.png";
import { gsap } from "gsap";
import { Divide as Hamburger } from "hamburger-react";

const montserrat = Montserrat({ subsets: ["latin"] });

const NavBarWeb = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  const [isOpen, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(true);
    if (menuRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(menuRef.current, { y: "100%" }, { y: "0%", duration: 0.2 });
    }
  };

  const handleCloseClick = () => {
    setOpen(false);
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        y: "100%",
        duration: 0.2,
      });
    }
  };

  return (
    <div>
      <Row
        className={classNames("cs-tp-10 cs-bp-10", CSS.cs_nav_bar_container)}
      >
        <Col xl={3} lg={3} md={2}></Col>
        <Col xl={5} lg={3} md={3}>
          <div className={classNames(CSS.cs_navbar_logo_container)}>
            <Link href="/">
              <Image
                alt="logo"
                src={logo}
                className={classNames(CSS.cs_navbar_logo)}
              />
            </Link>
          </div>
        </Col>
        <Col xl={4} lg={6} md={3}></Col>
        <Col xl={12} lg={6} md={3} className={CSS.menu_container}>
          {/* <div className={classNames("cs-dis-flex cs-jc-end")}>
            <div></div>
            <div
              onClick={handleMenuClick}
              className={classNames("cs-dis-flex")}
            >
              <div
                className={classNames(
                  `${(montserrat.className, CSS.menu_btn)}`
                )}
              >
                MENU
              </div>

              <Hamburger color="#000" toggled={isOpen} />
            </div>
          </div> */}
        </Col>
      </Row>

      <div
        ref={menuRef}
        className={classNames(CSS.menu_slide_in)}
        style={{
          transform: "translateY(100%)",
        }}
      >
        <div
          className={classNames(CSS.menu_close_btn)}
          onClick={handleCloseClick}
        >
          {isOpen ? <Hamburger toggled={isOpen} /> : null}
        </div>
        <div className={classNames(CSS.menu_content)}>
          {/* Your menu items here */}
          {/* <h2>Menu Content</h2> */}
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBarWeb;
