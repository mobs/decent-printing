import React from "react";

const Quality = () => {
  return (
    <div>
      <div className="h-16 w-screen flex items-center justify-center bg-gray-200 text-white">
        <span className="text-gray-600"> Home </span>
        <hr className="m-2 mt-4 h-px w-8 bg-black border-0" />
        <span className="text-black"> Quality Policy </span>
      </div>

      <div className="mt-32 md:flex flex-col md:ml-64 md:mr-64 gap-16 text-justify m-4">
        <p className="md:text-5xl underline text-2xl font-extrabold text-center">
          Quality Policy
        </p>

        <p className="text-lg  md:mt-0 mt-4">
          Decent Printing Press LLC aims to ensure that our products / services
          meet the needs of our customers at all times in accordance with
          customer, statutory and regulatory requirements, as well as our
          policies and procedures.
        </p>

        <p className="text-lg  md:mt-0 mt-4">
          The scope of our Quality Management System covers all
          activities stated within our Scope Document and we are committed to
          this.{" "}
        </p>
      </div>
    </div>
  );
};

export default Quality;
