"use client";
import SectionC from "../components/SectionC";
import CardC from "../components/CardC";
import AskQuestionBlock from "@/app/components/AskQuestionBlock";
import WhyUsBlock from "@/app/components/WhyUsBlock";
import FAQBlock from "@/app/components/FAQBlock";
import StepsBlock from "@/app/components/StepsBlock";
import TableC from "@/app/components/TableC";
import PortfolioBlock from "@/app/components/PortfolioBlock";
import HeaderC from "@/app/components/HeaderC";
import MainHeaderC from "@/app/components/MainHeaderC";
import PricingBlock from "@/app/components/PricingBlock";
import BlocksC from "@/app/components/BlocksC";
import DevelopmentBlock from "@/app/components/DevelopmentBlock";

import { useTranslation } from "@/app/hooks/LanguageContext";

export default function Home() {
  const { t } = useTranslation();
  const subHeader = t("subHeaderShopSite");
  const shopSiteTasks = t("shopSiteTasks");
  const shopSiteSteps = t("shopSiteSteps");
  const shopSiteFAQ = t("shopSiteFAQ");
  const shopSiteWidgets = t("onlineStoreWidgets");
  const onlineShopStructure = t("onlineShopStructure");

  return (
    <div style={{ paddingTop: "2em" }} id="wrapper">
      <MainHeaderC header={t("online_store")} content={subHeader}></MainHeaderC>

      <SectionC className="wrapper style4 fullscreen fade-up ">
        <HeaderC title="What benefits does an online store provide?"></HeaderC>
        <div
          className="card-grid"
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}>
          {shopSiteTasks.map((content, index) => (
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
        <BlocksC content={onlineShopStructure}></BlocksC>
      </SectionC>

      <PricingBlock className="style2" />

      <SectionC className="wrapper style1 fullscreen fade-up">
        <HeaderC title={t("basic_widgets")}></HeaderC>
        <TableC
          columns={["widget", "descriptions"]}
          data={shopSiteWidgets.map((el) => {
            return { widget: el.name, descriptions: el.description };
          })}></TableC>
      </SectionC>

      <SectionC className="wrapper style4 fullscreen fade-up">
        <PortfolioBlock />
      </SectionC>

      <StepsBlock
        className="style3"
        title={t("stages")}
        content={shopSiteSteps}
      />

      <SectionC className="wrapper style2 fullscreen fade-up">
        <DevelopmentBlock className="style4" />
      </SectionC>

      <WhyUsBlock className="style1" />

      <FAQBlock className="style2" items={shopSiteFAQ} />
      <AskQuestionBlock className="style3" />
    </div>
  );
}
