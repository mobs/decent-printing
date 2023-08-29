import React, { useRef } from 'react'
import video from '../../constants/Decent2.mp4'
import { Cards, picksData } from '../../constants/HomeData'
import Card from '../Card/Card'
import { banner } from '../../constants/Images'
import { picks,hot, newArrival, banner2 } from '../../constants/Images'

const Home = () => {
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };


  return (
    <div className=''>
      <div className='flex justify-center items-center overflow-hidden h-[800px] bg-gradient-to-r from-blue-500 via-purple-300 to-red-500 '>
        <video 
        ref={videoRef}
        onEnded={handleVideoEnded}
        autoPlay muted className='h-[85%] w-screen shadow-[0_2px_15px_-3px_rgba(0,0,0,0.5),0_10px_20px_-2px_rgba(0,0,0,0.5)]'>
          <source src={video} type='video/mp4' />
        </video>
      </div>
      <div className='mt-8 flex flex-col justify-item items-center gap-6'>
        <div className='md:text-sm text-xs font-bold text-red-600'>
          PRINTING MADE EASY
        </div>
        <div className='md:text-6xl text-sm md:font-extrabold font-bold'>
          Featured Products
        </div>
        <div className='flex gap-6 font-bold'>
          <button className=' hover:underline'>
            All
          </button>
          <button className=' hover:underline'>
            Business Cards
          </button>
        </div>
      </div>
      <div className='mt-8 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-1'>
        { Cards.map((cardData, idx) => (
          <div className='' key={idx}>
            <Card data={cardData} />
          </div>
        ))}
      </div>

      <div className='lg:m-32 m-2 p-4 lg:gap-32 gap-2 md:flex block justify-center'>
        <div className='gap-8 md:flex block jusitfy-center items-center'>
          
          <div id="div1" className='flex flex-col gap-8'>
            <div className='transition-transform transform-gpu hover:translate-x-2 hover:translate-y-2 duration-500 h-64 w-64 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.2)]'>
              
              <i className="m-8 rounded-full h-20 w-20 bg-red-300 fa-solid fa-print text-white items-center justify-center flex text-6xl"></i> 
              <p className='text-2xl m-8 font-bold'> Pop ups/Roll ups printing </p>
            </div>
            <div className='transition-transform transform-gpu hover:translate-x-2 hover:translate-y-2 duration-500 h-64 w-64 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.2)]'>
              <i className="m-8 rounded-full h-20 w-20 bg-red-300 fa-regular fa-window-restore text-white items-center justify-center flex text-6xl"></i>
              <p className='text-2xl m-8 font-bold'>Notepads,Annual Reports</p>
            </div>
          </div>
          <div id='div2' className='gap-8 mt-16 flex flex-col'>
            <div className='transition-transform transform-gpu hover:translate-x-2 hover:translate-y-2 duration-500 h-64 w-64 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.2)]'>
              <i className="m-8 rounded-full h-20 w-20 bg-red-300 fa-solid fa-cubes text-white items-center justify-center flex text-6xl"></i>
              <p className='text-2xl m-8 font-bold'> Graphic Design </p>
            </div>
            <div className='transition-transform transform-gpu hover:translate-x-2 hover:translate-y-2 duration-500 h-64 w-64 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.2)]'>
              <i className="m-8 rounded-full h-20 w-20 bg-red-300 fa-solid fa-book-journal-whills text-white items-center justify-center flex text-6xl"></i>
              <p className='text-2xl m-8 font-bold'>Presentation Folders,Booklets</p>
            </div>
            
          </div>
        </div>
        <div className='md:flex block md:text-justify text-center flex-col gap-8'>
              <div className='flex justify-center items-center text-red-600 font-bold text-lg'>
                IF YOU ARE LOOKING FOR AFFORDABLE AND QUALITY DIGITAL PRINTERS IN UAE THEN WE WOULD LOVE TO HEAR FROM YOU.​
              </div>
              <div className='flex justify-center items-centert text-6xl font-extrabold'>
                WE COLOR YOUR BUSINESS
              </div>
              <div className='flex justify-center items-center text-gray-500 text-lg'>
                We are full edge printing house work towards quality assurance to gain your customer satisfaction.Quality control is practised at every stage of production,instilling awareness of quality among all members. We at Decent Printing Press believe in a service oriented approach to printing. Our understanding is that you are looking for three main aspects i.e. Consistent Reliability with Affordable services that has a Quick turn around period.
                In many of the processes, the ink or toner does not permeate the substrate, as does conventional ink, but forms a thin layer on the surface that may be additionally adhered to the substrate by using a fuser fluid with heat process (toner) or UV curing process (ink)
              </div>
        </div>
      </div>

      <button className='bg-gray-500 h-72 w-screen'>
          <img src={banner} />
      </button>

      <div className='lg:m-16 m-4 lg:flex block'>
          <div >
            <button className='hover:p-4 duration-500'>
              <img src={picks} alt='picks' />
            </button>
          </div>
          <div className='hover:none mt-8 grid md:grid-cols-3 md:gap-3 grid-cols-2'>
            {picksData.map((prod,idx) => (
              <div className="w-75 rounded m-8 bg-white " key={idx}>
              <div className='rounded border'>
                <img
                  className="aspect-sqaure md:h-64  "
                  src={prod?.image}
                  alt="image" style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6 flex items-center justify-center">
                  <button className="mb-2 text-xl font-medium leading-tight text-gray-600 hover:text-red-500">
                      {prod.title}
                  </button>
              </div>
          </div>
            ))}
          </div>
      </div>

      <div className='m-16 lg:flex block gap-4'>
        <div className='md:flex block jutify-center items-center'>
              <div className='mr-4 '>
                <img className='rounded hover:p-4 duration-500' src={hot} />
              </div>
              <div>
                <div className='flex flex-col gap-8'>
                  <div className='flex items-center text-red-600 font-bold text-lg'>
                    Hot Deal
                  </div>
                  <div className='flex items-centert text-3xl font-bold'>
                    Sale Upto 40%
                  </div>
                  <div className='flex justify-center items-center text-gray-500 text-sm'>
                    Get a special offer on your first box. FREE SHIPPING all the time.
                  </div>
                  <button className='md:mb-0 mb-4 font-bold flex underline items-center hover:text-red-500 duration-300'>
                    Order Now
                  </button>
                </div>

              </div>
        </div>
        
        <div className='md:flex block jutify-center items-center'>
              <div className='mr-4'>
              <img className='rounded hover:p-4 duration-500' src={newArrival} />
              </div>
              <div>
              <div className='flex flex-col gap-8'>
                  <div className='flex items-center text-red-600 font-bold text-lg'>
                    New Arrival
                  </div>
                  <div className='flex items-centert text-3xl font-bold'>
                  A superior method to print.
                  </div>
                  <div className='flex justify-center items-center text-gray-500 text-sm'>
                    Get a special offer on your first box. FREE SHIPPING all the time.
                  </div>
                  <button className='md:mb-0 mb-4 font-bold flex underline items-center hover:text-red-500 duration-300'>
                    Order Now
                  </button>
                </div>
              </div>
        </div>
      </div>

      <div className='mb-16 '>
        <a href='#'>
          <img src={banner2} />
        </a>
        <div className='md:flex m-16 mt-0 justify-between items-center'>
          <button onClick={() => window.open("https://www.facebook.com", '_blank')} className='font-semibold p-6 text-lg w-full hover:bg-blue-300'> Facebook </button>
          <button onClick={() => window.open("https://www.instagram.com", '_blank')} className='font-semibold  p-6 text-lg w-full hover:bg-blue-300'> Instagram </button>

          <button onClick={() => window.open("https://www.twitter.com", '_blank')} className='font-semibold p-6 text-lg w-full hover:bg-blue-300'> Twitter </button>

          <button onClick={() => window.open("https://www.youtube.com", '_blank')} className='font-semibold p-6 text-lg w-full hover:bg-blue-300'> Youtube </button>
          <button onClick={() => window.open("https://www.pinterest.com", '_blank')} className='font-semibold p-6 text-lg w-full hover:bg-blue-300'> Pinterest </button>

          
        </div>
      </div>
    </div>
  )
}

export default Home