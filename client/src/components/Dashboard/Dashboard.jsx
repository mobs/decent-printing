import React, { useState, useEffect } from 'react'

import Sidebar from './Sidebar'
import Main from './Main'

const Dashboard = () => {
  const [ selectedCategory, setSelectedCategory ] = useState('Products')
  
  return (
    <div className='md:flex gap-2'>
      <Sidebar setSelectedCategory={setSelectedCategory}/>
      <div className='border-[1px] border-gray-400 m-2'>  </div>
      <Main selectedCategory={selectedCategory} />
    </div>
  )
}

export default Dashboard