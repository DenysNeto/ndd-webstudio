"use client";
import React, { useState } from "react";
import { useTranslation } from "@/app/hooks/LanguageContext";

const BlocksC = (props) => {
  const { t } = useTranslation();

  const [showWidgets, setShowWidgets] = useState(
    Array(props.content.length).fill(false)
  );

  return (
    <div className="features">
      {props.content.map((el, index) => {
        return (
          <section>
            <h2>{el.pageTitle || el.title}</h2>
            <span>{el.pageDescription || el.description}</span>
            <br />
            <h4>Widgets:</h4>
            {showWidgets[index] && (
              <ul>
                {el.widgets.map((elInner, indexInner) => {
                  return <li key={indexInner}>{elInner}</li>;
                })}
              </ul>
            )}
            <button
              style={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}
              onClick={() => {
                const newShowWidgets = [...showWidgets];
                newShowWidgets[index] = !newShowWidgets[index];
                setShowWidgets(newShowWidgets);
              }}>
              {showWidgets[index] ? t("hide_widgets") : t("show_widgets")}
            </button>
          </section>
        );
      })}
    </div>
  );
};

export default BlocksC;
