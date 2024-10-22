

import React, { useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import './Lightbox.scss';

const Lightbox = ({ images, currentIndex, setCurrentImageIndex, closeLightbox }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") navigateNext();
    if (e.key === "ArrowLeft") navigatePrevious();
  };

  const navigateNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const navigatePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="lightbox" onClick={closeLightbox}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        <button className="close" onClick={closeLightbox}><FaTimes /></button>
        <button className="prev" onClick={navigatePrevious}><FaArrowLeft /></button>
        <button className="next" onClick={navigateNext}><FaArrowRight /></button>
      </div>
    </div>
  );
};

export default Lightbox;



