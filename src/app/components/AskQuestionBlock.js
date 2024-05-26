"use client";
import Image from "next/image";
import Image1 from "../assets/img/robot_with_circle_2.png";
import FormAskQuestions from "./FormAskQuestions";
import SectionC from "@/app/components/SectionC";

const AskQuestionBlock = (props) => {
  return (
    <SectionC
      id="intro"
      style={{ ...props.style, padding: 0 }}
      className={
        props.className
          ? props.className + " " + " wrapper fullscreen fade-up"
          : " wrapper fullscreen fade-up"
      }>
      <div
        className="inner row"
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "50px",
          justifyContent: "space-between",
        }}>
        <div className="col-6 col-12-xsmall">
          <FormAskQuestions />
        </div>

        <div className="col-6 col-12-xsmall">
          <Image
            style={{
              color: ":transparent",
              objectFit: "contain",
              width: "100%",
              height: "-webkit-fill-available",
            }}
            src={Image1}
            alt="this is my image"
          />
        </div>
      </div>
    </SectionC>
  );
};

export default AskQuestionBlock;
