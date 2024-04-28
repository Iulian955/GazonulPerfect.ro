import React from "react";
import styles from "./ContactUs.module.scss";

const ContactUs = () => {
  return (
    <div className={styles.contactUsContainer}>
      <div className={styles.headTitle}>Contacteaza-ne</div>

      <div className={styles.contactForm}>
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
  );
};

export default ContactUs;
