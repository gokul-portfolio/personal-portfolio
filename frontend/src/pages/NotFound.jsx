import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import NotFoundImg from "../assets/images/home/page-not-found.webp";
import Button from "../components/common/Button"
const NotFound = () => {
    return (
        <section className="notfound-page">
            <div className="notfound-inner">
                <div className="notfound-img">
                    <img src={NotFoundImg} alt="Page Not Found" />
                </div>

                <h2 className="notfound-subtitle">Page Not Found</h2>

                <p className="notfound-text">
                    Oops! The page you are looking for doesn’t exist or has been moved.
                </p>


                <Button icon={<HiArrowRight />} to="/">
                    Go Back Home 
                </Button>
             
            </div>
        </section>
    );
};

export default NotFound;
