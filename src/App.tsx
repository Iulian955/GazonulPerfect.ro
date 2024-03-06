/* eslint-disable */
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useEffect, useState, lazy } from "react";
import ReactGA from "react-ga4";
import ReactRouter from "react-router";

import { getData } from "./data/productList";
import { AuthProvider } from "./components/context/AuthProvider";
import { getCookie } from "./components/CookieConsent/functions";
import "./App.css";
import NotFound from "./components/NotFound/NotFound";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import Contact from "./components/Contact/Contact";

// export const ProductsContext = React.createContext<any[]>([]);

// import { useScrollSense } from "./components/hooks/senseHook/useScrollSense";
// import { CookiesTagConsent, ProductsFromSessionStorage } from "./data/constants";
// const Loading = () => <div>LOADING</div>;

function App() {
  // const [letsCartHandler, CartHandler] = useState(0);
  // const [ssProducts, setSSproducts] = useState<any>();

  // useScrollSense(() => {
  //   ReactGA.event(`User scrolled to bottom on [${window.location.pathname}]`);
  // });

  // const getCookieConsent = () => {
  //   if (getCookie(CookiesTagConsent) === "userAccepted") return false;
  //   else return true;
  // };

  // useEffect(() => {
  //   if (ssProducts == null) {
  //     getData().then((finalData) => {
  //       sessionStorage.setItem(ProductsFromSessionStorage, JSON.stringify(finalData));
  //     });
  //   }
  // }, [ssProducts]);

  return (
    <div className="App">
      {/* {getCookieConsent() && <CookieConsent />} */}
      <header className="App-header">
        <BrowserRouter basename="/">
          <AuthProvider>
            <Navbar />{" "}
            <Routes>
              <Route path={`/`} element={<Homepage />} />
              <Route path={`/servicii`} element={<ServicesPage />} />
              <Route path={`/contact`} element={<Contact />} />
            </Routes>
            <Footer />
          </AuthProvider>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
