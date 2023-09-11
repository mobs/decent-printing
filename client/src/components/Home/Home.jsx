import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import video from "../../constants/Decent2.mp4";
import Card from "../Card/Card";


const Home = () => {
  const { products } = useSelector((state) => state.products);
  const { banners } = useSelector((state) => state.banner);

  const bannerToShow = banners.slice(0, 3);

  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  let productsToShow = [];
  let picksProduct = [];
  let offerProduct = [];
  const titleSet = new Set();

  products.forEach((product) => {
    const { offer } = product;
    if(offer) offerProduct.push(product);
  })

  offerProduct = offerProduct.slice(0,2);

  products.forEach((product) => {
    const { title } = product;
    if(!titleSet.has(title)) {
      titleSet.add(title);
      picksProduct.push(product);
    }
  });
  
  picksProduct = picksProduct.slice(0,6);

  const categorySet = new Set();

  products.forEach((product) => {
    const { category } = product;
    if (!categorySet.has(category)) {
      categorySet.add(category);
      productsToShow.push(product);
    }
  });

  productsToShow = productsToShow.slice(0, 8);

  return (
    <div className="">
      <div className="flex justify-center items-center overflow-hidden h-[800px] bg-gradient-to-br bg-gradient-stops-[2.11%, 34.14%, 68.81%, 105.05%] from-[#ff869f] via-[#fa988a] via-[#f19a73] to-[#ffd0b1]">
        <video
          ref={videoRef}
          onEnded={handleVideoEnded}
          autoPlay
          muted
          className="h-[85%] w-screen shadow-[0_2px_15px_-3px_rgba(0,0,0,0.5),0_10px_20px_-2px_rgba(0,0,0,0.5)]"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="mt-8 flex flex-col justify-item items-center gap-6">
        <div className="md:text-sm text-xs font-bold text-red-600">
          PRINTING MADE EASY
        </div>
        <div className="md:text-6xl text-sm md:font-extrabold font-bold">
          Featured Products
        </div>
        <div className="flex gap-6 font-bold">
          <button className="underline">All</button>
        </div>
      </div>
      <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-1">
        {productsToShow.map((cardData, idx) => (
          <Link
            to={`/Products/${encodeURIComponent(cardData.title)}`}
            key={idx}
          >
            <div className="" key={idx}>
              <Card data={cardData} />
            </div>
          </Link>
        ))}
      </div>

      <div className="lg:m-24 m-2 p-4 lg:gap-32 gap-2 lg:flex block justify-center">
        <div className="gap-8 lg:flex block jusitfy-center items-center">
          <div id="div1" className="flex flex-col gap-8">
            <div className="transition-transform transform-gpu hover:translate-x-2 hover:translate-y-2 duration-500 lg:h-64 lg:w-64 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.2)]">
              <i className="m-8 rounded-full h-24 w-24 bg-gradient-to-br bg-gradient-stops-[2.11%, 34.14%, 68.81%, 105.05%] from-[#ff869f] via-[#fa988a] via-[#f19a73] to-[#ffd0b1] fa-solid fa-print text-white items-center justify-center flex text-6xl"></i>
              <Link
                to={`/Products/${encodeURIComponent(
                  "Popups/Rollups Printing"
                )}`}
              >
                <p className="text-2xl m-8 font-bold">
                  {" "}
                  Pop ups/Roll ups printing{" "}
                </p>
              </Link>
            </div>
            <div className="transition-transform transform-gpu hover:translate-x-2 hover:translate-y-2 duration-500 lg:h-64 lg:w-64 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.2)]">
              <i className="m-8 rounded-full h-24 w-24 bg-gradient-to-br bg-gradient-stops-[2.11%, 34.14%, 68.81%, 105.05%] from-[#ff869f] via-[#fa988a] via-[#f19a73] to-[#ffd0b1] fa-regular fa-window-restore text-white items-center justify-center flex text-6xl"></i>
              <Link
                to={`/Products/${encodeURIComponent(
                  "Notepads/Annual Reports"
                )}`}
              >
                <p className="text-2xl m-8 font-bold">
                  Notepads,Annual Reports
                </p>
              </Link>
            </div>
          </div>
          <div id="div2" className="gap-8 mt-16 flex flex-col">
            <div className="transition-transform transform-gpu hover:translate-x-2 hover:translate-y-2 duration-500 lg:h-64 lg:w-64 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.2)]">
              <i className="m-8 rounded-full h-24 w-24 bg-gradient-to-br bg-gradient-stops-[2.11%, 34.14%, 68.81%, 105.05%] from-[#ff869f] via-[#fa988a] via-[#f19a73] to-[#ffd0b1] fa-solid fa-cubes text-white items-center justify-center flex text-6xl"></i>
              <Link to={`/Products/${encodeURIComponent("Graphic Design")}`}>
                <p className="text-2xl m-8 font-bold"> Graphic Design </p>
              </Link>
            </div>
            <div className="transition-transform transform-gpu hover:translate-x-2 hover:translate-y-2 duration-500 lg:h-64 lg:w-64 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.2)]">
              <i className="m-8 rounded-full h-24 w-24 bg-gradient-to-br bg-gradient-stops-[2.11%, 34.14%, 68.81%, 105.05%] from-[#ff869f] via-[#fa988a] via-[#f19a73] to-[#ffd0b1] fa-solid fa-book-journal-whills text-white items-center justify-center flex text-6xl"></i>
              <Link
                to={`/Products/${encodeURIComponent(
                  "Presentation Folders/Booklets"
                )}`}
              >
                <p className="text-2xl m-8 font-bold">
                  Presentation Folders,Booklets
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:flex block lg:text-justify text-center flex-col gap-8 lg:mt-0 md:mt-6">
          <div className="flex justify-center items-center text-red-600 font-bold text-lg">
            IF YOU ARE LOOKING FOR AFFORDABLE AND QUALITY DIGITAL PRINTERS IN
            UAE THEN WE WOULD LOVE TO HEAR FROM YOU.​
          </div>
          <div className="flex justify-center items-center md:text-5xl sm:text-xl font-extrabold">
            WE COLOR YOUR BUSINESS
          </div>
          <div className="flex justify-center items-center text-gray-500 text-xl">
            We are full edge printing house work towards quality assurance to
            gain your customer satisfaction.Quality control is practised at
            every stage of production,instilling awareness of quality among all
            members. We at Decent Printing Press believe in a service oriented
            approach to printing. Our understanding is that you are looking for
            three main aspects i.e. Consistent Reliability with Affordable
            services that has a Quick turn around period. In many of the
            processes, the ink or toner does not permeate the substrate, as does
            conventional ink, but forms a thin layer on the surface that may be
            additionally adhered to the substrate by using a fuser fluid with
            heat process (toner) or UV curing process (ink)
          </div>
        </div>
      </div>

      {/* banner editing option */}
      <a href={bannerToShow[0]?.link}>
        <button className="relative">
          <img src={bannerToShow[0]?.image} alt="banner 1" />
          <div className="absolute top-0 left-0 p-12 text-white">
            {bannerToShow[0]?.offer && (
              <button className="bg-red-700 p-2 rounded text-xl">
                {bannerToShow[0]?.offer}
              </button>
            )}
          </div>
        </button>
      </a>

      <div className="lg:m-16 m-4 lg:flex block">
        <div>
          {/* Small Banner Data */}
          <a href={bannerToShow[1]?.link}>
            <button className="relative hover:p-4 duration-500">
              <img src={bannerToShow[1]?.image} alt="picks1" />
              <div className="absolute top-0 left-0 p-12 text-white">
                {bannerToShow[1]?.offer && (
                  <button className="bg-red-700 p-2 rounded text-xl">
                    {bannerToShow[1]?.offer}
                  </button>
                )}
              </div>
            </button>
          </a>
        </div>
        <div className="hover:none mt-8 grid md:grid-cols-3 md:gap-3 grid-cols-2">
          {picksProduct.map((prod, idx) => (
            <Link to={`/Checkout/${encodeURIComponent(prod._id)}`}  >
            <div className="w-75 rounded m-8 bg-white " key={idx}>
              <div className="rounded border">
                <img
                  className="aspect-sqaure md:h-64  "
                  src={prod?.image}
                  alt="picks2"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6 flex items-center justify-center">
                <button className="mb-2 text-xl font-medium leading-tight text-gray-600 hover:text-red-500">
                  {prod.title}
                </button>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>


      <div className="m-16 lg:flex block gap-4">
        <div className="md:flex block jutify-center items-center">
          <div className="mr-4 ">
            <img className="rounded hover:p-4 w-[600px] duration-500" src={offerProduct[0]?.image} alt="offer1"/>
          </div>
          <div>
            <div className="flex flex-col gap-8">
              <div className="flex items-center text-red-600 font-bold text-lg">
                Hot Deal
              </div>
              <div className="flex items-centert text-2xl font-bold">
                {offerProduct[0]?.title.toUpperCase()}
              </div>
              <div className="flex items-centert text-3xl font-bold">
                {offerProduct[0]?.offer}
              </div>
              <div className="flex justify-center items-center text-gray-500 text-sm">
                Get a special offer on your first box. FREE SHIPPING all the
                time.
              </div>
              <Link to={`/Checkout/${encodeURIComponent(offerProduct[0]?._id)}`} >
                <button className="md:mb-0 mb-4 font-bold flex underline items-center hover:text-red-500 duration-300">
                  Place Enquiry
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="md:flex block jutify-center items-center">
          <div className="mr-4">
            <img className="rounded hover:p-4 duration-500 w-[600px]" src={offerProduct[1]?.image} alt="offer2"/>
          </div>
          <div>
            <div className="flex flex-col gap-8">
              <div className="flex items-center text-red-600 font-bold text-lg">
                New Arrival
              </div>
              <div className="flex items-centert text-2xl font-bold">
                {offerProduct[1]?.title.toUpperCase()}
              </div>
              <div className="flex items-centert text-3xl font-bold">
              {offerProduct[1]?.offer}
              </div>
              
              <div className="flex justify-center items-center text-gray-500 text-sm">
                Get a special offer on your first box. FREE SHIPPING all the
                time.
              </div>
              <Link to={`/Checkout/${encodeURIComponent(offerProduct[1]?._id)}`} >
                <button className="md:mb-0 mb-4 font-bold flex underline items-center hover:text-red-500 duration-300">
                  Place Enquiry
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="mb-16 ">
        {/* banner editing option */}
        <a href={bannerToShow[2]?.link}>
          <button className="relative">
            <img src={bannerToShow[2]?.image} alt="banner2"/>
            <div className="absolute top-0 left-0 p-12 text-white">
              {bannerToShow[2]?.offer && (
                <button className="bg-red-700 rounded text-xl">
                  {bannerToShow[2]?.offer}
                </button>
              )}
            </div>
          </button>
        </a>
        <div className="md:flex m-16 mt-0 justify-between items-center">
          <button
            onClick={() => window.open("https://www.facebook.com", "_blank")}
            className="font-semibold p-6 text-lg w-full hover:bg-blue-300"
          >
            {" "}
            Facebook{" "}
          </button>
          <button
            onClick={() => window.open("https://www.instagram.com", "_blank")}
            className="font-semibold  p-6 text-lg w-full hover:bg-blue-300"
          >
            {" "}
            Instagram{" "}
          </button>

          <button
            onClick={() => window.open("https://www.twitter.com", "_blank")}
            className="font-semibold p-6 text-lg w-full hover:bg-blue-300"
          >
            {" "}
            Twitter{" "}
          </button>

          <button
            onClick={() => window.open("https://www.youtube.com", "_blank")}
            className="font-semibold p-6 text-lg w-full hover:bg-blue-300"
          >
            {" "}
            Youtube{" "}
          </button>
          <button
            onClick={() => window.open("https://www.pinterest.com", "_blank")}
            className="font-semibold p-6 text-lg w-full hover:bg-blue-300"
          >
            {" "}
            Pinterest{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
