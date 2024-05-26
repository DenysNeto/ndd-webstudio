"use client";
import SectionC from "@/app/components/SectionC";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faTelegram,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  handleFacebookClick,
  handleWhatsappClick,
  handleInstagramClick,
  handleTelegramClick,
  handlePhoneClick,
  handleEmailClick,
} from "@/app/hooks/services.js";

import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons";

import { usePathname } from "next/navigation";
import { useTranslation } from "@/app/hooks/LanguageContext";

import Link from "next/link";

export default function FooterC() {
  const { t } = useTranslation();

  const pathName = usePathname();
  let isShown = pathName != "/portfolio_viewer";
  return (
    isShown && (
      <SectionC className="wrapper style1 fullscreen fade-up" id="intro">
        <div class="row">
          <div class="col-6 col-12-xsmall">
            <div
              onClick={() => handlePhoneClick("+48 790-213-083")}
              style={{ marginBottom: "10px", cursor: "pointer" }}>
              <span>
                {" "}
                <FontAwesomeIcon icon={faPhone} />
                +48 790-213-083
              </span>
            </div>
            <div
              onClick={() => handlePhoneClick("+972 53-429-8280")}
              style={{ marginBottom: "10px", cursor: "pointer" }}>
              <span>
                {" "}
                <FontAwesomeIcon icon={faPhone} />
                +972 53-429-8280
              </span>
            </div>

            <div
              onClick={handleEmailClick}
              style={{ marginBottom: "10px", cursor: "pointer" }}>
              <span>
                {" "}
                <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>{" "}
                ndd.webstudio@gmail.com
              </span>
            </div>

            <div style={{ display: "flex", gap: "20px" }}>
              <div className="round-btn-wrapper" onClick={handleFacebookClick}>
                <FontAwesomeIcon style={{ height: "50px" }} icon={faFacebook} />
              </div>
              <div className="round-btn-wrapper" onClick={handleWhatsappClick}>
                <FontAwesomeIcon style={{ height: "50px" }} icon={faWhatsapp} />
              </div>
              <div className="round-btn-wrapper" onClick={handleTelegramClick}>
                <FontAwesomeIcon style={{ height: "50px" }} icon={faTelegram} />
              </div>
              <div className="round-btn-wrapper" onClick={handleInstagramClick}>
                <FontAwesomeIcon
                  style={{ height: "50px" }}
                  icon={faInstagram}
                />
              </div>
            </div>
          </div>
          <div id="footer-uslugi" class="col-6 col-12-xsmall">
            <h3>{t("services")}</h3>

            <Link href="/landing_page">
              <div>{t("landing_page")}</div>
            </Link>
            <Link href="/corporate_website">
              <div>{t("corporate_site")} </div>
            </Link>
            <Link href="/business_website">
              <div>{t("business_site")} </div>
            </Link>
            <Link href="/shop_website">
              <div> {t("online_store")}</div>
            </Link>
            <Link href="/promo_website">
              <div>{t("promo_site")} </div>
            </Link>
            <Link href="/support">
              <div>{t("tech_support")}</div>
            </Link>
            <Link href="/development">
              <div>{t("development")}</div>
            </Link>
            <Link href="/pricing">
              <div>{t("pricing")}</div>
            </Link>
          </div>
        </div>
      </SectionC>
    )
  );
}
