import React from "react";
import styles from "../Contact/Contact.module.scss";
import images from "./../../data/images";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.headTitle}>Contact</div>

      <div className={styles.firstSectionContact}>
        <div className={styles.contactMap}>
          <img src={images.contact.map} alt="map" />
        </div>
        <div className={styles.contactForm}>
          <div className={styles.formTitle}>Contacteaza-ne</div>
          <div className={styles.contactInputs}>
            <input placeholder="Nume" />
            <input placeholder="Email" />
            <input placeholder="Telefon" />
            <textarea placeholder="Mesaj" />
            <div className={styles.formBox}>
              <input type="checkbox" className={styles.formCheck} />
              <label>Accept procesarea datelor cu caracter personal</label>
            </div>
          </div>
          <div className={styles.sendBtn}>
            <button>Trimite mesajul</button>
          </div>
        </div>
      </div>

      <div className={styles.secondSectionContact}>
        <div className={styles.infos}>
          <div className={styles.contactInfo}>
            <div className={styles.infoPhoto}>
              <img src={images.contact.mailLogo} alt="mail" />
            </div>
            <div className={styles.infoTitle}>Email</div>
            <div className={styles.infoSubTitle}>gazonulverde@yahoo.com</div>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.infoPhoto}>
              <img src={images.contact.mailLogo} alt="mail" />
            </div>
            <div className={styles.infoTitle}>Adresa</div>
            <div className={styles.infoSubTitle}>gazonulverde@yahoo.com</div>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.infoPhoto}>
              <img src={images.contact.mailLogo} alt="mail" />
            </div>
            <div className={styles.infoTitle}>Telefon</div>
            <div className={styles.infoSubTitle}>gazonulverde@yahoo.com</div>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.infoPhoto}>
              <img src={images.contact.mailLogo} alt="mail" />
            </div>
            <div className={styles.infoTitle}>Email</div>
            <div className={styles.infoSubTitle}>gazonulverde@yahoo.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
