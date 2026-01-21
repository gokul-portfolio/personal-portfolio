import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";

import "./assets/css/style.css";
import "./assets/css/responsive.css";

import { ToastContainer } from "react-toastify";
import App from "./App.jsx";

const Root = () => {
  useEffect(() => {
    import("wowjs").then((WOWModule) => {
      new WOWModule.WOW({
        boxClass: "wow",             
        animateClass: "animate__animated", 
        offset: 200,               
        mobile: true,                
        live: true,                  
        mirror: true,                
        scrollContainer: null,      
      }).init();
    });
  }, []);

  return <App />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        {/* Toast notifications */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
        />

        {/* Root App with WOW.js */}
        <Root />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
