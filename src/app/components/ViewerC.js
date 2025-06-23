"use client";
import React, { useState, useEffect } from "react";
import ButtonC from "@/app/components/ButtonC";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Image1 from "@/app/assets/img/webstudio_logo.jpg";

import Link from "next/link";

const ViewerC = (props) => {
  const [width, setWidth] = useState(380);
  const [height, setHeight] = useState(568);
  const [typeSelected, setTypeSelected] = useState("mobile");
  const [name, setName] = useState(props.name || "aerial");

  const [src, setSrc] = useState(
    `https://site-mocha-two-59.vercel.app/site/${name}/index.html`
  );

  const setMobile = () => {
    setWidth(380);
    setTypeSelected("mobile");
    if (window.screen.height * 0.62 > 568) {
      setHeight(568);
    } else {
      setHeight(window.screen.height * 0.62);
    }
  };

  const setTablet = () => {
    setWidth(1040);
    setTypeSelected("tablet");
    if (window.screen.height * 0.62 > 768) {
      setHeight(768);
    } else {
      setHeight(window.screen.height * 0.62);
    }
  };

  const setTabletPortrait = () => {
    setWidth(788);
    setTypeSelected("tabletPortrait");
    if (window.screen.height * 0.62 > 1000) {
      setHeight(1000);
    } else {
      setHeight(window.screen.height * 0.62);
    }
  };

  const setDesktop = () => {
    let elem = document.getElementById("intro");
    let clientWidth = elem.clientWidth;
    let clientHeight = elem.clientHeight;
    setWidth(clientWidth);
    setHeight(clientHeight);
    setTypeSelected("desktop");
  };

  return (
    <>
      <section
        className="sidebar-viewer"
        style={{ padding: "20px" }}
        id="sidebar">
        <Link href="/portfolio">
          <ButtonC
            styles={{ width: "100%" }}
            size="large"
            label="Back"></ButtonC>
        </Link>
        <h2 style={{ textAlign: "left" }}> Device Type</h2>
        <div className="inner">
          <nav style={{ padding: "20px", cursor: "pointer" }}>
            <ul style={{ textAlign: "center", margin: "unset" }}>
              <li
                onClick={setDesktop}
                className={
                  typeSelected == "desktop"
                    ? "outlineSelected sidebar-item"
                    : "sidebar-item"
                }>
                <a>
                  {typeSelected == "desktop" && (
                    <FontAwesomeIcon
                      style={{ marginRight: "20px" }}
                      icon={faCircleCheck}
                    />
                  )}
                  Desktop
                </a>
              </li>
              <li
                onClick={setMobile}
                className={
                  typeSelected == "mobile"
                    ? "outlineSelected sidebar-item"
                    : "sidebar-item"
                }>
                <a>
                  {" "}
                  {typeSelected == "mobile" && (
                    <FontAwesomeIcon
                      style={{ marginRight: "20px" }}
                      icon={faCircleCheck}
                    />
                  )}
                  Mobile
                </a>
              </li>
              <li
                onClick={setTablet}
                className={
                  typeSelected == "tablet"
                    ? "outlineSelected sidebar-item"
                    : "sidebar-item"
                }>
                <a>
                  {typeSelected == "tablet" && (
                    <FontAwesomeIcon
                      style={{ marginRight: "20px" }}
                      icon={faCircleCheck}
                    />
                  )}
                  Tablet
                </a>
              </li>
              <li
                onClick={setTabletPortrait}
                className={
                  typeSelected == "tabletPortrait"
                    ? "outlineSelected sidebar-item"
                    : "sidebar-item"
                }>
                <a>
                  {typeSelected == "tabletPortrait" && (
                    <FontAwesomeIcon
                      style={{ marginRight: "20px" }}
                      icon={faCircleCheck}
                    />
                  )}
                  Tablet (P)
                </a>
              </li>
            </ul>
          </nav>
          <ButtonC
            onClick={props.openModal}
            styles={{ width: "100%" }}
            size="large"
            label="Change Template"></ButtonC>
        </div>
      </section>

      <div
        id="portfolio-back-btn"
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}>
        <Link href="/portfolio">
          {" "}
          <ButtonC
            style={{ width: "100%" }}
            label="Back"
            size="large"></ButtonC>
        </Link>
        <div>
          <Image
            src={Image1}
            style={{ width: "50px", height: "auto" }}
            alt="this is my image"
          />
        </div>
      </div>
      <iframe
        className="resizeTransitionlong iframeMobile"
        id="bla"
        src={src}
        frameborder="0"
        height="100%"
        width="100%"></iframe>
      <div
        id="xx"
        style={{ width: "100%", paddingTop: "5em", marginLeft: "18rem" }}
        className="">
        <div
          style={{ width: width, height: height }}
          className={
            typeSelected == "desktop"
              ? "absolutePositioning  resizeTransitionlong"
              : "iphone resizeTransitionlong"
          }>
          <iframe
            className="resizeTransitionlong"
            id="bla"
            src={src}
            frameborder="0"
            height={height}
            width={width}></iframe>

          {typeSelected != "desktop" && (
            <>
              <div className="earSpeaker"></div>
              <div className="toggleSwitch"></div>
              <div className="volumeRocker"></div>
              <div className="powerBtn"></div>
              <a href="#_" className="homeBtn"></a>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewerC;
