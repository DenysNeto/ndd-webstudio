"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalC from "../components/ModalC";
import FormAskQuestions from "../components/FormAskQuestions";
import React, { useState } from "react";
import { useTranslation } from "../hooks/LanguageContext";

import {
  handleFacebookClick,
  handleWhatsappClick,
  handleInstagramClick,
  handleTelegramClick,
} from "@/app/hooks/services.js";

import {
  faWhatsapp,
  faTelegram,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
  faComment,
  faCircleExclamation,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const MobileContactUsC = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalFormOpen, setIsModalFormOpen] = useState(false);
  const [language, setLanguage] = useState("ENG");

  const { t, changeLanguage } = useTranslation();

  const changeLanguageFunc = (lang) => {
    changeLanguage(lang);
    setLanguage(lang.toUpperCase());
  };
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openModalForm = () => {
    closeModal();
    setIsModalFormOpen(true);
  };
  const closeModalForm = () => setIsModalFormOpen(false);

  const items = [
    { text: "Telegram", icon: faTelegram, event: handleTelegramClick },
    { text: "Whatsapp", icon: faWhatsapp, event: handleWhatsappClick },
    { text: "Facebook", icon: faFacebook, event: handleFacebookClick },
    { text: "Instagram", icon: faInstagram, event: handleInstagramClick },
    { text: "Write Us", icon: faComment, event: openModalForm },
  ];

  return (
    <>
      <ModalC isOpen={isModalFormOpen} onClose={closeModalForm}>
        <FormAskQuestions />
      </ModalC>

      <ModalC isOpen={isModalOpen} onClose={closeModal}>
        <div
          style={{
            display: "flex",
            /* gap: 30px; */
            justifyContent: "space-between",
            padding: "20px",
          }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "unset",
              padding: "2.5vw",
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
              padding: "2.5vw",
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
              padding: "2.5vw",
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
        </div>
        <h2 style={{ textAlign: "center" }}>Contact US</h2>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
          className="inner padding-all-inner">
          {items.map((item, index) => (
            <div
              onClick={item.event}
              style={{ display: "flex", gap: "20px", alignItems: "center" }}
              index={index}
              className="sidebar-item inner padding-all-inner margin-all-inner">
              <FontAwesomeIcon
                className="round-icon"
                style={{ height: "10vw" }}
                icon={item.icon}></FontAwesomeIcon>
              <div> {item.text}</div>
            </div>
          ))}
        </div>
      </ModalC>

      <div
        id="mobile-navigation"
        onClick={openModal}
        className="round-btn-wrapper mobile-btn-wrapper">
        <FontAwesomeIcon
          className="round-icon"
          style={{ height: "10vw" }}
          icon={faBars}
        />
      </div>
      <style jsx>{`
        .round-icon {
          height: 10vw;
        }
        .mobile-btn-wrapper {
          position: fixed;
          bottom: 20px;
          right: 20px;
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          z-index: 10000;
        }
      `}</style>
    </>
  );
};

export default MobileContactUsC;
