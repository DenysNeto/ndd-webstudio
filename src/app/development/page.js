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
import Calculator from "@/app/components/price_calculator/Calculator";
import { useTranslation } from "@/app/hooks/LanguageContext";
import { uslugiTable } from "../assets/data/services";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation();
  const services = t("services_arr");

  return (
    <div style={{ paddingTop: "2em" }} id="wrapper">
      <MainHeaderC
        header={t("development")}
        content={t("benefits_development")}></MainHeaderC>

      <SectionC className="wrapper style4 fullscreen fade-up ">
        <HeaderC title={t("services")} />
        <div
          className="card-grid"
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

      <SectionC className="wrapper style1 fullscreen fade-up">
        <HeaderC title={t("basic_prices")}></HeaderC>
        <TableC columns={["site", "price", "time"]} data={uslugiTable}></TableC>
        <Link href="./pricing">
          <button style={{ width: "100%" }}>{t("prices_calculator")}</button>
        </Link>
      </SectionC>

      <SectionC className="wrapper style2 fullscreen fade-up">
        <PortfolioBlock />
      </SectionC>

      <SectionC className="wrapper style3 fullscreen fade-up">
        <HeaderC title={t("prices_calculator")}></HeaderC>
        <Calculator></Calculator>
      </SectionC>

      <WhyUsBlock className="style4" />
      <AskQuestionBlock className="style2" />

      <PricingBlock />
    </div>
  );
}
