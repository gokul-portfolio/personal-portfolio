import React from "react";
import Smile from '../../assets/images/icons/happy.png' 
const PageLoader = () => {
    return (
        <div className="loader-page">
            <div className="loader-container">
                <div className="loader-ring ring1"></div>
                <div className="loader-ring ring2"></div>
                <div className="loader-ring ring3"></div>
                <div className="loader-ring ring4"></div>
                <h3 className="loader-text">Loading  </h3>
            </div>
        </div>
    );
};

export default PageLoader;
