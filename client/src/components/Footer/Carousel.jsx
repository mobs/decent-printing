import React,{ useState, useEffect } from 'react'
import { Cards } from '../../constants/HomeData';
import Card from '../Card/Card'
import './style.css'

const Carousel = () => {
    const items = ['Item 1', 'Item 2', 'Item 3']; // Replace with your items

    const [activeIndex, setActiveIndex] = useState(0);
  
    useEffect(() => {
      // Set up a timer to automatically advance the carousel
      const timer = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 3000); // Change this value to adjust the time between transitions
  
      return () => {
        clearInterval(timer);
      };
    }, [items.length]);
  
    return (
      <div className="carousel">
        {Cards.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
          >
            <Card data={item}/>
          </div>
        ))}
      </div>
    );
}

export default Carousel