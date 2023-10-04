import React from "react";

const Environmental = () => {
  return (
    <div>
      <div className="h-16 w-screen flex items-center justify-center bg-gray-200 text-white">
        <span className="text-gray-600"> Home </span>
        <hr className="m-2 mt-4 h-px w-8 bg-black border-0" />
        <span className="text-black"> Environmental Policy </span>
      </div>

      <div className="mt-32 md:flex flex-col md:ml-64 md:mr-64 gap-16 text-justify m-4">
        <p className="md:text-5xl text-2xl underline font-extrabold text-center">
          Environmental Policy
        </p>

        <p className="text-lg  md:mt-0 mt-4">
          Decent Printing Press LLC has aim with the primary purpose of print
          production, litho & digital (for commercial and non commercial
          customers) and the supply of office products for both commercial and
          retail. The scheme has
          achieved a 20% reduction from beginning. To
          eliminate and/or minimise any harmful effects on the environment,
          caused by the activities of Decent Printing Press LLC.
        </p>
      </div>
    </div>
  );
};

export default Environmental;
