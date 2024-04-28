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
          {/* <iframe
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJmfOrP1gEskAR5Ql7pJiS91c&key=..."
          ></iframe>   */}
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
              <img src={images.contact.location1} alt="location" />
            </div>
            <div className={styles.infoTitle}>Adresa</div>
            <div className={styles.infoSubTitle}>Strada Ronda nr. 25, Chitila, jud. Ilfov</div>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.infoPhoto}>
              <img src={images.contact.phone1} alt="phone" />
            </div>
            <div className={styles.infoTitle}>Telefon</div>
            <div className={styles.infoSubTitle}>0723.721.132</div>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.infoPhoto}>
              <img src={images.contact.date1} alt="date" />
            </div>
            <div className={styles.infoTitle}>Date fiscale</div>
            <div className={styles.infoSubTitle}>
              GAZONUL VERDE S.R.L. <br /> CUI: RO 39772006 <br /> Nr. Reg: J23/3944/2018
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
