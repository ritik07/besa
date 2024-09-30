import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import CSS from "./clientBase.module.scss";
import { Col, Row } from "antd";
import createGlobe from "cobe";

const ClientBase = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // Typed useRef

  useEffect(() => {
    let phi = 0;

    if (canvasRef.current) {
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 600 * 2,
        height: 600 * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0, 0.75, 0.65], // #00bfa6 in normalized RGB
        glowColor: [1, 1, 1],
        markers: [
          // longitude, latitude
          { location: [20.5937, 78.9629], size: 0.07 }, // India
          { location: [56.1304, -106.3468], size: 0.07 }, // Canada
          { location: [-25.2744, 133.7751], size: 0.07 }, // Australia
          { location: [37.0902, -95.7129], size: 0.07 }, // USA
          { location: [9.082, 8.6753], size: 0.07 }, // Africa (Nigeria)
          { location: [25.276987, 55.296249], size: 0.07 }, // Dubai (UAE)
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.01;
        },
      });

      return () => {
        globe.destroy();
      };
    }
  }, []);

  return (
    <div className={classNames(CSS.clientBaseWrapper)}>
      <Row>
        <Col xl={3}></Col>
        <Col xl={8} className="mt-20">
          <div className={classNames(CSS.title, "text-left")}>
            Our Global Presence
          </div>
          <p className={classNames(CSS.description, "text-left")}>
            We take pride in serving clients across the globe, providing
            customized marketing solutions tailored to various markets.
            <br />
            <br /> Below are a few of the regions we serve:
          </p>

          <ul className={classNames(CSS.clientList, "text-left")}>
            <li>🌏 India</li>
            <li>🍁 Canada</li>
            <li>🇦🇺 Australia</li>
            <li>🇺🇸 USA</li>
            <li>🌍 Africa</li>
            <li>🇦🇪 Dubai</li>
          </ul>
        </Col>
        <Col xl={12}>
          <canvas
            ref={canvasRef}
            className={classNames(CSS.globeCanvas)}
            style={{
              width: 600,
              height: 600,
              maxWidth: "100%",
              aspectRatio: 1,
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ClientBase;
