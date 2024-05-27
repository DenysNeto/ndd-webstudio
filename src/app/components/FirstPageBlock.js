"use client";
import SectionC from "@/app/components/SectionC";
import HeaderC from "@/app/components/HeaderC";
import ButtonC from "@/app/components/ButtonC";
import CardC from "@/app/components/CardC";
import AskQuestionBlock from "@/app/components/AskQuestionBlock";
import DevelopmentBlock from "@/app/components/DevelopmentBlock";
import PricingBlock from "@/app/components/PricingBlock";
import Link from "next/link";
import PortfolioBlock from "@/app/components/PortfolioBlock";
import WhyUsBlock from "@/app/components/WhyUsBlock";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import { useTranslation } from "../hooks/LanguageContext";

const FirstPageBlock = (props) => {
  const { t } = useTranslation();
  const services = t("services_arr");

  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1, // Adjust the threshold as needed
  });

  return (
    <div style={{ paddingTop: "2em" }} id="wrapper">
      <SectionC className="wrapper style1 fullscreen fade-up" id="intro">
        <h1 class="major">{t("it_solutions")}</h1>
        <div
          class="header-btns-wrapper"
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-around",
          }}>
          <Link class="link-wrapper" href="/portfolio">
            {" "}
            <ButtonC label={t("portfolio")}></ButtonC>
          </Link>
          <Link class="link-wrapper" href="/pricing">
            {" "}
            <ButtonC label={t("prices")}></ButtonC>
          </Link>
          <Link class="link-wrapper" href="/development">
            {" "}
            <ButtonC label={t("development")}></ButtonC>
          </Link>
        </div>
      </SectionC>
      {/* YSLUGI */}
      <SectionC className="wrapper style4 fullscreen fade-up ">
        <HeaderC title={t("services")} />
        <div
          ref={ref}
          className={`card-grid animate__animated ${
            isVisible ? "animate__slideInUp" : "invissible"
          }`}
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}>
          {services.map((service, index) => (
            <CardC index={index} content={service}></CardC>
          ))}
        </div>
      </SectionC>

      <PricingBlock className="style2" />

      <SectionC className="wrapper style1 fullscreen fade-up">
        <PortfolioBlock />
      </SectionC>

      <WhyUsBlock className="style2" />

      <SectionC className="wrapper style4 fullscreen fade-up">
        <DevelopmentBlock />
      </SectionC>

      <AskQuestionBlock className="style3" />
    </div>
  );
};

export default FirstPageBlock;
