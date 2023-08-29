import React, { useState } from 'react'
import Images from './Images'
import Videos from './Videos'
import { products } from '../../constants/NavabrData'

const Gallery = () => {
    const [ tab, setTab ] = useState('Images');
    const [ selectedCategory, setSelectedCategory ] = useState('Choose Category')

    const handleClick = () => {
        {
            tab === 'Images' ? setTab('Videos') : setTab('Images')
        }
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
            <button onClick={handleClick} className={`${ tab === 'Images' ? 'underline' : ''}`}> Images </button>
            <button onClick={handleClick} className={`${ tab === 'Videos' ? 'underline' : ''}`}> Videos </button>
        </div>

        
        <select value={selectedCategory} onChange={handleChange} className='md:ml-32 m-4 border-black focus:ring-red-500 outline-4 border-blue-500'> 
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
                <Videos selectedCategory={selectedCategory} />    
        }
</div>

    </div>
  )
}

export default Gallery