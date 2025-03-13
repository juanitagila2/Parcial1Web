import React, { useEffect, useState } from 'react';
import { Card } from '@heroui/card';
import { fetchCyclingData } from "../services/fetchCyclingData";
import './styles.css';
import gallery from '../assets/imagegallery.png'

export function Menu() {
    const [data, setData] = useState([]);
      const [selectedItem, setSelectedItem] = useState(null);
    
      useEffect(() => {
        const getData = async () => {
          const result = await fetchCyclingData();
          setData(result);
        };
        getData();
      }, []);
    return (
    
        <div className="food-container">
            <header className="header" description="Menu"/>
            <img src={gallery} alt="Cycling" className="icon" height={"20%"} />
        {data.length > 0 ? (
          <div className="food-grid ">
            {data.map((item, index) => (
              <div
                key={index} 
                className="food-card">
              <img src={item.image} alt={item.name} className="card-image" />

              <div className="card-footer">
                <span className="card-title">{item.name}</span>
              </div>
            </div>
            ))}
          </div>
        ) : (
          <p>Cargando datos...</p>
        )}
  
      </div>
    );
}

export default Menu;
