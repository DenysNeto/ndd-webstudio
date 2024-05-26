"use client";
import SectionC from "../components/SectionC";
import CardC from "../components/CardC";
import AskQuestionBlock from "@/app/components/AskQuestionBlock";
import WhyUsBlock from "@/app/components/WhyUsBlock";
import FAQBlock from "@/app/components/FAQBlock";
import StepsBlock from "@/app/components/StepsBlock";
import TableC from "@/app/components/TableC";
import BlocksC from "@/app/components/BlocksC";
import { useTranslation } from "@/app/hooks/LanguageContext";
import PortfolioBlock from "@/app/components/PortfolioBlock";
import HeaderC from "@/app/components/HeaderC";
import MainHeaderC from "@/app/components/MainHeaderC";
import PricingBlock from "@/app/components/PricingBlock";

export default function Home() {
  const { t } = useTranslation();
  const subHeader = t("subHeaderPromoSite");
  const promoSiteTasks = t("promoSiteTasks");
  const promoSiteSteps = t("promoSiteSteps");
  const promoSiteFAQ = t("promoSiteFAQ");
  const promoWidgets = t("promoWidgets");
  const promoSiteStructure = t("promoSiteStructure");

  return (
    <div style={{ paddingTop: "2em" }} id="wrapper">
      <MainHeaderC header={t("promo_site")} content={subHeader}></MainHeaderC>

      <SectionC className="wrapper style4 fullscreen fade-up ">
        <HeaderC title={t("promo_benefits")}></HeaderC>
        <div
          className="card-grid"
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}>
          {promoSiteTasks.map((content, index) => (
            <CardC
              index={index}
              styleWrapper={{ height: "20vw" }}
              content={content}
              disableButton={true}></CardC>
          ))}
        </div>
      </SectionC>

      <SectionC className="wrapper style3 fullscreen fade-up">
        <HeaderC title={t("basic_pages")}></HeaderC>
        <BlocksC content={promoSiteStructure}></BlocksC>
      </SectionC>

      <PricingBlock className="style2" />

      <SectionC className="wrapper style1 fullscreen fade-up">
        <HeaderC title={t("basic_widgets")}></HeaderC>
        <TableC
          columns={["widget", "descriptions"]}
          data={promoWidgets.map((el) => {
            return { widget: el.name, descriptions: el.description };
          })}></TableC>
      </SectionC>

      <SectionC className="wrapper style4 fullscreen fade-up">
        <PortfolioBlock />
      </SectionC>

      <StepsBlock
        className="style1"
        title={t("stages")}
        content={promoSiteSteps}
      />

      <WhyUsBlock className="style2" />
      <FAQBlock className="style3" items={promoSiteFAQ} />

      <AskQuestionBlock cclassName="style4" />
    </div>
  );
}
