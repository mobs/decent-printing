import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { banner1, banner2, banner3, banner4 } from "../../constants/Images";

import './style.css'

const Carousel = () => {
    const data = [
      {
        image: banner1,
        link: '/Contact'
      },
      {
        image: banner2,
        link: '/Products'
      },
      {
        image: banner3,
        link: '/Products'
      },
      {
        image: banner4,
        link: '/Products'
      }
    ]
    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null);
  
    const movePrev = () => {
      if (currentIndex > 0) {
        setCurrentIndex((prevState) => prevState - 1);
      }
    };
  
    const moveNext = () => {
        if (
          currentIndex < 4
        ) {
          setCurrentIndex((prevState) => prevState + 1);
        }
      };
  
    const isDisabled = (direction) => {
      if (direction === "prev") {
        return currentIndex <= 0;
      }
  
      if (direction === "next" && currentIndex >= 3) {
        return (
          carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
        );
      }
  
      return false;
    };
  
    useEffect(() => {
      if (carousel !== null && carousel.current !== null) {
        carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
      }
    }, [currentIndex]);
  
    useEffect(() => {
      maxScrollWidth.current = carousel.current
        ? carousel.current.scrollWidth - carousel.current.offsetWidth
        : 0;
    }, []);

  return (
    <div className="carousel my-12 mx-auto">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10  text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container bg-white relative flex gap-5 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >

          {data.map((banner, index) => {
            return (
              <div key={index} className="carousel-item relative snap-start">
                <Link to={banner.link}
                  className=" flex bg-origin-padding bg-left-top  bg-no-repeat z-0 w-screen"
                >
                  <img
                    src={banner.image}
                    alt={banner.link}
                    className="h-[40rem] w-screen"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
