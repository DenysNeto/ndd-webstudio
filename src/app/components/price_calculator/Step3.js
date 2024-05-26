"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Step3 = ({ selectedModulesCount, setSelectedModulesCount, disabled }) => {
  const options = ["0", "1-4", "4-8", "8-12", "12+"];
  return (
    <div
      className="wrapper  col-3 col-12-xsmall stepWrapper"
      style={{
        opacity: disabled ? 0.5 : 1,
        pointerEvents: disabled ? "none" : "auto",
      }}>
      <h3>Modules count</h3>
      {options.map((option) => (
        <div
          className="inner card"
          key={option}
          onClick={() => setSelectedModulesCount(option)}
          style={{
            width: "90%",
            padding: "40px",
            marginBottom: "20px",
            cursor: "pointer",
            textAlign: "center",
          }}>
          {" "}
          {selectedModulesCount == option && (
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

export default Step3;
