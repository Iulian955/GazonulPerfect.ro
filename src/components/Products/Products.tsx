import React, { useState } from "react";
import styles from "../Products/Products.module.scss";
import images from "./../../data/images";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const productsData = [
  {
    id: "gazon-premium",
    category: "semințe",
    name: "Gazonul™ Premium",
    description:
      "Gazonul™ Premium este o mixtură de soiuri de semințe atent selecționate și testate de peste 20 de ani. Create special pentru a răspunde exigențelor practice și estetice ale consumatorilor, garantăm obținerea unei culturi de gazon dense, omogene, de o culoare verde închis, uniformă și elegantă.",
    imageUrl: images.products.gazonImg,
    greutate_dimensiune: "750g / 29 x 17 x 6,5 cm",
    caracteristici: {
      culoare: "verde",
      tip_produs: "semințe",
      tip: "gazon",
      denumire: "premium",
      cerinte_lumina: "soare,semi-umbra, umbra",
      perioada_germinare: "8-15 zile",
      perioada_plantare: "Martie – Decembrie"
    },
    specificatiiTehnice: {
      puritate: "99,8% – 100% (liber de Poa annua si alte graminee perene si anuale)",
      germinatie: "minim 95%",
      rezistentaTrafic: "foarte mare",
      rezistentaBoli: "foarte mare",
      rezistentaSeceta: "foarte mare",
      rezistentaUmbra: "foarte mare",
      vitezaInstalare: "mare"
    },

    normePlantare: {
      normaInsamantare: "1kg = 35-50 m2",
      adancimeInsamantare: "1-1,5 cm",
      normaSupraInsamantare: "1kg = 70-100 m2"
    },

    normeIngrijire: {
      inaltimeCosire: "5-6 cm",
      inaltimeDupaCosire: "2,5-3 cm",
      frecvCosire: "deasa",
      perenitate: "foarte mare"
    }
  },
  {
    id: "gazon-select",
    category: "semințe",
    name: "Gazonul™ Select",
    description:
      "Semințele Gazonul™Select sunt destinate celor care își doresc o gradină ideală, atât luxurioasă cât și practică. Gazonul rezultat are un foliaj fin, subțire, o culoare vie și cu o durată de viață de 10-20 de ani.Dacă doriți să vă bucurați de un covor compact și catifelat și nu vă deranjează să depuneți un efort susținut în întreținerea gazonului, semințele Gazonul™Select vor aduce satisfacție și celor mai exigenți grădinari.",
    imageUrl: images.products.gazonImg,
    greutate_dimensiune: "750g / 29 x 17 x 6,5 cm",
    caracteristici: {
      culoare: "verde",
      tip_produs: "semințe",
      tip: "gazon",
      denumire: "premium",
      cerinte_lumina: "soare,semi-umbra, umbra",
      perioada_germinare: "8-15 zile",
      perioada_plantare: "Martie – Decembrie"
    }
  },

  {
    id: "gazon-seceta",
    category: "semințe",
    name: "Gazonul™ Secetă",
    description:
      "Semințele Gazonul™ Secetă sunt special concepute pentru un climat uscat și pentru spațiile fără sistem automatizat de irigare sau cu drenaj redus. Provenit dintr-un amestec de semințe cu grad ridicat de puritate si germinație, gazonul rezultat se caracterizează prin rădăcini bine dezvoltate și un foliaj sănătos.În condiții de secetă, gazonul își menține culoarea verde și are o cromatică placută.",
    imageUrl: images.products.gazonImg,
    greutate_dimensiune: "750g / 29 x 17 x 6,5 cm",
    caracteristici: {
      culoare: "verde",
      tip_produs: "semințe",
      tip: "gazon",
      denumire: "premium",
      cerinte_lumina: "soare,semi-umbra, umbra",
      perioada_germinare: "8-15 zile",
      perioada_plantare: "Martie – Decembrie"
    }
  },
  {
    id: "gazon-umbra",
    category: "semințe",
    name: "Gazonul™ Umbră",
    description:
      "Dacă vă doriți o gradină înconjurată de arbori sau o livadă aspectuoasă, semințele Gazonul™ Umbră reprezintă alegerea ideală. Cu o formulă special creată, acestea vor da naștere unui gazon care se va dezvolta armonios în orice condiții.",
    imageUrl: images.products.gazonImg,
    greutate_dimensiune: "750g / 29 x 17 x 6,5 cm",
    caracteristici: {
      culoare: "verde",
      tip_produs: "semințe",
      tip: "gazon",
      denumire: "premium",
      cerinte_lumina: "soare,semi-umbra, umbra",
      perioada_germinare: "8-15 zile",
      perioada_plantare: "Martie – Decembrie"
    }
  },

  {
    id: "gazon-instant",
    category: "semințe",
    name: "Gazonul™ Instant",
    description:
      "Dacă doriți un gazon care necesită costuri reduse de înființare și întreținere și care să crească rapid, indiferent de condițiile de climă sau relief, semințele Gazonul™Instant sunt cele mai recomandate. Astfel, vă puteți bucura de o peluză verde cu efort minim, în mai puțin de două saptămâni.",
    imageUrl: images.products.gazonImg,
    greutate_dimensiune: "750g / 29 x 17 x 6,5 cm",
    caracteristici: {
      culoare: "verde",
      tip_produs: "semințe",
      tip: "gazon",
      denumire: "premium",
      cerinte_lumina: "soare,semi-umbra, umbra",
      perioada_germinare: "8-15 zile",
      perioada_plantare: "Martie – Decembrie"
    }
  },

  {
    id: "gazon-clasic",
    category: "semințe",
    name: "Gazonul™ Clasic",
    description:
      "Cu o formulă echilibrată, amestecul de semințe Gazonul™ Clasic are destinație universală. Rezistent la trafic și boli, gazonul rezultatacoperă uniform suprafețe extinse de teren cu iarbă robustă. Astfel, servește cu succes atât scopurilor practice, cât și celor ambientale.",
    imageUrl: images.products.gazonImg,
    greutate_dimensiune: "750g / 29 x 17 x 6,5 cm",
    caracteristici: {
      culoare: "verde",
      tip_produs: "semințe",
      tip: "gazon",
      denumire: "premium",
      cerinte_lumina: "soare,semi-umbra, umbra",
      perioada_germinare: "8-15 zile",
      perioada_plantare: "Martie – Decembrie"
    }
  },

  {
    id: "gazon-carpati",
    category: "semințe",
    name: "Gazonul™ Carpați",
    description:
      "Creat special pentru a aduce prospețimea ierbii de la munte, semințele Gazonul™ Carpați decorează perfect spațiile cu trafic intens, mai ales grădinile dedicate copiilor sau animalelor. Dacă doriți să vă bucurați de o peluză un frunziș fin, des, de un verde crud, așa cum este pajiștea de la munte, amestecul de semințe Gazonul™ Carpați este alegerea potrivită, iar gazonul rezultat va deveni locul preferat de relaxare al oricărei familii.",
    imageUrl: images.products.gazonImg,
    greutate_dimensiune: "750g / 29 x 17 x 6,5 cm",
    caracteristici: {
      culoare: "verde",
      tip_produs: "semințe",
      tip: "gazon",
      denumire: "premium",
      cerinte_lumina: "soare,semi-umbra, umbra",
      perioada_germinare: "8-15 zile",
      perioada_plantare: "Martie – Decembrie"
    }
  },

  {
    id: "gazon-starter",
    category: "îngrășăminte",
    name: "Gazonul™ Starter",
    description:
      "Ingrasamantul Gazonul™ Starter este ideal pentru o fertilizare de baza – de amenajare, de regenerare sau de indreptare a peluzei. Se foloseste in fazele de semanare, de suprainsamnantare sau de asternere a covorului de gazon.",
    imageUrl: images.products.gazonImg,
    greutate_dimensiune: "750g / 29 x 17 x 6,5 cm",
    caracteristici: {
      culoare: "verde",
      tip_produs: "îngrășăminte",
      tip: "gazon",
      denumire: "premium",
      cerinte_lumina: "soare,semi-umbra, umbra",
      perioada_germinare: "8-15 zile",
      perioada_plantare: "Martie – Decembrie"
    }
  },
  {
    id: "gazon-balance",
    category: "îngrășăminte",
    name: "Gazonul™ Balance",
    description:
      "Avand o formula echilibrata, ingrasamantul Gazonul™ Balance este ideal pentru o fertilizare de indreptare si de intretinere a peluzei pe intreaga sa durata de viata. Fiind potrivit pentru utilizare in toate fazele de vegetatie ale gazonului, acesta ajuta la echilibrarea raportului nutritional al plantelor. Mai mult, este ideal pentru acoperirea tuturor carentelor din sol, oferind vegetatiei toate elementele necesare unei cresteri continue",
    imageUrl: images.products.gazonImg,
    greutate_dimensiune: "750g / 29 x 17 x 6,5 cm",
    caracteristici: {
      culoare: "verde",
      tip_produs: "îngrășăminte",
      tip: "gazon",
      denumire: "premium",
      cerinte_lumina: "soare,semi-umbra, umbra",
      perioada_germinare: "8-15 zile",
      perioada_plantare: "Martie – Decembrie"
    }
  },
  {
    id: "gazon-fortify",
    category: "îngrășăminte",
    name: "Gazonul™ Fortify",
    description:
      "Fertilizantul Gazonul™ Fortify este conceput special pentru a dezvolta rezistenta gazonului la trafic intens, la conditii de clima mai putin favorabile, la daunatori si boli. Acesta prelungeste semnificativ durata de viata a gazonului, prin imbunatatirea tesutului vegetal si cresterea imunitatii.",
    imageUrl: images.products.gazonImg,
    greutate_dimensiune: "750g / 29 x 17 x 6,5 cm",
    caracteristici: {
      culoare: "verde",
      tip_produs: "îngrășăminte",
      tip: "gazon",
      denumire: "premium",
      cerinte_lumina: "soare,semi-umbra, umbra",
      perioada_germinare: "8-15 zile",
      perioada_plantare: "Martie – Decembrie"
    }
  },
  {
    id: "fertilizant-nutrifix",
    category: "îngrășăminte",
    name: "Fertilizant lichid NutriFix™",
    description:
      "NutriFix™ este un ingrasamant foliar cu 22% continut de azot. 41% dintre acesta este azot cu actiune rapida (in diverse forme, incluzand azot ureic, azotat si azot amoniacal) care poate fi resorbit rapid si complet de catre plante intr-un interval de 24 – 48 de ore dupa aplicare. Restul de azot este sub forme polimerice scurte de uree metilenica cu eliberare lenta – MDU si DMTU.",
    imageUrl: images.products.gazonImg,
    greutate_dimensiune: "750g / 29 x 17 x 6,5 cm",
    caracteristici: {
      culoare: "verde",
      tip_produs: "îngrășăminte",
      tip: "gazon",
      denumire: "premium",
      cerinte_lumina: "soare,semi-umbra, umbra",
      perioada_germinare: "8-15 zile",
      perioada_plantare: "Martie – Decembrie"
    }
  }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("semințe");
  const [products, setProducts] = useState(productsData);
  const filteredProducts = products.filter((product) => product.category === selectedCategory);
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className={styles.productsContainer}>
      <div className={styles.headTitle}>Produse</div>
      <div className={styles.products}>
        <div className={styles.categoryButtons}>
          <button
            onClick={() => setSelectedCategory("semințe")}
            className={selectedCategory === "semințe" ? styles.activeCategory : ""}
          >
            Semințe
          </button>
          <button
            onClick={() => setSelectedCategory("îngrășăminte")}
            className={selectedCategory === "îngrășăminte" ? styles.activeCategory : ""}
          >
            Îngrășăminte
          </button>
        </div>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.singleProduct}>
            <div className={styles.prImg}>
              <img src={product.imageUrl} alt="products" />
            </div>
            <div className={styles.productsTexts}>
              <div className={styles.productMainTitle}>{product.name}</div>
              <div className={styles.productSubTitle}>{product.description}</div>
              <div className={styles.prBtn}>
                <button onClick={() => handleProductClick(product.id)}>Afla mai multe</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.contactSection}>
        <div className={styles.contactTitle}>Contacteaza-ne</div>

        <div className={styles.sections}>
          <div className={styles.secondSectionContact}>
            <div className={styles.infos}>
              <div className={styles.contactInfo}>
                <div className={styles.infoPhoto}>
                  <img src={images.contact.mailLogo} alt="mail" />
                </div>
                <div className={styles.contactTexts}>
                  <div className={styles.infoTitle}>Email</div>
                  <div className={styles.infoSubTitle}>gazonulverde@yahoo.com</div>
                </div>
              </div>
              <div className={styles.contactInfo}>
                <div className={styles.infoPhoto}>
                  <img src={images.contact.mailLogo} alt="mail" />
                </div>
                <div className={styles.contactTexts}>
                  <div className={styles.infoTitle}>Adresa</div>
                  <div className={styles.infoSubTitle}>gazonulverde@yahoo.com</div>{" "}
                </div>
              </div>

              <div className={styles.contactInfo}>
                <div className={styles.infoPhoto}>
                  <img src={images.contact.mailLogo} alt="mail" />
                </div>
                <div className={styles.contactTexts}>
                  <div className={styles.infoTitle}>Telefon</div>
                  <div className={styles.infoSubTitle}>0723.721.132</div>{" "}
                </div>
              </div>

              <div className={styles.contactInfo}>
                <div className={styles.infoPhoto}>
                  <img src={images.contact.mailLogo} alt="mail" />
                </div>
                <div className={styles.contactTexts}>
                  <div className={styles.infoTitle}>Date fiscale</div>
                  <div className={styles.infoSubTitle}>
                    GAZONUL VERDE S.R.L. CUI: RO 39772006 Nr. Reg: J23/3944/2018
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>

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
      </div>
    </div>
  );
};

export default Products;
