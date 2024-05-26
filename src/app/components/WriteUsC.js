"use client";

import React, { useState } from "react";
import "animate.css/animate.min.css"; // Import Animate.css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faTelegram,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "../hooks/LanguageContext";
import ModalC from "../components/ModalC";
import FormAskQuestions from "@/app/components/FormAskQuestions";
import SectionC from "@/app/components/SectionC";

import {
  faComment,
  faCircleExclamation,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import {
  handleFacebookClick,
  handleWhatsappClick,
  handleInstagramClick,
  handleTelegramClick,
} from "@/app/hooks/services.js";

const WriteUsC = (props) => {
  const [isVissible, setisVissible] = useState(false);
  const [language, setLanguage] = useState("ENG");
  const { t, changeLanguage } = useTranslation();

  const setIsVissible = (event) => {
    console.log("CLICK!");
    event.stopPropagation();
    event.nativeEvent.stopPropagation();
    if (isVissible) {
      document.getElementById("test").classList.add("animate__bounceOutLeft");
      document.getElementById("test2").classList.add("animate__bounceOutDown");
      setTimeout(() => {
        setisVissible(!isVissible);
      }, 1000);
    } else {
      setisVissible(!isVissible);
    }
  };

  const changeLanguageFunc = (lang) => {
    changeLanguage(lang);
    setLanguage(lang.toUpperCase());
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <ModalC isOpen={isModalOpen} onClose={closeModal}>
        <SectionC className="wrapper style4 fullscreen fade-up">
          <FormAskQuestions />
        </SectionC>
      </ModalC>
      <div
        id="sidebar-icon"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
        }}>
        {isVissible && (
          <div
            id="test2"
            style={{ display: "flex" }}
            className=" animate__animated animate__bounceInUp">
            <div className="round-btn-wrapper" onClick={handleFacebookClick}>
              <FontAwesomeIcon className="round-icon" icon={faFacebook} />
            </div>
            <div className="round-btn-wrapper" onClick={handleWhatsappClick}>
              <FontAwesomeIcon className="round-icon" icon={faWhatsapp} />
            </div>
            <div className="round-btn-wrapper" onClick={handleTelegramClick}>
              <FontAwesomeIcon className="round-icon" icon={faTelegram} />
            </div>
            <div className="round-btn-wrapper" onClick={handleInstagramClick}>
              <FontAwesomeIcon className="round-icon" icon={faInstagram} />
            </div>
          </div>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}>
          <div
            className={
              !isVissible
                ? "round-btn-wrapper animate__animated animate__rubberBand  animate__slower  animate__infinite"
                : "round-btn-wrapper animate__animated animate__rubberBand  animate__slower"
            }
            onClick={setIsVissible}>
            <FontAwesomeIcon
              className="round-icon"
              icon={isVissible ? faCircleXmark : faCircleExclamation}
            />
          </div>
          {!isVissible && (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "unset",
                  background: language == "ENG" ? "green" : "transparent",
                }}
                className={"round-btn-wrapper"}
                onClick={() => {
                  changeLanguageFunc("eng");
                }}>
                ENG
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "unset",
                  background: language == "UKR" ? "green" : "transparent",
                }}
                className={"round-btn-wrapper"}
                onClick={() => {
                  changeLanguageFunc("ukr");
                }}>
                UKR
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "unset",
                  background: language == "RUS" ? "green" : "transparent",
                }}
                className={"round-btn-wrapper"}
                onClick={() => {
                  changeLanguageFunc("rus");
                }}>
                RUS
              </div>
            </>
          )}

          {isVissible && (
            <div
              id="test"
              className=" round-btn-wrapper animate__animated animate__bounceInLeft"
              onClick={openModal}>
              <FontAwesomeIcon className="round-icon" icon={faComment} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WriteUsC;
