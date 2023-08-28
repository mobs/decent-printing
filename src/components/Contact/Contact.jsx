import React from 'react'

const Contact = () => {
  return (
    <div className='mb-8'>
      <div className="h-16 w-screen flex items-center justify-center bg-gray-200 text-white">
        <span className="text-gray-600"> Home </span>
        <hr className="m-2 mt-4 h-px w-8 bg-black border-0" />
        <span className="text-black"> Contact Us </span>
      </div>

      <div className='m-8 text-4xl font-bold text-center'> Keep In Touch With US</div>
      <div className='m-4 text-center text-xl text-gray-500'>
        <p>We’re talking about clean beauty gift sets, of course – and we’ve got a bouquet of</p>
        <p>beauties for yourself or someone you love.</p>
      </div>

      <div className='md:flex block md:m-32 md:ml-64 md:mr-64 m-4 justify-between items-center'>
        <div className='flex flex-col gap-4 text-center md:text-left'>
          <i className="fa-solid fa-location-dot text-5xl text-orange-400"></i>
          <p className='text-lg font-bold'> Address </p>
          <p className='text-gray-500 text-semibold'> AL WAHDA STREET, SHARJAH, UNITED ARAB EMIRATES. </p>
          <p className='text-gray-500 text-semibold'>Industrial Area 4, Al Qusais, Damascrus Street, Dubai, UAE</p>
        </div>
        <div className='flex flex-col gap-4 text-center md:text-left md:mt-0 mt-8'>
            <i className="fa-solid fa-phone-volume text-5xl text-orange-400"></i>
            <p className='text-lg font-bold'> Contact </p>
            <p className='text-gray-500 text-semibold'> Phone: +971 6 533 5224 </p>
            <p className='text-gray-500 text-semibold'> Phone: +971 4 267 1113 </p>
            <p className='text-gray-500 text-semibold'> E-mail: enquiry@decentppdxb.ae </p>
        </div>
        <div className='flex flex-col gap-4 text-center md:text-left md:mt-0 mt-8'>
        <i className="fa-regular fa-clock text-5xl text-orange-400"></i>
        <p className='text-lg font-bold'> Hour of operation </p>
        <p className='text-gray-500 text-semibold'>Mon - Fri: 08:30 - 20:00</p>
        <p className='text-gray-500 text-semibold'> Sat & Sun: 09:30 - 21:30 </p>
        </div>
      </div>

      <div> 
        <p className='text-5xl font-extrabold text-center mb-4'> Dubai Qusais </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.318638255191!2d55.39308888109223!3d25.293496420018744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ddfe3c442e9%3A0x74776015436db781!2sDECENT%20PRINTING%20PRESS%20LLC.!5e0!3m2!1sen!2sin!4v1693254268485!5m2!1sen!2sin" 
          className='w-screen h-96' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>

      <div> 
        <p className='text-5xl font-extrabold text-center mt-16 mb-4'> Sharjah </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.458456976331!2d55.3912361!3d25.322392599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5bef91bc5f77%3A0xec2e66b35c982485!2sDecent%20Printing%20Press%20LLC!5e0!3m2!1sen!2sin!4v1693254433646!5m2!1sen!2sin" 
          className="w-screen h-96" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

        </iframe>
      </div>

      <p className='text-center text-5xl font-bold m-16'> Send a Message </p>
      <div className='md:flex justify-center items-center md:m-0 m-2'>
        
        <form action="#" className="space-y-8 md:w-96 w-auto">
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-200 text-gray-200 text-sm rounded-lg block p-2 w-full"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="shadow-sm bg-gray-200 text-gray-200 text-sm rounded-lg block p-2 w-full"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="shadow-sm bg-gray-200 text-gray-200 text-sm rounded-lg block p-2 w-full"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-500 sm:w-fit hover:bg-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact