import React, { useEffect, useState } from "react";
import styles from "../ServicesPage/ServicesPage.module.scss";
import images from "./../../data/images";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";

const ServicesPage = () => {
  const [visibleItems, setVisibleItems] = useState(7);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileOrTablet = window.matchMedia("(max-width: 992px)").matches;
      setIsMobileOrTablet(isMobileOrTablet);
      setVisibleItems(isMobileOrTablet ? 7 : 23);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleViewMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 7);
  };
  const handleShowLess = () => {
    setVisibleItems((prevVisibleItems) => (prevVisibleItems > 7 ? prevVisibleItems - 7 : 7));
  };
  const yourData = [
    { image: images.servicesImg.dotari, text: "BobCat 751 si S130" },
    { image: images.servicesImg.dotari, text: "Tractor Mini 27 CP" },
    { image: images.servicesImg.dotari, text: "Picon Bobcat" },
    { image: images.servicesImg.dotari, text: "Freza pamant" },
    { image: images.servicesImg.dotari, text: "Brat Excavare Bobcat" },
    { image: images.servicesImg.dotari, text: "Mulcher Vegetatie si masa lemnoasa pana la 4 cm grosime" },
    { image: images.servicesImg.dotari, text: "Utilaj sapat santuri Bobcat" },
    { image: images.servicesImg.dotari, text: "Cositoare vegetatie nelemnoasa" },
    { image: images.servicesImg.dotari, text: "Matura Bobcat si Atasament tip grapa, Bobcat" },
    { image: images.servicesImg.dotari, text: "Incarcator Frontal" },
    { image: images.servicesImg.dotari, text: "Lift materiale, Exterior, 22m, 250 kg" },
    { image: images.servicesImg.dotari, text: "Grebla vegetatie taiata" },
    { image: images.servicesImg.dotari, text: "Platforme Utilaje , Masa utila 2,5to" },
    { image: images.servicesImg.dotari, text: "Despicator lemne hidraulic" },
    { image: images.servicesImg.dotari, text: "Utilitara Basculabila 3,5to MTMA" },
    { image: images.servicesImg.dotari, text: "Masini de tuns gazon" },
    { image: images.servicesImg.dotari, text: "Tocator masa lemnoasa JENSEN A328 Φ 220mm (30mc/ zi" },
    { image: images.servicesImg.dotari, text: "Motosapa" },
    { image: images.servicesImg.dotari, text: "Tocator buturugi VERMEER Φ 1600mm, 400mm adancime" },
    { image: images.servicesImg.dotari, text: "Moto freza" },
    { image: images.servicesImg.dotari, text: "Autoturisme transport persoane 8+1, 4+1 etc." },
    { image: images.servicesImg.dotari, text: "Placi compactoare" },
    { image: images.servicesImg.dotari, text: "Tractor Mini 20 CP" }
  ];

  return (
    <div className={styles.servicesContainer}>
      <div className={styles.headTitle}>Servicii</div>

      <div className={styles.firstSectionServices}>
        <div className={styles.servicesItem}>
          <div className={styles.servImg}>
            <img src={images.servicesImg.p1} alt="servicii" />
          </div>{" "}
          <div className={styles.servText}>
            <div className={styles.serviceTitle}>Montaj rulou de gazon</div>
            <div className={styles.serviceSubTitle}>
              In maxim 4 ore de la decopertarea ruloului de gazon acesta va fi montat in curte.
            </div>
            <div className={styles.serviceBtn}>
              <button>Contacteaza-ne</button>
            </div>
          </div>
        </div>
        <div className={styles.servicesItem}>
          <div className={styles.servImg}>
            <img src={images.servicesImg.p2} alt="servicii" />
          </div>{" "}
          <div className={styles.servText}>
            <div className={styles.serviceTitle}>Sistem de irigat – proiectare si montaj</div>
            <div className={styles.serviceSubTitle}>
              In maxim 48 ore de la solicitare va putem intocmi proiectul si devizul pentru sistemul de irigat. <br />{" "}
              <br /> Dupa intocmirea proiectului si a devizului se poate trece la montajul acestuia folosind utilaje
              specifice.
            </div>
            <div className={styles.serviceBtn}>
              <button>Contacteaza-ne</button>
            </div>
          </div>
        </div>

        <div className={styles.servicesItem}>
          <div className={styles.servImg}>
            <img src={images.servicesImg.p3} alt="servicii" />
          </div>{" "}
          <div className={styles.servText}>
            <div className={styles.serviceTitle}>Proiectare a spatiilor verzi</div>
            <div className={styles.serviceSubTitle}>
              Dupa masuratoare si punctarea principalelor repere se poate trece la proiectarea in 2 D –  in plan si 3 D
              – in spatiu , intocmirea devizului de materiale si a materialului dendrologic.
            </div>
            <div className={styles.serviceBtn}>
              <button>Contacteaza-ne</button>
            </div>
          </div>
        </div>

        <div className={styles.servicesItem}>
          <div className={styles.servImg}>
            <img src={images.servicesImg.p4} alt="servicii" />
          </div>{" "}
          <div className={styles.servText}>
            <div className={styles.serviceTitle}>Defrișare și curățare teren</div>
            <div className={styles.serviceSubTitle}>
              Servicii de taiere, toaletare si doborare sau defrisare copaci uscati, periculosi ori cazuti, lucrari de
              taiere si toaletare arbori inalti, copaci dezechilibrati sau pomi inclinati.
              <br /> <br /> Evacuarea deseurilor este inclusa.
            </div>
            <div className={styles.serviceBtn}>
              <button>Contacteaza-ne</button>
            </div>
          </div>
        </div>
        <div className={styles.servicesItem}>
          <div className={styles.servImg}>
            <img src={images.servicesImg.p5} alt="servicii" />
          </div>{" "}
          <div className={styles.servText}>
            <div className={styles.serviceTitle}>Pregătire însămânțare și semănare gazon</div>
            <div className={styles.serviceSubTitle}>
              Dupa efectuarea lucrarilor specifice (frezare, nivelare, aditie pamant) se poate efectua operatiunea de
              insamantare.
              <br />
              <br />
              <a href="">Vezi produsele folosite</a>
            </div>
            <div className={styles.serviceBtn}>
              <button>Contacteaza-ne</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.secondSectionServices}>
        <div className={styles.mainTexts}>
          <div className={styles.secondSectionMainTitle}>Dotari</div>
          <div className={styles.secondSectionSubTitle}>
            Lorem ipsum dolor sit amet consectetur. Sit cursus dolor quis quis libero eget a vestibulum urna. Pulvinar
            aliquam auctor orci lectus placerat bibendum magna dictumst. Lorem fringilla eget viverra et lectus amet
            malesuada.
          </div>
        </div>
        <div className={styles.dotariContainer}>
          {yourData.slice(0, visibleItems).map((item, index) => (
            <div key={index} className={styles.dotare}>
              <img src={item.image} alt="dotariLogo" />
              <div className={styles.dotareText}>{item.text}</div>
            </div>
          ))}
        </div>
        {isMobileOrTablet && visibleItems < yourData.length && (
          <div className={styles.MoreLessButton}>
            <button onClick={handleViewMore}>
              View More <MdKeyboardArrowDown />
            </button>
          </div>
        )}

        {isMobileOrTablet && visibleItems > 7 && (
          <div className={styles.MoreLessButton}>
            <button onClick={handleShowLess}>
              Show Less <MdKeyboardArrowUp />
            </button>
          </div>
        )}
      </div>

      <div className={styles.servicesPhotos}>
        <div className={styles.srvImg}>
          <div className={styles.miniPhotos}>
            <img src={images.servicesImg.pp1} alt="srv" />
            <img src={images.servicesImg.pp2} alt="srv" />
            <img src={images.servicesImg.pp3} alt="srv" />
            <img src={images.servicesImg.pp4} alt="srv" />
          </div>
          <img className={styles.bigPhoto} src={images.servicesImg.pp5} alt="srv" />
        </div>

        <div className={styles.srvImg}>
          <img className={styles.bigPhoto} src={images.servicesImg.pp6} alt="srv" />
          <div className={styles.miniPhotos}>
            <img src={images.servicesImg.pp7} alt="srv" />
            <img src={images.servicesImg.pp8} alt="srv" />
            <img src={images.servicesImg.pp9} alt="srv" />
            <img src={images.servicesImg.pp10} alt="srv" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
