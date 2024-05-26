"use client";
import Image from "next/image";
import Image1 from "@/app/assets/img/webstudio_logo.jpg";
import { usePathname } from "next/navigation";
import WriteUsC from "@/app/components/WriteUsC";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCode,
  faBriefcase,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "@/app/hooks/LanguageContext";
import Link from "next/link";

export default function Sidebar() {
  const pathName = usePathname();
  const { t } = useTranslation();

  const imageStyle = {
    width: "13rem",
    height: "13rem",
    zIndex: 100000,
    position: "relative",
  };

  return (
    <>
      {pathName == "/portfolio_viewer" ? null : (
        <section style={{ background: "#400C69 !important" }} id="sidebar">
          <div
            id="sidebar-icon"
            style={{ textAlign: "center" }}
            className="imgWrapper">
            <Link href="/">
              <Image src={Image1} style={imageStyle} alt="this is my image" />
            </Link>
          </div>
          <div
            id="wrapper-sidebar"
            style={{ background: "#400C69", padding: "20px" }}
            className="inner">
            <nav id="sidebar-nav">
              <ul style={{ textAlign: "center", margin: "unset" }}>
                <li className="sidebar-item">
                  <Link href="/">
                    {" "}
                    <FontAwesomeIcon
                      style={{ marginRight: "20px" }}
                      icon={faHouse}
                    />
                    {t("main")}
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link href="/development">
                    {" "}
                    <FontAwesomeIcon
                      style={{ marginRight: "20px" }}
                      icon={faCode}
                    />
                    {t("development")}
                  </Link>
                </li>

                <li className="sidebar-item">
                  <Link href="/pricing">
                    {" "}
                    <FontAwesomeIcon
                      style={{ marginRight: "20px" }}
                      icon={faHandHoldingDollar}
                    />{" "}
                    Pricing
                  </Link>
                </li>

                <li className="sidebar-item">
                  <Link href="/portfolio">
                    {" "}
                    <FontAwesomeIcon
                      style={{ marginRight: "20px" }}
                      icon={faBriefcase}
                    />{" "}
                    {t("portfolio")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <WriteUsC />
        </section>
      )}
    </>
  );
}
