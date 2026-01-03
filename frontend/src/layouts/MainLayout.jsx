import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingMenu from "../layouts/FloatingMenu";

const MainLayout = () => {
    const [showFloatingMenu, setShowFloatingMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowFloatingMenu(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Header />

            <main className="main-content">
                <Outlet />
            </main>

            {/* <Footer /> */}

            <FloatingMenu visible={showFloatingMenu} />
        </>
    );
};

export default MainLayout;
