import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { MdOutlineDashboardCustomize } from "react-icons/md";

// Image imports
import img1 from "../../assets/images/gallery/img-1.png";
import img2 from "../../assets/images/gallery/img-2.png";
import img3 from "../../assets/images/gallery/img-1.png";
import img4 from "../../assets/images/gallery/img-2.png";

// Gallery data (sample – repeat if needed)
const images = [
  { id: 1, category: "web", src: img1 },
  { id: 2, category: "ui", src: img2 },
  { id: 3, category: "branding", src: img3 },
  { id: 4, category: "web", src: img4 },
  { id: 5, category: "ui", src: img1 },
  { id: 6, category: "branding", src: img2 },
  { id: 7, category: "web", src: img3 },
  { id: 8, category: "ui", src: img4 },
  { id: 9, category: "branding", src: img1 },
  { id: 10, category: "web", src: img2 },
];

// Tabs
const tabs = [
  { key: "all", label: "lorem" },
  { key: "web", label: "lorem" },
  { key: "ui", label: "lorem" },
  { key: "branding", label: "lorem" },
];

const ITEMS_PER_PAGE = 8;

const GalleryMain = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [popupIndex, setPopupIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredImages =
    activeTab === "all"
      ? images
      : images.filter((img) => img.category === activeTab);

  // Reset page when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  // Pagination logic
  const totalPages = Math.ceil(filteredImages.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedImages = filteredImages.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Auto slide popup
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
        {/* Header */}
        <div className="header-wrap mb-5">
          <div className="header-wrap-3">
            <h2 className="bg-header">Our Creative Showcase</h2>
          </div>
          <h4 className="sub-main-1">Gallery</h4>
        </div>

        {/* Tabs */}
        <div className="gallery-tabs desktop-tabs mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`tab ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <span className="tab-icon">
                <MdOutlineDashboardCustomize />
              </span>
              <span className="tab-text">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Dropdown */}
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

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {paginatedImages.map((img, index) => (
            <div
              key={img.id}
              className="gallery-item"
              onClick={() => setPopupIndex(index)}
            >
              <img src={img.src} alt={`Gallery ${img.id}`} />
            </div>
          ))}
        </div>

        {/* Pagination */}
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

        {/* Popup */}
        {popupIndex !== null && (
          <div className="gallery-popup">
            <span className="close" onClick={() => setPopupIndex(null)}>
              ×
            </span>
            <img src={filteredImages[popupIndex].src} alt="Preview" />
          </div>
        )}
      </Container>

      {/* Overlay Text */}
      <div className="text-overlay">
        <h3>gallery</h3>
      </div>
    </div>
  );
};

export default GalleryMain;
