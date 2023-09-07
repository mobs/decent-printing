import React, { useState } from 'react'

import Sidebar from './Sidebar'
import Main from './Main'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const [ selectedCategory, setSelectedCategory ] = useState('Products')

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user)


  
  return (
    user?.result.isAuthorized ? 
    <div className='md:flex gap-2'>
      <Sidebar setSelectedCategory={setSelectedCategory}/>
      <div className='border-[1px] border-gray-400 m-2'>  </div>
      <Main selectedCategory={selectedCategory} />
    </div>
    :
    <div className='flex flex-col text-3xl font-bold text-red-500 justify-center items-center w-screen h-96'>
      <p> You are not Authorized to visit this page </p>
      <p> Kindly, Contact admin if you think this is by mistake!!!</p>
    </div>
  )
}

export default Dashboard