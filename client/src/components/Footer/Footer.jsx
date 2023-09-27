import React from "react";
import { navdetails } from "../../constants/NavabrData";
import { logo1 } from "../../constants/Images";
import { Link } from "react-router-dom";
import { BsArrowRightCircle } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="bg-black md:flex block text-white justify-between p-8">
      {/* <hr className="ml-10 mr-10 mb-5 h-px bg-gray-200 border-0 dark:bg-gray-400" /> */}

      {/* logo */}
      <div className="lg:ml-32 md:ml-24 ml-0 flex flex-col">
        <img
          src={logo1}
          className="h-32 w-48"
          alt="Logo"
        />
        {/* <p className="text-sm text-justify w-64">
          We take this opportunity to introduce DECENT PRINTING PRESS L.L.C, as one of the leading companies delivering total printing solutions, specialized in graphic designing, offset printing, digital printing, packing material and binding.
        </p> */}
        <div className="w-64">
        {navdetails.map((data, idx) => (
              <a href={data?.link}>
              <div className="text-white font-bold m-4 mx-0 hover:text-red-500" key={idx}>
                {data.title === "Sharjah" || data.title === "Dubai" ? (
                  <div className="flex gap-4">
                     <i
                      className={`text-lg ${data.icons} bg-red-500 text-transparent bg-clip-text text-5xl`}
                    >
                    </i>
                    <div >
                      <p>
                        {data.title}
                      </p>
                      <p className="font-Sofia">
                        {data.details}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-4">
                     <i
                      className={`text-lg ${data.icons} bg-red-500 text-transparent bg-clip-text text-5xl`}
                    >
                    </i>
                    <p>
                      {data.details}
                    </p>
                  </div>
                )}
              </div>
              </a>
            ))}
        </div>
      </div>

      {/* quick links  */}
      <div className="flex flex-col mt-8">
        <p className="text-xl font-bold "> Quick Links </p>
        <ul className="">
          <li className="flex mt-2 gap-4">
            <BsArrowRightCircle className="mt-1 text-red-500"/>
            <Link to='/About' className="font-Sofia hover:text-red-500">
              About Us
            </Link>
          </li>

          <li className="flex mt-2 gap-4">
            <BsArrowRightCircle className="mt-1 text-red-500"/>
            <Link to='/Contact' className="font-Sofia hover:text-red-500">
              Contact Us
            </Link>
          </li>

          <li className="flex mt-2 gap-4">
            <BsArrowRightCircle className="mt-1 text-red-500"/>
            <Link to='/Introduction' className="font-Sofia hover:text-red-500">
              Introduction
            </Link>
          </li>

          <li className="flex mt-2 gap-4">
            <BsArrowRightCircle className="mt-1 text-red-500"/>
            <Link to='/Vision,%20Mission%20and%20Values' className="font-Sofia hover:text-red-500">
              Vision, Mission & Values
            </Link>
          </li>

          <li className="flex mt-2 gap-4">
            <BsArrowRightCircle className="mt-1 text-red-500"/>
            <Link to='/Quality%20Policy' className="font-Sofia hover:text-red-500">
              Quality Policy
            </Link>
          </li>

          <li className="flex mt-2 gap-4">
            <BsArrowRightCircle className="mt-1 text-red-500"/>
            <Link to='/Environmental%20Policy' className="font-Sofia hover:text-red-500">
              Environmental Policy
            </Link>
          </li>
        </ul>
      </div>

      {/* services  */}
      <div className="mt-8">
      <p className="text-xl font-bold"> Our Services </p>
        <ul className="">
          <li className="flex mt-2 gap-4">
            <BsArrowRightCircle className="mt-1 text-red-500"/>
            <Link to='/Offset%20Printing' className="font-Sofia hover:text-red-500">
              Offset Printing
            </Link>
          </li>

          <li className="flex mt-2 gap-4">
            <BsArrowRightCircle className="mt-1 text-red-500"/>
            <Link to='/Digital%20Printing' className="font-Sofia hover:text-red-500">
              Digital Printing
            </Link>
          </li>

          <li className="flex mt-2 gap-4 lg:mr-32 md:mr-24 mr-0">
            <BsArrowRightCircle className="mt-1 text-red-500"/>
            <Link to='/Continuous%20Form%20Printing' className="font-Sofia hover:text-red-500">
              Continuous Form Printing
            </Link>
          </li>
        </ul>
      </div>

      {/* newsletter */}
      {/* <div className="mr-8">
        Newsletters
      </div> */}
    </footer>
  )
}
export default Footer;
