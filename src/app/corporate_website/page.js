"use client";
import SectionC from "../components/SectionC";
import CardC from "../components/CardC";
import AskQuestionBlock from "@/app/components/AskQuestionBlock";
import WhyUsBlock from "@/app/components/WhyUsBlock";
import FAQBlock from "@/app/components/FAQBlock";
import StepsBlock from "@/app/components/StepsBlock";
import TableC from "@/app/components/TableC";
import PortfolioBlock from "@/app/components/PortfolioBlock";
import BlocksC from "@/app/components/BlocksC";
import DevelopmentBlock from "@/app/components/DevelopmentBlock";

import HeaderC from "@/app/components/HeaderC";
import MainHeaderC from "@/app/components/MainHeaderC";
import React from "react";
import { useTranslation } from "../hooks/LanguageContext";
import PricingBlock from "@/app/components/PricingBlock";

export default function Home() {
  const { t } = useTranslation();
  const corporateSiteTasks = t("corporateSiteTasks");
  const subHeader = t("subHeaderCorporateSite");
  const corporateSiteSteps = t("corporateSiteSteps");
  const corporateSiteFAQ = t("corporateSiteFAQ");
  const corporateWidgets = t("corporateWidgets");
  const corporateSiteStructure = t("corporateSiteStructure");

  return (
    <div style={{ paddingTop: "2em" }} id="wrapper">
      <MainHeaderC
        header={t("corporate_site")}
        content={subHeader}></MainHeaderC>
      <SectionC className="wrapper style4 fullscreen fade-up ">
        <HeaderC title={t("benefits_corporate_site")}></HeaderC>
        <div
          className="card-grid"
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}>
          {corporateSiteTasks.map((content, index) => (
            <CardC
              index={index}
              styleWrapper={{ height: "20rem" }}
              content={content}
              disableButton={true}></CardC>
          ))}
        </div>
      </SectionC>
      <PricingBlock className="style2" />

      <SectionC className="wrapper style3 fullscreen fade-up">
        <HeaderC title={t("basic_pages")}></HeaderC>
        <BlocksC content={corporateSiteStructure}></BlocksC>
      </SectionC>

      <SectionC className="wrapper style2 fullscreen fade-up">
        <DevelopmentBlock className="style4" />
      </SectionC>

      <SectionC className="wrapper style1 fullscreen fade-up">
        <HeaderC title={t("basic_widgets")}></HeaderC>
        <TableC
          columns={["widget", "descriptions"]}
          data={corporateWidgets.map((el) => {
            return { widget: el.name, descriptions: el.description };
          })}></TableC>
      </SectionC>

      <SectionC className="wrapper style2 fullscreen fade-up">
        <PortfolioBlock className="style4" />
      </SectionC>
      <StepsBlock title={t("stages")} content={corporateSiteSteps} />

      <WhyUsBlock className="style3" />
      <FAQBlock className="style1" items={corporateSiteFAQ} />
      <AskQuestionBlock className="style2" />
    </div>
  );
}
