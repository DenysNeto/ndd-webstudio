"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Step2 = ({ selectedPagesCount, setSelectedPagesCount, disabled }) => {
  const options = ["1-4", "4-10", "10+"];
  return (
    <div
      className="wrapper  col-3 col-12-xsmall stepWrapper"
      style={{
        opacity: disabled ? 0.5 : 1,
        pointerEvents: disabled ? "none" : "auto",
      }}>
      <h3>Pages Count</h3>
      {options.map((option) => (
        <div
          className="inner card"
          key={option}
          onClick={() => setSelectedPagesCount(option)}
          style={{
            width: "90%",
            padding: "40px",
            marginBottom: "20px",
            cursor: "pointer",
            textAlign: "center",
          }}>
          {selectedPagesCount == option && (
            <FontAwesomeIcon
              style={{ marginRight: "5px" }}
              icon={faCircleCheck}
            />
          )}
          {option}
        </div>
      ))}
    </div>
  );
};

export default Step2;
