"use client";
import SectionC from "../components/SectionC";
import CardC from "../components/CardC";
import AskQuestionBlock from "@/app/components/AskQuestionBlock";
import WhyUsBlock from "@/app/components/WhyUsBlock";
import FAQBlock from "@/app/components/FAQBlock";
import StepsBlock from "@/app/components/StepsBlock";
import PortfolioBlock from "@/app/components/PortfolioBlock";
import TableC from "@/app/components/TableC";
import BlocksC from "@/app/components/BlocksC";
import DevelopmentBlock from "@/app/components/DevelopmentBlock";
import PricingBlock from "@/app/components/PricingBlock";

import HeaderC from "@/app/components/HeaderC";
import MainHeaderC from "@/app/components/MainHeaderC";
import { useTranslation } from "@/app/hooks/LanguageContext";

export default function Home() {
  const { t } = useTranslation();

  const subHeader = t("subHeaderLandingPage");
  const landingPageTasks = t("landingPageTasks");
  const landingPageSteps = t("landingPageSteps");
  const landingPageFAQ = t("landingPageFAQ");
  const landingPageWidgets = t("landingPageWidgets");
  const landingPageStructure = t("landingPageStructure");

  return (
    <div style={{ paddingTop: "2em" }} id="wrapper">
      <MainHeaderC header={t("landing_page")} content={subHeader}></MainHeaderC>
      <SectionC className="wrapper style4 fullscreen fade-up ">
        <HeaderC title={t("benefits_landing_page")}></HeaderC>
        <div
          className="card-grid"
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}>
          {landingPageTasks.map((content, index) => (
            <CardC
              index={index}
              styleWrapper={{ height: "20rem" }}
              content={content}
              disableButton={true}></CardC>
          ))}
        </div>
      </SectionC>
      <SectionC className="wrapper style3 fullscreen fade-up">
        <HeaderC title={t("basic_pages")}></HeaderC>
        <BlocksC content={landingPageStructure}></BlocksC>
      </SectionC>
      <PricingBlock></PricingBlock>
      <SectionC className="wrapper style1 fullscreen fade-up">
        <HeaderC title={t("basic_widgets")}></HeaderC>
        <TableC
          columns={["widget", "descriptions"]}
          data={landingPageWidgets.map((el) => {
            return { widget: el.name, descriptions: el.description };
          })}></TableC>
      </SectionC>
      <SectionC className="wrapper style2 fullscreen fade-up">
        <PortfolioBlock className="style3" />
      </SectionC>
      <StepsBlock
        className="style3"
        title="Этапы работы"
        content={landingPageSteps}
      />
      <SectionC className="wrapper style2 fullscreen fade-up">
        <DevelopmentBlock className="style3" />
      </SectionC>
      <WhyUsBlock className="style4" />
      <FAQBlock className="style1" items={landingPageFAQ} />
      <AskQuestionBlock className="style2" />
    </div>
  );
}
