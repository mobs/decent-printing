import React from 'react'
import { digitalPrinting, digital1 } from '../../constants/Images'

const Digital = () => {
  return (
    <div>
      <div className="h-16 w-screen flex items-center justify-center bg-gray-200 text-white">
        <span className="text-gray-600"> Home </span>
        <hr className="m-2 mt-4 h-px w-8 bg-black border-0" />
        <span className="text-black"> Digital Printing </span>
      </div>


      <div className="lg:m-32 m-2 p-4 lg:gap-24 gap-2 md:flex block justify-center">
        <div className="gap-8 md:flex block jusitfy-center items-center">
          <div id="div1" className="flex flex-col gap-8">
            <div className="h-[400px] md:w-[600px] transition-transform transform-gpu hover:translate-x-2 hover:translate-y-2 duration-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.2)]">
              <img className='h-full' src={digitalPrinting} alt='digital'/>
            </div>
            <div className="transition-transform transform-gpu hover:translate-x-2 hover:translate-y-2 duration-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.2)]">
              <img className='w-full' src={digital1} alt="offset2"/>
            </div>
          </div>
        </div>
        <div className="md:flex block md:text-justify text-center flex-col gap-8 justify-center">
          <div className="flex justify-center flex-col m-4 gap-4 items-center text-gray-500 text-lg">
            <p className="">
            We are a one-stop-shop for all large format printing requirements. Banners to vehicle branding, wallpapers to window stickers, we digitally print everything in-house.
            </p>
            <p>
            We, at Decent Printing LLC, offer you state-of-the-art digital printing services that guarantee precision, high resolution, and top quality finishing, giving your product the desired professional look and feel. Our groundbreaking color management system enables us to make color adjustments on our large format printing system automatically, making it easier than ever to work according to your brand guidelines.
            </p>

            <p>
            For banners, posters, window stickers, vehicle branding, roll up banners, and all other digital printing in Dubai, we provide integrated large format printing solutions for all your marketing and communications collateral
            </p>
            <p>
            We achieve our high-quality products through Eco-Solvent printing, and UV printing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Digital