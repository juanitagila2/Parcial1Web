import React, { useEffect, useState } from 'react';
import './styles.css';
import { fetchCyclingData } from '../services/fetchCyclingData';
import { galleryData } from '../services/galleryData';

function Stores() {
  const [storesItems, setStoresItems] = useState([]);
  const [galleryItems, setGalleryItems] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const storesData = await fetchCyclingData();
      setStoresItems(storesData);

      const galleryDataResponse = await galleryData();
      setGalleryItems(galleryDataResponse);
    };

    fetchData();
  }, []);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1 className="menu-title">STORES</h1>
      </div>
      <div className="gallery-container">
        {galleryItems.length > 0 && (
          <>
            <button className="gallery-button" onClick={handlePrevClick}>{"<"}</button>
            <img src={galleryItems[currentImageIndex].image} alt="Gallery" className="gallery-image" />
            <button className="gallery-button" onClick={handleNextClick}>{">"}</button>
          </>
        )}
      </div>
      <div className="menu-content">
        {storesItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <p className="menu-item-title">{item.name.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stores;