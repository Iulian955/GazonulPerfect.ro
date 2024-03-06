import React from "react";
import styles from "../Homepage/Homepage.module.scss";
import images from "./../../data/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LuCalendarDays } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";

type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const Homepage = () => {
  const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
    <div
      style={{
        cursor: "pointer",
        position: "absolute",
        top: "50%",
        right: "25px",
        transform: "translate(0, -50%)",
        zIndex: 2
      }}
      onClick={onClick}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 15L10 10L4 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );

  const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
    <div
      style={{
        cursor: "pointer",
        position: "absolute",
        top: "50%",
        left: "25px",
        transform: "translate(0, -50%)",
        zIndex: 2
      }}
      onClick={onClick}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 5L9 10L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    lazyLoad: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: styles.myCarousel,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const imagesProjects = [
    images.homepage.service1,
    images.homepage.service2,
    images.homepage.service3,
    images.homepage.service4,
    images.homepage.service5,
    images.homepage.service6
  ];

  return (
    <div className={styles.homepageContainer}>
      <div className={styles.firstSection}>
        <div className={styles.texts}>
          <div className={styles.mainTitle}>Special Clients Solution</div>
          <div className={styles.subTitle}>
            Lorem ipsum dolor sit amet consectetur. Diam libero tincidunt nec scelerisque. Nunc amet consequat eu quam
            diam proin gravida ac.
          </div>
          <div className={styles.homeBtn}>
            <button>Contacteaza-ne</button>{" "}
          </div>
        </div>

        <div className={styles.newSection}>
          <div className={styles.containerSystem}>
            <div className={styles.systems}>
              <img src={images.homepage.frunza} alt="logo" />
              <div className={styles.systemTitle}>14.000+ metri patrati</div>
              <div className={styles.systemSubTitle}>de gazon însămânțat</div>
            </div>
            <div className={styles.systems}>
              <img src={images.homepage.sisteme} alt="logo" />
              <div className={styles.systemTitle}>150+ sisteme</div>
              <div className={styles.systemSubTitle}>de irigații realizate</div>
            </div>
            <div className={styles.systems}>
              <img src={images.homepage.proiecte} alt="logo" />
              <div className={styles.systemTitle}>200+ de proiecte</div>
              <div className={styles.systemSubTitle}>și servicii mentenanță</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondSection}>
        <div className={styles.mainTexts}>
          <div className={styles.secondSectionMainTitle}>Serviciile noastre</div>
          <div className={styles.secondSectionSubTitle}>
            Lorem ipsum dolor sit amet consectetur. Sit cursus dolor quis quis libero eget a vestibulum urna. Pulvinar
            aliquam auctor orci lectus placerat bibendum magna dictumst. Lorem fringilla eget viverra et lectus amet
            malesuada.{" "}
          </div>
        </div>

        <div className={styles.servicesContainer}>
          <div className={styles.service}>
            <img src={images.homepage.service1} alt="service" />
            <div className={styles.serviceTitle}>Montaj sisteme de irigații</div>
          </div>
          <div className={styles.service}>
            <img src={images.homepage.service2} alt="service" />
            <div className={styles.serviceTitle}>Montaj rulouri gazon</div>
          </div>
          <div className={styles.service}>
            <img src={images.homepage.service3} alt="service" />
            <div className={styles.serviceTitle}>Defrișare și curățare teren</div>
          </div>
          <div className={styles.service}>
            <img src={images.homepage.service4} alt="service" />
            <div className={styles.serviceTitle}>Pregătire însămânțare și semănare gazon</div>
          </div>
          <div className={styles.service}>
            <img src={images.homepage.service5} alt="service" />
            <div className={styles.serviceTitle}>Întreținere grădini și spații verzi</div>
          </div>
          <div className={styles.service}>
            <img src={images.homepage.service6} alt="service" />
            <div className={styles.serviceTitle}>Proiectare a spațiilor  verzi</div>
          </div>
          <div className={styles.service}>
            <img src={images.homepage.service7} alt="service" />
            <div className={styles.serviceTitle}>Construcții și amenajări</div>
          </div>
          <div className={styles.service}>
            <img src={images.homepage.service8} alt="service" />
            <div className={styles.serviceTitle}>Servicii de deszapezire</div>
          </div>
        </div>
      </div>
      <div className={styles.thirdSection}>
        <div className={styles.mainTexts}>
          <div className={styles.secondSectionMainTitle}>De ce sa ne alegi pe noi</div>
          <div className={styles.secondSectionSubTitle}>
            Lorem ipsum dolor sit amet consectetur. Sit cursus dolor quis quis libero eget a vestibulum urna. Pulvinar
            aliquam auctor orci lectus placerat bibendum magna dictumst. Lorem fringilla eget viverra et lectus amet
            malesuada.
          </div>
        </div>

        <div className={styles.irigatii}>
          <div className={styles.sisIrigatii}>
            <img src={images.homepage.irigatii} alt="irigatii" />
            <div className={styles.irigatiiTitle}>Sisteme de irigatii </div>
            <div className={styles.iritgatiiSubTitle}>
              Lorem ipsum dolor sit amet consectetur. Tincidunt arcu egestas dignissim dolor sed sapien.
            </div>
          </div>
          <div className={styles.sisIrigatii}>
            <img src={images.homepage.irigatii} alt="irigatii" />
            <div className={styles.irigatiiTitle}>Sisteme de irigatii </div>
            <div className={styles.iritgatiiSubTitle}>
              Lorem ipsum dolor sit amet consectetur. Tincidunt arcu egestas dignissim dolor sed sapien.
            </div>
          </div>
          <div className={styles.sisIrigatii}>
            <img src={images.homepage.irigatii} alt="irigatii" />
            <div className={styles.irigatiiTitle}>Sisteme de irigatii </div>
            <div className={styles.iritgatiiSubTitle}>
              Lorem ipsum dolor sit amet consectetur. Tincidunt arcu egestas dignissim dolor sed sapien.
            </div>
          </div>
          <div className={styles.sisIrigatii}>
            <img src={images.homepage.irigatii} alt="irigatii" />
            <div className={styles.irigatiiTitle}>Sisteme de irigatii </div>
            <div className={styles.iritgatiiSubTitle}>
              Lorem ipsum dolor sit amet consectetur. Tincidunt arcu egestas dignissim dolor sed sapien.
            </div>
          </div>
        </div>
      </div>

      <div className={styles.forthSection}>
        <div className={styles.mainTexts}>
          <div className={styles.secondSectionMainTitle}>Proiecte recente</div>
          <div className={styles.secondSectionSubTitle}>
            Lorem ipsum dolor sit amet consectetur. Sit cursus dolor quis quis libero eget a vestibulum urna. Pulvinar
            aliquam auctor orci lectus placerat bibendum magna dictumst. Lorem fringilla eget viverra et lectus amet
            malesuada.
          </div>
        </div>
        <div className={styles.links}>
          <a href="/">Toate</a>
          <a href="/">Sisteme de irigatii</a>
          <a href="/">Dezapezire</a>
          <a href="/">Defrisare</a>
          <a href="/">Spatii verzi</a>
        </div>
        <div>
          <Slider {...settings}>
            {imagesProjects.map((image, index) => (
              <div key={index} className={styles.carouselImg}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  style={{
                    width: "100%",
                    height: "400px",
                    display: "block",
                    border: "none",
                    outline: "none",
                    userSelect: "none",
                    objectFit: "cover"
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className={styles.fifthSection}>
        <div className={styles.mainTexts}>
          <div className={styles.secondSectionMainTitle}>Articole recente</div>
          <div className={styles.secondSectionSubTitle}>
            Lorem ipsum dolor sit amet consectetur. Sit cursus dolor quis quis libero eget a vestibulum urna. Pulvinar
            aliquam auctor orci lectus placerat bibendum magna dictumst. Lorem fringilla eget viverra et lectus amet
            malesuada.
          </div>
        </div>

        <div className={styles.articles}>
          <div className={styles.wrapperArt}>
            <div>
              <img className={styles.artImg} src={images.homepage.service1} alt="/" />{" "}
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.userContainer}>
                <img src={images.homepage.icon} alt="icon" />
                <div>Loredana</div>
              </div>

              <div className={styles.dataContainer}>
                <div>
                  {" "}
                  <LuCalendarDays />
                </div>
                <div>20 Decembrie 2023</div>
              </div>

              <div className={styles.greenBtn}>
                <button>Constructii</button>
              </div>
            </div>
            <div className={styles.textsContainer}>
              <div className={styles.artMainTitle}>
                10 sfaturi pentru montajul si intretinerea gazonului pe perioada verii
              </div>
              <div className={styles.artSubTitle}>
                Montajul rulourilor de gazon in timpul verii necesita respectarea catorva pasi esentiali pentru a obtine
                un gazon frumos si sanatos. In continuare va oferim 10 sfaturi pentru a realiza un montaj gazon Ilfov si
                montaj gazon Bucuresti reusit si a asigura o crestere optima a rulourilor de gazon Ilfov si a rulourilor
                de gazon Bucuresti.
              </div>
              <div className={styles.artBtn}>
                <a href="/">
                  Citeste mai mult <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.wrapperArt}>
            <div>
              {" "}
              <img className={styles.artImg} src={images.homepage.service1} alt="/" />{" "}
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.userContainer}>
                <img src={images.homepage.icon} alt="icon" />
                <div>Loredana</div>
              </div>

              <div className={styles.dataContainer}>
                <div>
                  {" "}
                  <LuCalendarDays />
                </div>
                <div>20 Decembrie 2023</div>
              </div>

              <div className={styles.greenBtn}>
                <button>Constructii</button>
              </div>
            </div>
            <div className={styles.textsContainer}>
              <div className={styles.artMainTitle}>
                10 sfaturi pentru montajul si intretinerea gazonului pe perioada verii
              </div>
              <div className={styles.artSubTitle}>
                Montajul rulourilor de gazon in timpul verii necesita respectarea catorva pasi esentiali pentru a obtine
                un gazon frumos si sanatos. In continuare va oferim 10 sfaturi pentru a realiza un montaj gazon Ilfov si
                montaj gazon Bucuresti reusit si a asigura o crestere optima a rulourilor de gazon Ilfov si a rulourilor
                de gazon Bucuresti.
              </div>
              <div className={styles.artBtn}>
                <a href="/">
                  Citeste mai mult <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.wrapperArt}>
            <div>
              {" "}
              <img className={styles.artImg} src={images.homepage.service1} alt="/" />{" "}
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.userContainer}>
                <img src={images.homepage.icon} alt="icon" />
                <div>Loredana</div>
              </div>

              <div className={styles.dataContainer}>
                <div>
                  {" "}
                  <LuCalendarDays />
                </div>
                <div>20 Decembrie 2023</div>
              </div>

              <div className={styles.greenBtn}>
                <button>Constructii</button>
              </div>
            </div>
            <div className={styles.textsContainer}>
              <div className={styles.artMainTitle}>
                10 sfaturi pentru montajul si intretinerea gazonului pe perioada verii
              </div>
              <div className={styles.artSubTitle}>
                Montajul rulourilor de gazon in timpul verii necesita respectarea catorva pasi esentiali pentru a obtine
                un gazon frumos si sanatos. In continuare va oferim 10 sfaturi pentru a realiza un montaj gazon Ilfov si
                montaj gazon Bucuresti reusit si a asigura o crestere optima a rulourilor de gazon Ilfov si a rulourilor
                de gazon Bucuresti.
              </div>
              <div className={styles.artBtn}>
                <a href="/">
                  Citeste mai mult <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
