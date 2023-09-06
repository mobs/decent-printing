import { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./style.css";


const Carousel = ({ data }) => {
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
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
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
          {/* button start */}
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
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
            <span className="sr-only">Prev</span>
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
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container bg-white relative flex gap-5 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {/* button over */}

          {data.map((banner, index) => {
            return (
              <div key={index} className="carousel-item relative snap-start">
                {/* <AnimatedCircles /> */}
                <a
                  className="flex bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                >
                  <img
                    src={banner.background}
                    alt={banner.link}
                    className="mt-[-70px] w-screen"
                  />
                  <div
                    className={`absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                      banner.textOrientation === "Left"
                        ? "md:-translate-x-[200%] -translate-x-[100%]"
                        : banner.textOrientation === "Right"
                        ? "md:translate-x-[10%] translate-x-[3%]"
                        : "mx-auto"
                    }`}
                  >
                    <h1
                      className={`hover:cursor-pointer hover:translate-x-2 hover:translate-y-2 hover:text-gray-600 lg:text-4xl md:text-2xl text-xl font-bold text-white ${
                        banner.textOrientation === "Center" ? "mx-auto" : ""
                      }`}
                    >
                      <div className="hover:text-white mt-12 lg:text-5xl md:text-3xl text-2xl text-black flex justify-center items-center">
                        {" "}
                        Best Deals{" "}
                      </div>
                      <div className="mt-8">{banner.heading}</div>
                      <div className=" mt-8 flex justify-center items-center">
                        {banner.category}
                      </div>
                    </h1>
                  </div>
                  {/* <Link to={banner.link}> */}
                    <button className="absolute top-3/4 left-[45%] mt-16 bg-white hover:bg-gray-600 hover:text-white text-red-400 font-bold py-2 px-4 rounded transition-transform duration-300 transform hover:translate-x-1 hover:translate-y-1 hover:rotate-1 focus:outline-none focus:ring">
                      Order Now
                    </button>
                  {/* </Link> */}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
