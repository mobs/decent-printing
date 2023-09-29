import React from 'react'
import { des1,des2,des3 } from '../../constants/Images';

const Designing = () => {
    return (
        <div className="">
          <div className="h-16 w-screen flex items-center justify-center bg-gray-200 text-white">
            <span className="text-gray-600"> Home </span>
            <hr className="m-2 mt-4 h-px w-8 bg-black border-0" />
            <span className="text-black"> Designing Services </span>
          </div>
    
          <div className="lg:m-16 m-2 p-4 lg:gap-24 gap-2 md:flex block justify-center">
            <div className="gap-8 md:flex block items-between">
              <div id="div1" className="justify-between flex flex-col gap-8">
                <div className="h- md:w-[500px] transition-transform transform-gpu hover:translate-x-2 hover:translate-y-2 duration-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.2)]">
                  <img src={des1} alt="offset1"/>
                </div>
                <div className="transition-transform transform-gpu hover:translate-x-2 hover:translate-y-2 duration-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.2)]">
                  <img src={des2} alt="offset2"/>
                </div>
                <div className="transition-transform transform-gpu hover:translate-x-2 hover:translate-y-2 duration-500  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.2)]">
                  <img src={des3} alt="offset3"/>
                </div>
              </div>
            </div>
            <div className="md:flex block md:text-justify text-center flex-col gap-8 justify-center">
              <div className="flex justify-center items-center text-gray-500 font-bold lg:text-lg text-sm">
              Design Printing utilizes the newest, cleanest, and fastest state-of-the art printing machines so that your custom quality work is delivered quickly with the most efficient use of energy, reduced waste and pollution. Our digital printer prints directly onto the paper-eliminating intermediate steps and allowing total control over image and quantities.
              </div>
              <div className="flex justify-center items-centert text-4xl font-extrabold">
                What we offer!!!
              </div>
              <div className="flex justify-center flex-col m-4 gap-4 items-center text-gray-500 lg:text-lg text-sm">
                <p className="">
                  Decent Printing Press L.L.C, is one stop shop for all your designing requirements.
                  We design business cards, flyers, letter heads and all your business needs.
                </p>
                <p>
                  {" "}
                  We specialize in all types of designing and printing, be it offset, continuous or digital printing or designing a
                  card, boxes as per your business requirements.
                </p>
    
                <p>
                  We use High Tech Machines and materials for all our services such as ApogeeX. Its inclusion with Adobe Engine, which allows PDF files to be rendered natively throughout the workflow, eliminating the need to flatten transparent artwork, enables a more efficient and reliable end-to-end PDF workflow and many more other softwares and machines.


                </p>
              </div>
              <div className="flex justify-center items-center text-center text-2xl font-extrabold">
                BEST QUALITY DESIGNING AND PRODUCTS AT THE MOST COST-EFFECTIVE
                RATES
              </div>
            </div>
          </div>
        </div>
      );
}

export default Designing