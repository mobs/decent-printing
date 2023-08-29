import React from "react";
import { offset1, offset2, offset3 } from "../../constants/Images";

const Offset = () => {
  return (
    <div className="">
      <div className="h-16 w-screen flex items-center justify-center bg-gray-200 text-white">
        <span className="text-gray-600"> Home </span>
        <hr className="m-2 mt-4 h-px w-8 bg-black border-0" />
        <span className="text-black"> Offset Printing </span>
      </div>

      <div className="lg:m-32 m-2 p-4 lg:gap-24 gap-2 md:flex block justify-center">
        <div className="gap-8 md:flex block jusitfy-center items-center">
          <div id="div1" className="flex flex-col gap-8">
            <div className="h-[400px] md:w-[600px] transition-transform transform-gpu hover:translate-x-2 hover:translate-y-2 duration-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.2)]">
              <img src={offset1} alt="offset1"/>
            </div>
            <div className="transition-transform transform-gpu hover:translate-x-2 hover:translate-y-2 duration-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.2)]">
              <img src={offset2} alt="offset2"/>
            </div>
            <div className="transition-transform transform-gpu hover:translate-x-2 hover:translate-y-2 duration-500  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.2)]">
              <img src={offset3} alt="offset3"/>
            </div>
          </div>
        </div>
        <div className="md:flex block md:text-justify text-center flex-col gap-8">
          <div className="flex justify-center items-center text-gray-500 font-bold text-lg">
            Offset printing is a commonly used and simple technique that first
            involves the transfer of the inked image from a printing plate to a
            rubber blanket and then to the printing surface (either paper or
            board). As one of the most advanced printing press in Dubai, we use
            state-of-the-art Heidelberg machinery suitable for brochures, annual
            reports, presentations, product and art catalogues, pocket folders,
            posters, business cards, corporate stationery and other business
            documents. Whether you simply need business cards printed in Dubai
            or are looking for a partner to execute the most challenging paper
            craft project, rely on our expertise to produce professional
            printing results every time.
          </div>
          <div className="flex justify-center items-centert text-6xl font-extrabold">
            HOW IT WORKS?
          </div>
          <div className="flex justify-center flex-col m-4 gap-4 items-center text-gray-500 text-lg">
            <p className="">
              One of the most cost-effective printing techniques is the sheet
              fed offset printing press. Some of their main features include
              large quantities with flexible size, color paper.
            </p>
            <p>
              {" "}
              The first process includes feeding of the sheet into the press.
              One of the key elements is the perfectos cylinder which further
              flips the sheet of paper. This helps in printing both sides of the
              paper. The process is quick and easier which also provides
              consistent high-quality image. This type of printing helps with
              the printing of short-run magazines, brochures, letterheads, and
              other commercial products.
            </p>

            <p>
              They further use the mechanical registration to relate each sheet
              to one another ensuring that they produce the same images
              throughout with constant positioning. The waste sheets can be
              readily used making it lower cost preparation as the paper is not
              wasted for plates and inks.
            </p>
          </div>
          <div className="flex justify-center items-center text-center text-4xl font-extrabold">
            BEST QUALITY OFFSET PRINTS AND PRODUCTS AT THE MOST COST-EFFECTIVE
            RATES
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offset;
