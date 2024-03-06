import React from "react";
import styles from "../Footer/Footer.module.scss";
import { faLinkedin, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from "./../../data/images";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles.sectionFooter}>
          <div className={styles.bigTitle}>Despre noi</div>
          <div className={styles.footerTexts}>
            Lorem ipsum dolor sit amet consectetur. Quis cursus vel vel integer nec. Tempor leo quam dolor ullamcorper
            orci consectetur in. Vivamus scelerisque sit in faucibus.
          </div>
          <div className={styles.footerSocials}>
            <div> Urmareste-ne pe </div>
            <a href="https://www.facebook.com/" className="facebook">
              <FontAwesomeIcon icon={faFacebook} size="2x" color="white" opacity={0.9} />
            </a>
          </div>
        </div>

        <div className={styles.sectionFooter}>
          <div className={styles.bigTitle}>Companie</div>
          <div className={styles.footerTexts}>
            <div>Servicii</div>
            <div>Protectia datelor</div>
            <div>Contact</div>
          </div>
        </div>

        <div className={styles.sectionFooter}>
          <div className={styles.bigTitle}>Servicii</div>
          <div className={styles.footerTexts}>
            <div>Montaj rulou gazon</div>
            <div>Sistem de irigat</div>
            <div>Pregatire insamantare si semanare</div>
            <div>Proiectarea spatiilor verzi</div>
          </div>
        </div>
        <div className={styles.sectionFooter}>
          <div className={styles.bigTitle}>Date de contact</div>
          <div className={styles.footerTexts}>
            <div>
              <img src={images.logos.location} alt="/" />
              <div>Strada Ronda nr. 25, Chtitila, jud. Ilfov</div>
            </div>
            <div>
              <img src={images.logos.phoneLogo} alt="#" />
              <div>0723.721.132</div>
            </div>
            <div>
              <img src={images.logos.letterLogo} alt="#" />
              <div>gazonulverde@yahoo.com</div>
            </div>
          </div>
        </div>

        <div className={styles.sectionFooter}>
          <div className={styles.bigTitle}>Certificari</div>
          <div className={styles.footerImg}>
            <img src={images.logos.iso2015} alt="iso" />
            <img src={images.logos.isoBlue} alt="iso" />
            <img src={images.logos.asfor} alt="iso" />
          </div>
        </div>
      </div>
      <div className={styles.footerName}>© 2023 Gazonul Verde S.R.L.</div>
    </div>
  );
};

export default Footer;
