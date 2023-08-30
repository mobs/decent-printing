import React, { useState } from 'react'
import Images from './Images'
import Videos from './Videos'
import Card from '../Card/Card'
import { deviceData } from './Constant/GalleryData'
import { products } from '../../constants/NavabrData'

const Gallery = () => {
    const [ tab, setTab ] = useState('Images');
    const [ selectedCategory, setSelectedCategory ] = useState('Choose Category')

    const handleClick = (tab) => {
        setTab(tab);
    }

    const handleChange = (e) => {
      setSelectedCategory(e.target.value)
    }

  return (
    <div>
        <div className="h-16 w-screen flex items-center justify-center bg-gray-200 text-white">
            <span className="text-gray-600"> Home </span>
            <hr className="m-2 mt-4 h-px w-8 bg-black border-0" />
            <span className="text-black"> Gallery </span>
        </div>

        <div className='flex mt-8 text-center justify-center items-center gap-8 font-bold text-lg'>
            <button onClick={() => handleClick('Images')} className={`${ tab === 'Images' ? 'underline' : ''}`}> Images </button>
            <button onClick={() => handleClick('Videos')} className={`${ tab === 'Videos' ? 'underline' : ''}`}> Videos </button>
            <button onClick={() => handleClick('Devices')} className={`${ tab === 'Devices' ? 'underline' : ''}`}> Devices </button>
        </div>

        
        <select value={selectedCategory} onChange={handleChange} className={` ${tab === 'Devices' ? 'hidden' : 'block'} md:ml-32 m-4 border-black focus:ring-red-500 outline-4 border-blue-500`}> 
          <option disabled> Choose Category </option>
          <option> All </option>
          { products.map((prod,idx) => (
            <option className='hover:bg-red-500 hover:text-white focus:ring-red-500' key={idx} > {prod.title} </option>
          ))}
        </select>

            <div>

            
        { 
            tab === "Images" ? 
                <Images selectedCategory={selectedCategory}/>
            :
            tab === "Videos" ?
                <Videos selectedCategory={selectedCategory} />    
            :
            <div className='mt-8 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-1'>
            {
              deviceData.map((data,idx) => (
                <Card data={data} key={idx} />
              ))
            }
            
          </div>
        }
</div>

    </div>
  )
}

export default Gallery