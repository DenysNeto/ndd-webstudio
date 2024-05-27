"use client";
import Image1 from "@/app/assets/img/robot_with_circle.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "../hooks/LanguageContext";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";

import Link from "next/link";

const PortfolioBlock = (props) => {
  const [ref1, isVisible1] = useIntersectionObserver({
    threshold: 0.3,
  });

  const { t } = useTranslation();
  return (
    <Link href="/portfolio">
      <div
        ref={ref1}
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        className={`${
          props.className
        } inner padding-all-inner card animate__animated animate__slow ${
          isVisible1 ? "animate__zoomIn" : "invissible"
        }`}>
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
