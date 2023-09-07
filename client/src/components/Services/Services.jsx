import React from "react";
import { Link } from 'react-router-dom'
import { digital } from "../../constants/Images";
import { products } from "../../constants/NavabrData";

const Services = () => {
  return (
    <div className="">
      <div className="h-16 w-screen flex items-center justify-center bg-gray-200 text-white">
        <span className="text-gray-600"> Home </span>
        <hr className="m-2 mt-4 h-px w-8 bg-black border-0" />
        <span className="text-black"> Services </span>
      </div>

      <div className="md:flex flex-col gap-8 mt-8 md:ml-64 md:mr-64 m-8 justify-center items-center">
        <div className="flex items-center justify-center text-center text-red-600 font-bold md:text-lg text-xs">
          WE ARE PROFESSIONALS
        </div>
        <div className=" text-center md:text-5xl text-lg font-bold">
          We’re something other than duplicates… What’s more, we do it right!
        </div>
        <div className="text-center font-semibold text-gray-500 md:text-lg text-sm">
          Printing organization mottos While the Internet might assume control
          of numerous parts of printing, a few things are as yet favored on
          paper. UAE we offer a wide range of printing services which are not
          limited to:
        </div>
      </div>
      <div className="md:flex w-screen bg-gray-200 mt-8">
        <div className="md:flex flex-col m-8">
          <img src={digital} alt="digital"/>
        </div>
        <div className="md:flex flex-col m-8">
          <ul>
            {products.map((prod, idx) => (
              <li className="ml-4 m-2 text-gray-700" key={idx}>
                {" "}
                &gt; {prod.title}{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="md:text-5xl text-lg md:font-extrabold font-bold text-center m-10 md:ml-32 md:mr-32 ">
        Our success is from your satisfaction, so we take personal interest to
        ensure our clients are completely satisfied with the goods delivered and
        services that represent their brand What’s more, we do it right!
      </p>

      <div className="lg:m-32 m-2 p-4 lg:gap-32 gap-2 md:flex block justify-center">
        <div className="gap-8 md:flex block jusitfy-center items-center">
          <div id="div1" className="flex flex-col gap-8">
            <div className="transition-transform transform-gpu hover:translate-x-2 hover:translate-y-2 duration-500 h-64 w-64 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.2)]">
              <i className="m-8 rounded-full h-20 w-20 bg-red-300 fa-solid fa-print text-white items-center justify-center flex text-6xl"></i>
              <Link to={`/Products/${encodeURIComponent("Popups/Rollups Printing")}`}>
              <p className="text-2xl m-8 font-bold">
                {" "}
                Pop ups/Roll ups printing{" "}
              </p>
              </Link>
            </div>
            <div className="transition-transform transform-gpu hover:translate-x-2 hover:translate-y-2 duration-500 h-64 w-64 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.2)]">
              <i className="m-8 rounded-full h-20 w-20 bg-red-300 fa-regular fa-window-restore text-white items-center justify-center flex text-6xl"></i>
              <Link to={`/Products/${encodeURIComponent("Notepads/Annual Reports")}`}>
              <p className="text-2xl m-8 font-bold">Notepads,Annual Reports</p>
              </Link>
            </div>
          </div>
          <div id="div2" className="gap-8 mt-16 flex flex-col">
            <div className="transition-transform transform-gpu hover:translate-x-2 hover:translate-y-2 duration-500 h-64 w-64 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.2)]">
              <i className="m-8 rounded-full h-20 w-20 bg-red-300 fa-solid fa-cubes text-white items-center justify-center flex text-6xl"></i>
              <Link to={`/Products/${encodeURIComponent("Graphic Design")}`}>
              <p className="text-2xl m-8 font-bold"> Graphic Design </p>
              </Link>
            </div>
            <div className="transition-transform transform-gpu hover:translate-x-2 hover:translate-y-2 duration-500 h-64 w-64 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.2)]">
              <i className="m-8 rounded-full h-20 w-20 bg-red-300 fa-solid fa-book-journal-whills text-white items-center justify-center flex text-6xl"></i>
              <Link to={`/Products/${encodeURIComponent("Presentation Folders/Booklets")}`} >
              <p className="text-2xl m-8 font-bold">
                Presentation Folders,Booklets
              </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:flex block flex-col md:text-left text-center gap-8">
          <div className="flex justify-center items-center text-red-600 font-bold text-lg">
            IF YOU ARE LOOKING FOR AFFORDABLE AND QUALITY DIGITAL PRINTERS IN
            UAE THEN WE WOULD LOVE TO HEAR FROM YOU.​
          </div>
          <div className="flex justify-center items-centert text-6xl font-extrabold">
            WE COLOR YOUR BUSINESS
          </div>
          <div className="flex justify-center items-center text-gray-500 text-lg">
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
    </div>
  );
};

export default Services;
