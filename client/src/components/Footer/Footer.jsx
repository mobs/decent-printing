import React from "react";
import { navdetails } from "../../constants/NavabrData";
import { bgImage } from "../../constants/Images";
import Carousel from "./Carousel";

const Footer = () => {
  return (
    <footer className="relative bg-gray-200">
      <hr className="ml-10 mr-10 mb-5 h-px bg-gray-200 border-0 dark:bg-gray-400" />

      <div className="md:m-16 container px-4 z-20">
        <div className="md:flex justify-between block md:text-justify text-center ">
          <div className="">
            <img
              src="https://decentpp.fastnet-soft.cloud/wp-content/uploads/2022/04/LOGO-1.png"
              className="h-32"
              alt="Logo"
            />
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="bg-white text-gray-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a
                  className="flex justify-center items-center"
                  href="https://www.twitter.com"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </button>
              <button
                className="bg-white text-gray-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a
                  className="flex justify-center items-center"
                  href="https://www.facebook.com"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a
                  className="flex justify-center items-center"
                  href="https://www.youtube.com"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 md:px-32">
            <h4 className="text-3xl font-semibold text-gray-700">
              Get in touch!
            </h4>
            {navdetails.map((data, idx) => (
              <div className="text-gray-500 font-bold m-4 mx-0" key={idx}>
                {data.title === "Sharjah" || data.title === "Dubai" ? (
                  <p className="text-black">
                    {" "}
                    {data.title} <p> {data.details} </p>{" "}
                  </p>
                ) : (
                  <span> {data.details}</span>
                )}
              </div>
            ))}
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex items-top mb-6">
              <div className="w-full lg:ml-64 md:ml-24">
                <span className="block uppercase text-gray-700 text-xl font-bold mb-2">
                  Quick Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      to="/About"
                      className="text-gray-700 hover:text-blueGray-800 font-semibold block pb-2 text-lg"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      to="/Contact"
                      className="text-gray-700 hover:text-blueGray-800 font-semibold block pb-2 text-lg"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      to="/Contact"
                      className="text-gray-700 hover:text-blueGray-800 font-semibold block pb-2 text-lg"
                    >
                      Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="">
            <Carousel />
          </div> */}
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year"> 2023 </span>
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
              />
              Decent Printing Press,
              <a
                href="https://www.creative-tim.com?ref=njs-profile"
                className="text-blueGray-500 hover:text-blueGray-800"
              >
                <span> UAE </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
