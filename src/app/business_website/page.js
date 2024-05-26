"use client";
import SectionC from "../components/SectionC";
import CardC from "../components/CardC";
import AskQuestionBlock from "@/app/components/AskQuestionBlock";
import WhyUsBlock from "@/app/components/WhyUsBlock";
import FAQBlock from "@/app/components/FAQBlock";
import StepsBlock from "@/app/components/StepsBlock";
import TableC from "@/app/components/TableC";
import BlocksC from "@/app/components/BlocksC";
import PortfolioBlock from "@/app/components/PortfolioBlock";
import HeaderC from "@/app/components/HeaderC";
import MainHeaderC from "@/app/components/MainHeaderC";
import PricingBlock from "@/app/components/PricingBlock";
import { useTranslation } from "@/app/hooks/LanguageContext";
import DevelopmentBlock from "@/app/components/DevelopmentBlock";

export default function Home() {
  const { t } = useTranslation();
  const businessSiteTasks = t("businessSiteTasks");
  const subHeader = t("subHeaderBusinessSite");
  const businessSiteSteps = t("businessSiteSteps");
  const businessSiteFAQ = t("businessSiteFAQ");
  const businessWidgets = t("businessWidgets");
  const businessSiteStructure = t("businessSiteStructure");

  return (
    <div style={{ paddingTop: "2em" }} id="wrapper">
      <MainHeaderC
        header={t("business_site")}
        content={subHeader}></MainHeaderC>
      <SectionC className="wrapper style4 fullscreen fade-up ">
        <HeaderC title={t("benefits_business_site")}></HeaderC>
        <div
          className="card-grid"
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}>
          {businessSiteTasks.map((content, index) => (
            <CardC
              index={index}
              styleWrapper={{ height: "20rem" }}
              content={content}
              disableButton={true}></CardC>
          ))}
        </div>
      </SectionC>
      <SectionC className="wrapper style3 fullscreen fade-up">
        <HeaderC title="Basic Pages"></HeaderC>
        <BlocksC content={businessSiteStructure}></BlocksC>
      </SectionC>
      <PricingBlock className="style2" />
      <SectionC className="wrapper style1 fullscreen fade-up">
        <HeaderC title="Basic Widgets"></HeaderC>
        <TableC
          columns={["widget", "descriptions"]}
          data={businessWidgets.map((el) => {
            return { widget: el.name, descriptions: el.description };
          })}></TableC>
      </SectionC>

      <SectionC className="wrapper style2 fullscreen fade-up">
        <PortfolioBlock />
      </SectionC>
      <StepsBlock
        className="style4"
        title="Этапы работы"
        content={businessSiteSteps}
      />
      <SectionC className="wrapper style2 fullscreen fade-up">
        <DevelopmentBlock></DevelopmentBlock>
      </SectionC>

      <WhyUsBlock className="style3" />
      <FAQBlock className="style1" items={businessSiteFAQ} />
      <AskQuestionBlock className="style2" />
    </div>
  );
}
