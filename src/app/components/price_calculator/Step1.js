"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Step1 = ({ selectedType, setSelectedType }) => {
  const options = [
    "Promo Site",
    "Landing Page",
    "Corporate Site",
    "Business Site",
    "Online Store",
  ];
  return (
    <div className="wrapper  col-3 col-12-xsmall   stepWrapper">
      <h3>Site type</h3>

      {options.map((option) => (
        <div
          className="inner card style1"
          key={option}
          onClick={() => setSelectedType(option)}
          style={{
            width: "90%",
            padding: "40px",
            marginBottom: "20px",
            cursor: "pointer",
          }}>
          <div style={{ textAlign: "center" }}>
            {" "}
            {selectedType == option && (
              <FontAwesomeIcon
                style={{ marginRight: "5px" }}
                icon={faCircleCheck}
              />
            )}{" "}
            {option}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Step1;
