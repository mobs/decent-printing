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

      <div className="mt-32 md:flex flex-col md:ml-64 md:mr-64 gap-16">
        <p className="underline md:text-5xl text-2xl font-extrabold text-center">
          From CEO's Desk
        </p>
        <p className="md:text-lg text-sm font-bold md:text-left text-center md:mt-0 mt-4">
          We, at, Decent Printing Press are dedicated to provide one of the
          world’s best services to our customers.
        </p>

        <p className="md:text-lg text-sm font-semibold md:text-left text-center md:mt-0 mt-4">
          With regards, <br /> CEO
        </p>
        <p className="md:text-lg text-sm font-semibold md:text-left text-center md:mt-0 mt-4">
          Decent Printing Press
        </p>
      </div>
    </div>
  );
};

export default CEO;
