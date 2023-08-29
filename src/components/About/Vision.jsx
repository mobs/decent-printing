import React from "react";

const Vision = () => {
  return (
    <div>
      <div className="h-16 w-screen flex items-center justify-center bg-gray-200 text-white">
        <span className="text-gray-600"> Home </span>
        <hr className="m-2 mt-4 h-px w-8 bg-black border-0" />
        <span className="text-black"> Vision, Mission & Values </span>
      </div>

      <div className="mt-32 md:flex flex-col md:ml-64 md:mr-64 gap-16 text-justify m-4">
        <p className="md:text-5xl text-2xl underline font-extrabold text-center">
          Our Vision
        </p>

        <p className="text-lg text-gray-600 font-semibold md:mt-0 mt-4">
          To enrich lives and support businesses with meaningful and inspiring
          prints.
        </p>

        <p className="text-lg text-gray-600 font-semibold md:mt-0 mt-4">
          Print is everywhere, and our printers produce all kinds of printed
          applications. From books to educate our children, to labels and
          packaging to promote your products. From t
        </p>

        <p className="md:text-5xl text-2xl underline font-extrabold text-center md:mt-0 mt-4">
          Our Mission
        </p>

        <p className="text-lg text-gray-600 font-semibold md:mt-0 mt-4">
          To accelerate growth opportunities for professionals by offering
          digital print solutions with uncompromised quality and productivity
        </p>
        <p className="text-lg text-gray-600 font-semibold md:mt-0 mt-4">
          We help our customers to build on the opportunities of digital
          printing, enable them to produce micro-runs with customized prints, to
          print on-demand, only what is needed, first-time-right. This means our
          customers can grow their business by attracting more jobs, operate
          more efficient and more friendly for the environment
        </p>

        <p className="md:text-5xl text-2xl underline font-extrabold text-center md:mt-0 mt-4">
          Our Values
        </p>
        <p className="text-lg text-gray-600 font-semibold md:mt-0 mt-4">
          To accelerate growth opportunities for professionals by offering
          digital print solutions with uncompromised quality and productivityaWe
          care about our customers’ business as if it’s our own We drive
          innovation as an end-to-end team effort We are passionate about
          creating technology for the best print solution
        </p>
        <p className="text-lg text-gray-600 font-semibold md:mt-0 mt-4">
          We believe close collaboration with everyone involved from our
          suppliers to our customers makes us adaptive, efficient and
          customer-focused throughout the entire organization. Together, we
          transform the world of print.
        </p>
      </div>
    </div>
  );
};

export default Vision;
