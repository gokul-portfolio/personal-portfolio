import React from "react";
import { Helmet } from "react-helmet-async";
import { HiArrowRight } from "react-icons/hi";
import NotFoundImg from "../assets/images/home/page-not-found.webp";
import Button from "../components/common/Button";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Gokul Portfolio</title>
        <meta
          name="description"
          content="The page you requested does not exist or may have been moved. Return to the homepage to continue exploring Gokul's portfolio."
        />
        <meta name="robots" content="noindex, follow" />

        {/* OG tags for social previews */}
        <meta property="og:title" content="404 - Page Not Found" />
        <meta
          property="og:description"
          content="Oops! The page you're looking for doesn't exist. Go back to explore the portfolio."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="notfound-page">
        <div className="notfound-inner">
          <div className="notfound-img">
            <img src={NotFoundImg} alt="404 - Page Not Found" />
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
    </>
  );
};

export default NotFound;
