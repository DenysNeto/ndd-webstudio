"use client";
import SectionC from "../components/SectionC";
import CardC from "../components/CardC";
import AskQuestionBlock from "@/app/components/AskQuestionBlock";
import WhyUsBlock from "@/app/components/WhyUsBlock";
import TableC from "@/app/components/TableC";
import PortfolioBlock from "@/app/components/PortfolioBlock";
import HeaderC from "@/app/components/HeaderC";
import MainHeaderC from "@/app/components/MainHeaderC";
import PricingBlock from "@/app/components/PricingBlock";
import DevelopmentBlock from "@/app/components/DevelopmentBlock";
import { useTranslation } from "@/app/hooks/LanguageContext";

export default function Home() {
  const { t } = useTranslation();

  const subHeader = t("subHeaderSupportSite");
  const supportSiteTasks = t("supportSiteTasks");
  const supportSiteModules = t("supportSiteModules");

  return (
    <div style={{ paddingTop: "2em" }} id="wrapper">
      <MainHeaderC header={t("tech_support")} content={subHeader}></MainHeaderC>

      <SectionC className="wrapper style4 fullscreen fade-up ">
        <HeaderC title={t("tech_support_options")}></HeaderC>
        <div
          className="card-grid"
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}>
          {supportSiteTasks.map((content, index) => (
            <CardC
              index={index}
              styleWrapper={{ height: "20rem" }}
              content={content}
              disableButton={true}></CardC>
          ))}
        </div>
      </SectionC>

      <SectionC className="wrapper style2 fullscreen fade-up">
        <DevelopmentBlock />
      </SectionC>

      <PricingBlock className="style1" />

      <SectionC className="wrapper style2 fullscreen fade-up">
        <HeaderC title={t("tech_support_options")}></HeaderC>
        <TableC
          columns={["type", "description"]}
          data={supportSiteModules.map((el) => {
            return { type: el.title, description: el.description };
          })}></TableC>
      </SectionC>

      <SectionC className="wrapper style1 fullscreen fade-up">
        <PortfolioBlock />
      </SectionC>

      <WhyUsBlock className="style4" />
      <AskQuestionBlock className="style2" />
    </div>
  );
}
