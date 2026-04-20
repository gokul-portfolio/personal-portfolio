import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import "animate.css/animate.min.css"; // ✅ ONLY THIS

import "./assets/css/style.css";
import "./assets/css/responsive.css";

import { ToastContainer } from "react-toastify";
import App from "./App.jsx";

const Root = () => {
  useEffect(() => {
    import("wowjs").then((WOWModule) => {
      const wow = new WOWModule.WOW({
        boxClass: "wow",
        animateClass: "animate__animated",
        offset: 550,        // section viewport-ku vandhaa trigger
        mobile: true,
        live: false,        // React-ku best
        resetAnimation: true, // 🔥 IMPORTANT: replay animation
      });

      wow.init();
    });
  }, []);


  return <App />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          pauseOnHover
          draggable
        />
        <Root />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
