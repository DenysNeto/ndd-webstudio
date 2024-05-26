"use client";
import SectionC from "../components/SectionC";

import CardPreviewC from "../components/CardPreviewC";
import { arrayPortfolio } from "@/app/assets/data/services";
import MainHeaderC from "@/app/components/MainHeaderC";
import { useTranslation } from "@/app/hooks/LanguageContext";
import { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.getElementById("sidebar").style.background = "#400C69";
  }, []);

  const [visibleItems, setVisibleItems] = useState(6); // Number of items to display initially

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6); // Load 6 more items each time
  };

  const { t } = useTranslation();
  return (
    <div style={{ paddingTop: "2em" }} id="wrapper">
      <MainHeaderC header={t("portfolio")} content={""}></MainHeaderC>
      <SectionC
        classNameInner="row"
        className="wrapper inner style2 fullscreen fade-up">
        {arrayPortfolio.slice(0, visibleItems).map((el, index) => {
          let src = `https://html5up.net/uploads/images/${el}.jpg`;
          return (
            <div
              className="col-6 col-12-medium col-12-small  col-12-xsmall"
              key={index}>
              <CardPreviewC name={el} index={index} src={src} />
            </div>
          );
        })}

        {visibleItems < arrayPortfolio.length && (
          <div
            style={{ textAlign: "center", marginTop: "20px", width: "100%" }}>
            <button onClick={loadMore} style={{ width: "100%" }}>
              Load More
            </button>
          </div>
        )}
      </SectionC>
    </div>
  );
}
