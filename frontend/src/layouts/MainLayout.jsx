import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingMenu from "../layouts/FloatingMenu";
import ScrollToTop from "../components/common/ScrollToTop";
import ArrowCursor from "../components/common/ArrowCursor";
import BackgroundMusic from "../components/common/BackgroundMusic";
import IntroLoader from "../components/common/IntroLoader";
import PageLoader from "../components/common/PageLoader";

const MainLayout = () => {
  const location = useLocation();
  const firstLoadRef = useRef(true);

  const [entered, setEntered] = useState(false);
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);

  const showIntroLoader = !entered && location.pathname === "/";

  useEffect(() => {
    if (!entered) return;

    if (firstLoadRef.current) {
      firstLoadRef.current = false;
      return; 
    }

    setLoadingPage(true);
    const timer = setTimeout(() => setLoadingPage(false), 700);
    return () => clearTimeout(timer);
  }, [location.pathname, entered]);

  useEffect(() => {
    const handleScroll = () => setShowFloatingMenu(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {entered && <BackgroundMusic play={entered} />}

      {showIntroLoader && (
        <div className="loader-overlay">
          <IntroLoader onEnter={() => setEntered(true)} />
        </div>
      )}

      {loadingPage && (
        <div className="loader-overlay">
          <PageLoader />
        </div>
      )}

      {/* <Header /> */}
      <ArrowCursor />
      <ScrollToTop />

      <main
        className="main-content"
        style={{
          opacity: showIntroLoader || loadingPage ? 0.4 : 1,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <Outlet />
      </main>


      {/* <Footer /> */}
      {/* <FloatingMenu visible={showFloatingMenu} /> */}
      <ScrollToTop />
    </>
  );
};

export default MainLayout;
