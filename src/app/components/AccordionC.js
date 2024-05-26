"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    console.log("FFFF");
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex ? "active" : "";

    return (
      <div key={item.title}>
        <div
          className={`accordion-title card ${isActive}`}
          onClick={() => onTitleClick(index)}>
          {isActive ? (
            <FontAwesomeIcon style={{ marginRight: "20px" }} icon={faMinus} />
          ) : (
            <FontAwesomeIcon style={{ marginRight: "20px" }} icon={faPlus} />
          )}

          {item.title}
        </div>
        {isActive && (
          <div className={`accordion-content ${isActive}`}>
            <p>{item.content}</p>
          </div>
        )}
      </div>
    );
  });

  return (
    <div style={{ width: "100%" }} className="ui styled accordion">
      {renderedItems}
    </div>
  );
};

export default Accordion;
