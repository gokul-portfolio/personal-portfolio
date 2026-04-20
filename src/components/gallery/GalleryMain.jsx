import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import gallery from "../../data/gallery";

const tabs = [
  { key: "all", label: "All Items" },
  { key: "web", label: "Web" },
  { key: "ui", label: "UI" },
  { key: "branding", label: "Branding" },
];

const ITEMS_PER_PAGE = 8;

const GalleryMain = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [popupIndex, setPopupIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredImages =
    activeTab === "all"
      ? gallery
      : gallery.filter((img) => img.category === activeTab);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const totalPages = Math.ceil(filteredImages.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedImages = filteredImages.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (popupIndex !== null) {
      const timer = setInterval(() => {
        setPopupIndex((prev) =>
          prev === filteredImages.length - 1 ? 0 : prev + 1
        );
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [popupIndex, filteredImages.length]);

  return (
    <div className="gallery-tabs-wrapper">
      <Container fluid>
        <div className="header-wrap mb-5">
          <div className="header-wrap-3">
            <h2 className="bg-header">Our Creative Showcase</h2>
          </div>
          <h4 className="sub-main-1">Gallery</h4>
        </div>

        <div className="gallery-tabs desktop-tabs mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`tab ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <span className="tab-icon"><MdOutlineDashboardCustomize /></span>
              <span className="tab-text">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="gallery-dropdown mobile-tabs">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
          >
            {tabs.map((tab) => (
              <option key={tab.key} value={tab.key}>
                {tab.label}
              </option>
            ))}
          </select>
        </div>

        <div className="gallery-grid">
          {paginatedImages.map((img, index) => (
            <div
              key={img.id}
              className="gallery-item"
              onClick={() => setPopupIndex(startIndex + index)}
            >
              <img src={img.src} alt={img.title} />
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="gallery-pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={currentPage === i + 1 ? "active" : ""}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next
            </button>
          </div>
        )}

        {popupIndex !== null && (
          <div className="gallery-popup">
            <span className="close" onClick={() => setPopupIndex(null)}>×</span>
            <div className="popup-content">
              <h2 className="popup-title">{filteredImages[popupIndex].title}</h2>
              <p className="popup-desc">{filteredImages[popupIndex].desc}</p>
              <img
                src={filteredImages[popupIndex].src}
                alt={filteredImages[popupIndex].title}
              />
            </div>
          </div>
        )}
      </Container>

      <div className="text-overlay">
        <h3>Gallery</h3>
      </div>
    </div>
  );
};

export default GalleryMain;
