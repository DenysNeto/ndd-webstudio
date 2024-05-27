import SectionC from "../components/SectionC";
import ButtonC from "../components/ButtonC";
import HeaderC from "../components/HeaderC";
import { useTranslation } from "../hooks/LanguageContext";
import Link from "next/link";

const PricingBlock = (props) => {
  const { t } = useTranslation();
  return (
    <SectionC
      className={
        props.className
          ? props.className + " " + " wrapper fullscreen fade-up"
          : " wrapper fullscreen fade-up"
      }>
      <HeaderC title={t("prices")}></HeaderC>
      <div
        className="card-grid"
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around",
          flexWrap: "wrap",
          flexDirection: "column",
        }}>
        <h3>{t("price_text")}</h3>
        <Link style={{ width: "100%" }} href="/pricing">
          <ButtonC
            styles={{ width: "100%" }}
            label={t("prices_calculator")}></ButtonC>
        </Link>
      </div>
    </SectionC>
  );
};

export default PricingBlock;
