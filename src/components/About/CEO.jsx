import React from "react";
import './style.css'

const CEO = () => {
  return (
    <div className="mb-8">
      <div className="h-16 w-screen flex items-center justify-center bg-gray-200 text-white">
        <span className="text-gray-600"> Home </span>
        <hr className="m-2 mt-4 h-px w-8 bg-black border-0" />
        <span className="text-black"> From CEO's Desk </span>
      </div>

      <div className="mt-24 md:flex flex-col md:ml-64 md:mr-64 gap-8 ">
        <p className="underline md:text-5xl text-2xl font-extrabold text-center">
          From CEO's Desk
        </p>
        <p className="md:text-lg text-sm font-bold md:text-justify text-center md:mt-0 mt-4">
          We, at, Decent Printing Press are dedicated to provide one of the
          world’s best services to our customers.
        </p>

        <p className="md:text-lg text-sm md:text-justify text-center md:mt-0 mt-4">
        We aim to be leaders in the printing industry and will achieve our goals by involving our co-workers, contractors and customers in our movement of excellence.
        </p>

        <p className="md:text-lg text-sm  md:text-justify text-center md:mt-0 mt-4">
        We never compromise on quality or integrity and we are committed to teamwork and innovation. Our systems and equipments are constantly and continuously updated to enhance performance.
        </p>

        <p className="md:text-lg text-sm  md:text-justify text-center md:mt-0 mt-4">
        We possess well-trained professionals, including Printing specialists, designers & Production experts.
        </p>

        <p className="md:text-lg text-sm font-semibold md:text-justify text-center md:mt-0 mt-4">
          With regards, <br /> CEO
        </p>
        <p className="md:text-lg text-sm font-semibold md:text-justify text-center md:mt-0 mt-4">
          Decent Printing Press
        </p>
      </div>
    </div>
  );
};

export default CEO;
