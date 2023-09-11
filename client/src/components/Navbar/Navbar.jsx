import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import decode from "jwt-decode";

import {
  products,
  services,
  about,
  contacts,
  navdetails,
  credentials,
  getInTouch,
} from "../../constants/NavabrData";
import { logo } from "../../constants/Images";
import "./navbar.css";
import * as actionType from "../../constants/actionTypes";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  // const isActive = (path) =>
  //   location.pathname === path ? "text-red-500" : "";

  return (
    <nav className="z-20 border-gray-200 ">
      <div className="mt-4 max-w-screen-xl flex flex-wrap items-top justify-between mx-auto p-4 ">
        <Link to="/">
          <img src={logo} className="h-32" alt="Logo" />
        </Link>
        {navdetails.map((d, idx) => (
          <a
            className="lg:block hidden"
            href={d?.link}
            target="_blank"
            key={idx}
          >
            <span className="flex">
              <i
                className={`text-3xl ${d.icons} bg-gradient-to-br bg-gradient-stops-[2.11%, 34.14%, 68.81%, 105.05%] from-[#ff869f] via-[#fa988a] via-[#f19a73] to-[#ffd0b1] text-transparent bg-clip-text text-5xl`}
              >
                {" "}
              </i>
              <div className="text-base font-bold ml-2 w-32">
                {d.title}
                <div className="text-sm font-normal hover:text-red-500 text-gray-500">
                  {d.details}
                </div>
              </div>
            </span>
          </a>
        ))}
      </div>
      <hr className="ml-10 mr-10 h-px bg-gray-200 border-0 dark:bg-gray-400" />
      <div className="z-10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="peer ml-8 mt-4 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className="z-10 hidden absolute peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
          <Link
            to="/"
            className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white"
          >
            {" "}
            Home{" "}
          </Link>
          <Link
            to="/Products"
            className="w-screen px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white"
          >
            <button className="peer">
              {" "}
              Products <i className="ml-4 fa-solid fa-angle-down"></i>{" "}
            </button>
            <div className="hidden absolute peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
              {products.map((prod, idx) => (
                <Link
                  to={`/Products/${encodeURIComponent(prod.title)}`}
                  className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white"
                  key={idx}
                >
                  <a> {prod.title} </a>
                </Link>
              ))}
            </div>
          </Link>

          <Link
            to="/Services"
            className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white"
          >
            <button className="peer">
              {" "}
              Services <i className="ml-4 fa-solid fa-angle-down"></i>{" "}
            </button>
            <div className="hidden absolute peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
              {services.map((service, idx) => (
                <Link
                  to={`${service.title}`}
                  key={idx}
                  className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white"
                >
                  <a> {service.title} </a>
                </Link>
              ))}
            </div>
          </Link>
          <a href="/About" className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white">
              <button className="peer">
                {" "}
                About Us <i className="ml-4 fa-solid fa-angle-down"></i>{" "}
              </button>
              <div className="hidden absolute peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
                {about.map((ab, idx) => (
                  <>
                    {ab.title !== "Credentials" ? (
                      <Link
                        to={`${ab.title}`}
                        key={idx}
                        className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white"
                      >
                        <p> {ab.title} </p>
                      </Link>
                    ) : (
                      <div className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white">
                        <span className="peer"> </span>
                        <button className="peer"> {ab.title} </button>
                        <i className="peer pl-24 w-28 fa-solid fa-angle-right "></i>
                        <div className="z-30 ml-48 -my-9 w-56 bg-white hidden absolute peer-hover:flex hover:flex flex-col text-black drop-shadow-lg">
                          {credentials.map((crd, idx) => (
                            <a
                              href={crd.data}
                              download={crd.title}
                              target="_blank"
                              rel="noopener noreferrer"
                              key={idx}
                              className="px-5 py-3 peer text-gray-900 hover:bg-red-500 hover:text-white"
                            >
                              <button>{crd.title} </button>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </a>
          <Link
            to="/Gallery"
            className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white"
          >
            {" "}
            Gallery{" "}
          </Link>
          <Link to="/Contact" className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white">
              <button className="peer">
                Contact Us <i className="ml-4 fa-solid fa-angle-down"></i>
              </button>
              <div className="hidden absolute peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
                {contacts.map((contact, idx) => (
                  <>
                    { contact.title === 'Our Locations' ?
                      <Link to='/Contact/location'
                        className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white"
                        href=""
                        key={idx}
                      >
                        {contact.title}
                      </Link>  
                    :
                    <div className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white">
                    <span className="peer"> </span>
                    <button className="peer"> {contact.title} </button>
                    <i className="peer pl-24 w-28 fa-solid fa-angle-right "></i>
                    <div className="z-30 ml-48 -my-9 w-56 bg-white hidden absolute peer-hover:flex hover:flex flex-col text-black drop-shadow-lg">
                      {getInTouch.map((crd, idx) => (
                        <Link
                          to='/Contact/message'
                          key={idx}
                          className="px-5 py-3 peer text-gray-900 hover:bg-red-500 hover:text-white"
                        >
                          <button> {crd.title} </button>
                        </Link>
                      ))}
                    </div>
                  </div>
                  }
                  </>
                ))}
              </div>
            </Link>
        </div>
      </div>

      <div
        className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        id="navbar-default"
      >
        <ul className="lg:flex hidden font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
          <Link to="/">
            <li className="hover:text-red-500 block py-2 pl-3 pr-4 text-gray-900 rounded">
              HOME
            </li>
          </Link>
          <li className="block z-10 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <Link to="/Products">
              <button className="peer px-5 py-2 text-black hover:text-red-500">
                PRODUCTS <i className="ml-4 fa-solid fa-angle-down"></i>
              </button>
              <div className="hidden absolute peer-hover:flex hover:flex  flex-col bg-white drop-shadow-lg">
                {products.map((prod, idx) => (
                  <Link
                    to={`/Products/${encodeURIComponent(prod.title)}`}
                    className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white"
                    key={idx}
                  >
                    <a> {prod.title} </a>
                  </Link>
                ))}
              </div>
            </Link>
          </li>
          <li className="block z-10 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-red-500 md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <Link to="/Services">
              <button className="peer px-5 py-2 text-black hover:text-red-500">
                {" "}
                SERVICES
                <i className="ml-4 fa-solid fa-angle-down"></i>
              </button>
              <div className="hidden absolute peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
                {services.map((service, idx) => (
                  <Link
                    to={`${service.title}`}
                    className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white"
                  >
                    <a href="#" key={idx}>
                      {" "}
                      {service.title}{" "}
                    </a>
                  </Link>
                ))}
              </div>
            </Link>
          </li>
          <li className="block z-10 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <a href="/About">
              <button className="peer px-5 py-2 text-black hover:text-red-500">
                {" "}
                ABOUT US <i className="ml-2 fa-solid fa-angle-down"></i>{" "}
              </button>
              <div className="hidden absolute peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
                {about.map((ab, idx) => (
                  <>
                    {ab.title !== "Credentials" ? (
                      <Link
                        to={`${ab.title}`}
                        key={idx}
                        className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white"
                      >
                        <p> {ab.title} </p>
                      </Link>
                    ) : (
                      <div className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white">
                        <span className="peer"> </span>
                        <button className="peer"> {ab.title} </button>
                        <i className="peer pl-24 w-28 fa-solid fa-angle-right "></i>
                        <div className="z-30 ml-48 -my-9 w-56 bg-white hidden absolute peer-hover:flex hover:flex flex-col text-black drop-shadow-lg">
                          {credentials.map((crd, idx) => (
                            <a
                              href={crd.data}
                              download={crd.title}
                              target="_blank"
                              rel="noopener noreferrer"
                              key={idx}
                              className="px-5 py-3 peer text-gray-900 hover:bg-red-500 hover:text-white"
                            >
                              <button>{crd.title} </button>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </a>
          </li>
          <Link to="/Gallery">
            <li className="block py-3 mt-2 pl-3 pr-4 text-gray-900 rounded hover:text-red-500 md:border-0 md:p-0 ">
              GALLERY
            </li>
          </Link>
          <li className="z-10 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <Link to="/Contact">
              <button className="peer px-5 py-2 text-black hover:text-red-500">
                CONTACT US <i className="ml-4 fa-solid fa-angle-down"></i>
              </button>
              <div className="hidden absolute peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
                {contacts.map((contact, idx) => (
                  <>
                    { contact.title === 'Our Locations' ?
                      <Link to='/Contact/location'
                        className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white"
                        href=""
                        key={idx}
                      >
                        {contact.title}
                      </Link>  
                    :
                    <Link to='/Contact/message' className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white">
                    <span className="peer"> </span>
                    <button className="peer"> {contact.title} </button>
                    <i className="peer pl-24 w-28 fa-solid fa-angle-right "></i>
                    <div className="z-30 ml-48 -my-9 w-56 bg-white hidden absolute peer-hover:flex hover:flex flex-col text-black drop-shadow-lg">
                      {getInTouch.map((crd, idx) => (
                        <div 
                          key={idx}
                          className="px-5 py-3 peer text-gray-900 hover:bg-red-500 hover:text-white"
                        >
                          <button> {crd.title} </button>
                        </div>
                      ))}
                    </div>
                  </Link>
                  }
                  </>
                ))}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
