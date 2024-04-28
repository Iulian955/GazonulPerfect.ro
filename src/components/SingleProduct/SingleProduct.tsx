import React, { useState } from "react";
import styles from "../SingleProduct/SingleProduct.module.scss";
import images from "./../../data/images";
import { useParams } from "react-router-dom";
import { productsData } from "../Products/Products";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = productsData.find((product) => product.id.toString() === productId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("descriere");

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.singleProductContainer}>
      <div className={styles.headTitle}>Produs</div>{" "}
      <div className={styles.productSingle}>
        {product && (
          <div className={styles.prd}>
            <div className={styles.prdPresentation}>
              <div className={styles.slider}>
                <img src={product.imageUrl} alt="product" />
              </div>
              <div className={styles.prdTexts}>
                <div className={styles.prdTitle}> {product.name}</div>
                <div className={styles.prdDescription}>{product.description}</div>
                <div className={styles.prdDimensionsTitle}>Greutate/Dimensiune</div>
                <div className={styles.prdDimension}>
                  <img src={images.products.greenDot} alt="greenDot" />
                  {product.greutate_dimensiune}
                </div>
                <div className={styles.prdButton}>
                  <button>Cere oferta</button>
                </div>
              </div>
            </div>

            <div className={styles.prdSpecification}>
              <div className={styles.prdCatNames}>
                <button
                  onClick={() => setActiveSection("descriere")}
                  className={activeSection === "descriere" ? styles.activeButton : ""}
                >
                  Descriere
                </button>
                <button
                  onClick={() => setActiveSection("caracteristiciGenerale")}
                  className={activeSection === "caracteristiciGenerale" ? styles.activeButton : ""}
                >
                  Caracteristici generale
                </button>
                <button
                  onClick={() => setActiveSection("specificatiiTehnice")}
                  className={activeSection === "specificatiiTehnice" ? styles.activeButton : ""}
                >
                  Specificații tehnice
                </button>
                <button
                  onClick={() => setActiveSection("normeDePlantare")}
                  className={activeSection === "normeDePlantare" ? styles.activeButton : ""}
                >
                  Norme de plantare
                </button>
                <button
                  onClick={() => setActiveSection("normeDeIngrjireGazon")}
                  className={activeSection === "normeDeIngrjireGazon" ? styles.activeButton : ""}
                >
                  Norme de îngrijire a gazonului
                </button>
              </div>

              <div className={styles.prdContent}>
                {activeSection === "descriere" && <div className={styles.prdDescription}>{product.description}</div>}
                {activeSection === "caracteristiciGenerale" && (
                  <div className={styles.caracteristiciGenerale}>
                    <div>
                      <div className={styles.caractName}>Culoare:</div>
                      <div className={styles.caractVal}>{product.caracteristici.culoare}</div>
                    </div>

                    <div>
                      <div className={styles.caractName}>Tip Produs:</div>
                      <div className={styles.caractVal}>{product.caracteristici.tip_produs}</div>
                    </div>

                    <div>
                      <div className={styles.caractName}>Tip:</div>
                      <div className={styles.caractVal}>{product.caracteristici.tip}</div>
                    </div>

                    <div>
                      <div className={styles.caractName}>Denumire:</div>
                      <div className={styles.caractVal}>{product.caracteristici.denumire}</div>
                    </div>

                    <div>
                      <div className={styles.caractName}>Cerinte lumina:</div>
                      <div className={styles.caractVal}>{product.caracteristici.cerinte_lumina}</div>
                    </div>
                    <div>
                      <div className={styles.caractName}>Perioada de germinare:</div>
                      <div className={styles.caractVal}>{product.caracteristici.perioada_germinare}</div>
                    </div>
                    <div>
                      <div className={styles.caractName}>Perioada de plantare:</div>
                      <div className={styles.caractVal}>{product.caracteristici.perioada_plantare}</div>
                    </div>
                  </div>
                )}
                {activeSection === "specificatiiTehnice" && (
                  <div className={styles.caracteristiciGenerale}>
                    <div>
                      <div className={styles.caractName}>Puritate:</div>
                      <div className={styles.caractVal}>{product.specificatiiTehnice?.puritate}</div>
                    </div>

                    <div>
                      <div className={styles.caractName}>Germinație:</div>
                      <div className={styles.caractVal}>{product.specificatiiTehnice?.germinatie}</div>
                    </div>

                    <div>
                      <div className={styles.caractName}>Rezistență la trafic:</div>
                      <div className={styles.caractVal}>{product.specificatiiTehnice?.rezistentaTrafic}</div>
                    </div>

                    <div>
                      <div className={styles.caractName}>Rezistență la boli:</div>
                      <div className={styles.caractVal}>{product.specificatiiTehnice?.rezistentaBoli}</div>
                    </div>

                    <div>
                      <div className={styles.caractName}>Rezistență la seceta:</div>
                      <div className={styles.caractVal}>{product.specificatiiTehnice?.rezistentaSeceta}</div>
                    </div>

                    <div>
                      <div className={styles.caractName}>Rezistență la umbra:</div>
                      <div className={styles.caractVal}>{product.specificatiiTehnice?.rezistentaUmbra}</div>
                    </div>
                    <div>
                      <div className={styles.caractName}>Viteza de instalare:</div>
                      <div className={styles.caractVal}>{product.specificatiiTehnice?.vitezaInstalare}</div>
                    </div>
                  </div>
                )}
                {activeSection === "normeDePlantare" && (
                  <div className={styles.caracteristiciGenerale}>
                    <div>
                      <div className={styles.caractName}>Norma de însămânțare: </div>
                      <div className={styles.caractVal}>{product.normePlantare?.normaInsamantare}</div>
                    </div>

                    <div>
                      <div className={styles.caractName}>Adancimea de insamantare:</div>
                      <div className={styles.caractVal}>{product.normePlantare?.adancimeInsamantare}</div>
                    </div>

                    <div>
                      <div className={styles.caractName}>Norma de supraînsămânțare:</div>
                      <div className={styles.caractVal}>{product.normePlantare?.normaSupraInsamantare}</div>
                    </div>
                  </div>
                )}
                {activeSection === "normeDeIngrjireGazon" && (
                  <div className={styles.caracteristiciGenerale}>
                    <div>
                      <div className={styles.caractName}>Înălțimea recomandata la cosire: </div>
                      <div className={styles.caractVal}>{product.normeIngrijire?.inaltimeCosire}</div>
                    </div>

                    <div>
                      <div className={styles.caractName}>Înălțimea recomandata dupa cosire:</div>
                      <div className={styles.caractVal}>{product.normeIngrijire?.inaltimeDupaCosire}</div>
                    </div>

                    <div>
                      <div className={styles.caractName}>Frecventa recomandata a cosirii:</div>
                      <div className={styles.caractVal}>{product.normeIngrijire?.frecvCosire}</div>
                    </div>

                    <div>
                      <div className={styles.caractName}>Perenitatea in conditii optime:</div>
                      <div className={styles.caractVal}>{product.normeIngrijire?.perenitate}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
