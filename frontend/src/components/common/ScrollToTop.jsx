import React, { useEffect, useState } from "react";
import img from "../../assets/images/icons/click-to-top.webp"

const ScrollToTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={`scroll-top-btn ${show ? "show" : "hide"}`}
            onClick={scrollTop}
            aria-label="Scroll to top"
        >
         <img src={img} className="img-fluid" alt="" />
        </button>
    );
};

export default ScrollToTop;
