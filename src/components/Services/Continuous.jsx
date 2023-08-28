import React from "react";
import { cont1, cont2 } from "../../constants/Images";

const Continuous = () => {
  return (
    <div>
      <div className="h-16 w-screen flex items-center justify-center bg-gray-200 text-white">
        <span className="text-gray-600"> Home </span>
        <hr className="m-2 mt-4 h-px w-8 bg-black border-0" />
        <span className="text-black"> Continuous Form Printing </span>
      </div>

      <div className="lg:m-32 m-2 p-4 lg:gap-24 gap-2 md:flex block justify-center">
        <div className="gap-8 md:flex block jusitfy-center items-center">
          <div id="div1" className="flex flex-col gap-8">
            <div className="h-[400px] md:w-[600px] transition-transform transform-gpu hover:translate-x-2 hover:translate-y-2 duration-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.2)]">
              <img src={cont1} alt="cont1"/>
            </div>
            <div className="h-[400px] md:w-[600px] transition-transform transform-gpu hover:translate-x-2 hover:translate-y-2 duration-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.2)]">
              <img src={cont2} alt="cont2" />
            </div>
          </div>
        </div>
        <div className="md:flex block md:text-left flex-col gap-8">
          <div className="flex flex-col m-4 gap-4  text-gray-500 text-lg">
            <p className="">Computer/Continious form Printings</p>
            <p>
              Decent Printing Press offers ultimate quality and solutions in
              your all computer forms needs.{" "}
            </p>

            <p>
              We Provide print services of high quality computer forms, invoice,
              vouchers, continuous forms printing and delivering.{" "}
            </p>
            <p>
              High quality forms are the best option to use in all Dot Matrix
              and other printers.
            </p>
            <p> Computer NCR papers</p>
            <p>
              A4 size computer forms printing with white, yellow, pink, blue
              duplicate paper
            </p>
            <p>Computer invoice and delivery order or notes printing</p>
            <p>Affordable and reliable computer forms printing across UAE.</p>
            <p>Cheap price, high quality and on time printing</p>
            <p>Free design for your computer forms with MOQ order</p>

            <p>Both sides computer forms printing</p>
            <p>Multi colors computer forms printing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Continuous;
