"use client";
import SectionC from "./SectionC";
import CardC from "./CardC";
import HeaderC from "./HeaderC";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import { useTranslation } from "../hooks/LanguageContext";

const WhyUsBlock = (props) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1, // Adjust the threshold as needed
  });
  const { t } = useTranslation();

  const whyUs = t("why_us_arr");

  return (
    <SectionC
      className={
        props.className
          ? props.className + " " + " wrapper fullscreen fade-up "
          : " wrapper fullscreen fade-up"
      }
      style={{ ...props.style }}>
      <HeaderC title={t("why_us")} />
      <div
        ref={ref}
        className="card-grid"
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}>
        {whyUs.map((content, index) => (
          <CardC
            className={`animate__animated card-grid    ${
              isVisible ? "animate__slideInUp" : "invissible"
            }`}
            index={index}
            styleWrapper={{ height: "20rem" }}
            content={content}
            disableButton={true}></CardC>
        ))}
      </div>
    </SectionC>
  );
};

export default WhyUsBlock;
