import React from "react";

const Introduction = () => {
  return (
    <div className="mb-8">
      <div className="h-16 w-screen flex items-center justify-center bg-gray-200 text-white">
        <span className="text-gray-600"> Home </span>
        <hr className="m-2 mt-4 h-px w-8 bg-black border-0" />
        <span className="text-black"> Introduction </span>
      </div>

      <div className="mt-32 md:flex flex-col md:ml-64 md:mr-64 gap-16 text-justify m-4">
        <p className="md:text-5xl underline text-2xl font-extrabold text-center">
          Introduction to Company
        </p>

        <p className="md:text-lg text-sm  md:mt-0 mt-4">
          We take this opportunity to introduce DECENT PRINTING PRESS L.L.C, as
          one of the leading companies delivering total printing solutions,
          specialized in graphic designing, offset printing, digital printing,
          packing material and binding.
        </p>

        <p className="md:text-lg text-sm md:mt-0 mt-4">
          We at DECENT PRINTING PRESS, Believe in the Highest Quality and are
          Determined to Exceed Client Expectations. We Take Pride in Informing
          you That we Have Been Serving our valued clients for more than 25
          years in the Gulf region. We have a sound standing in the market as we
          have been serving leading companies and valuable customers like
          Skenley Black & Decker , Chickeing , Bank Of Baroda , Life Style ,
          Ambassador School , Talal Group , Parco Group , RAK Hotel , TSSC ,
          Firex , Caesars , GEMS Group Schools.etc covering their local and
          regional stationery and Printing needs.
        </p>
        <p className="md:text-lg text-sm md:mt-0 mt-4">
          {" "}
          We work to uphold quality standards in our Printing using premium inks
          providing maximum durability and permitted chemicals which are safe
          for both humans and the environment.
        </p>
        <p className="md:text-lg text-sm md:mt-0 mt-4">
          {" "}
          We, at DECENT PRINTING PRESS have a highly professional team who are
          proactively involved in keeping up with industry standards and norms
          ensuring reliable service with the most modern techniques of printing.
          We strive to meet your expectations and let you proceed with absolute
          confidence in us as your business partners. We deliver the best
          quality and prompt customer service round the clock.
        </p>
        <p className="md:text-lg text-sm md:mt-0 mt-4">
          We ensure that the commitment with quality to serve your needs & to
          maintain professionalism in our work flow constantly innovating and
          adding value where possible with flexible prices.
        </p>
        <p className="md:text-lg text-sm  md:mt-0 mt-4">
          Our success is from your satisfaction, so we take personal interest to
          ensure our clients are completely satisfied with the goods delivered
          and services that represent their brand.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
