import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingMenu from "../layouts/FloatingMenu";
import ScrollToTop from "../components/common/ScrollToTop";

const MainLayout = () => {
    const [showFloatingMenu, setShowFloatingMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setShowFloatingMenu(scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/* Header */}
            {/* <Header /> */}

            {/* Page Content */}
            <main className="main-content">

                <Outlet />
                
            </main>

            {/* Footer */}
            {/* <Footer /> */}

            {/* Floating Menu (optional) */}
            {/* <FloatingMenu visible={showFloatingMenu} /> */}

            {/* Scroll To Top Button */}
            {/* <ScrollToTop /> */}
        </>
    );
};

export default MainLayout;
