"use client";
import Image1 from "@/app/assets/img/robot_with_circle.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "../hooks/LanguageContext";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

const PortfolioBlock = (props) => {
  const { t } = useTranslation();
  return (
    <Link href="/portfolio">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        className={
          props.className
            ? props.className + " " + "inner padding-all-inner card"
            : "inner padding-all-inner card"
        }>
        <Image
          id="portfolio-img"
          style={{ height: "33vh", width: "auto" }}
          src={Image1}
        />
        <div>
          <h2>{t("portfolio")}</h2>
          <FontAwesomeIcon
            id="img-mobile"
            style={{ height: "10vw" }}
            className="round-icon"
            icon={faArrowRight}
          />
        </div>
      </div>
    </Link>
  );
};

export default PortfolioBlock;
