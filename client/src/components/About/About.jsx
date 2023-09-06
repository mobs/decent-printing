import React from 'react'

const About = () => {
  return (
    <div>
      <div className="h-16 w-screen flex items-center justify-center bg-gray-200 text-white">
        <span className="text-gray-600"> Home </span>
        <hr className="m-2 mt-4 h-px w-8 bg-black border-0" />
        <span className="text-black"> About Us </span>
      </div>

      <div className="md:flex md:flex-col gap-8 mt-8 md:ml-48 md:mr-48 m-4">
        <p className="md:text-lg text-sm text-red-600 font-bold text-center">
          OUR STRENGTH
        </p>
        <p className="lg:text-5xl md:text-2xl text-sm font-extrabold text-center">
          85 Employes Round the Clock Production and , Delivery Facilities !
        </p>
        <p className="text-lg text-gray-400 text-center">
          If you are looking for affordable and quality digital printers in UAE
          then we would love to hear from you.
        </p>
      </div>

      <div className="md:flex md:flex-col md:m-16 md:ml-32 md:mr-32 gap-8">
        <div className="md:flex justify-between ">
          <div className="flex m-2 gap-4 w-96">
            <i className="fa-solid fa-desktop text-3xl text-orange-400"></i>
            <p className="text-2xl font-bold">
              {" "}
              Top quality prints using the latest technology{" "}
            </p>
          </div>
          <div className="flex m-2 gap-4 w-96">
            <i className="fa-brands fa-mixer text-3xl text-orange-400"></i>
            <p className="text-2xl font-bold">
              {" "}
              Mix and match colors, sizes, and designs{" "}
            </p>
          </div>
          <div className="flex m-2 gap-4 w-96">
            <i class="fa-solid fa-truck-fast text-3xl text-orange-400"></i>
            <p className="text-2xl font-bold"> Fast Shipping </p>
          </div>
        </div>

        <div className="md:flex justify-between">
          <div className="flex m-2 gap-4 w-96">
            <i className="fa-solid fa-boxes-packing text-3xl text-orange-400"></i>
            <p className="text-2xl font-bold"> Made-to-measure packaging </p>
          </div>
          <div className="flex m-2 gap-4 w-96">
            <i className="fa-solid fa-bars-staggered text-3xl text-orange-400"></i>
            <p className="text-2xl font-bold"> Reorder quickly and easily</p>
          </div>
          <div className="flex m-2 gap-4 w-96">
            <i className="fa-solid fa-seedling text-3xl text-orange-400"></i>
            <p className="text-2xl font-bold">
              {" "}
              Environmentally friendly production processes{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="md:flex gap-4 justify-between ">
        <div className="p-4 flex flex-col text-lg font-semibold text-[#854f6c] gap-4 md:w-[50%]">
          <p className=''>
            {" "}
            We take this opportunity to introduce DECENT PRINTING PRESS L.L.C,
            as one of the leading companies delivering total printing solutions,
            specialized in graphic designing, offset printing, digital printing,
            packing material and binding.
          </p>

          <p>
            {" "}
            We at DECENT PRINTING PRESS, Believe in the Highest Quality and are
            Determined to Exceed Client Expectations.
          </p>
          <p>
            {" "}
            We Take Pride in Informing you That we Have Been Serving our valued
            clients for more than 25 years in the Gulf region. We have a sound
            standing in the market as we have been serving leading companies and
            valuable customers like Skenley Black & Decker , Chickeing , Bank Of
            Baroda , Life Style , Ambassador School , Talal Group , Parco Group
            , RAK Hotel , TSSC , Firex , Caesars , GEMS Group Schools.etc
            covering their local and regional stationery and Printing needs.
          </p>
          <p>
            {" "}
            We work to uphold quality standards in our Printing using premium
            inks providing maximum durability and permitted chemicals which are
            safe for both humans and the environment.
          </p>
        </div>
        <div className="p-4 flex flex-col text-lg font-semibold text-[#854f6c] gap-4 md:w-[50%]">
          <p>
            {" "}
            We, at DECENT PRINTING PRESS have a highly professional team who are
            proactively involved in keeping up with industry standards and norms
            ensuring reliable service with the most modern techniques of
            printing.
          </p>
          <p>
            {" "}
            We strive to meet your expectations and let you proceed with
            absolute confidence in us as your business partners.{" "}
          </p>
          <p>
            {" "}
            We deliver the best quality and prompt customer service round the
            clock.{" "}
          </p>
          <p>
            {" "}
            We ensure that the commitment with quality to serve your needs & to
            maintain professionalism in our work flow constantly innovating and
            adding value where possible with flexible prices.{" "}
          </p>
          <p>
            {" "}
            Our success is from your satisfaction, so we take personal interest
            to ensure our clients are completely satisfied with the goods
            delivered and services that represent their brand.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About