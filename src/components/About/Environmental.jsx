import React from 'react'

const Environmental = () => {
  return (
    <div>
        <div className="h-16 w-screen flex items-center justify-center bg-gray-200 text-white">
        <span className="text-gray-600"> Home </span>
        <hr className="m-2 mt-4 h-px w-8 bg-black border-0" />
        <span className="text-black"> Environmental Policy </span>
      </div>

      <div className="mt-32 md:flex flex-col md:ml-64 md:mr-64 gap-16 text-justify m-4">
        <p className="md:text-7xl text-4xl font-extrabold text-center">
          Environmental Policy
        </p>

        <p className="text-lg text-gray-600 font-semibold md:mt-0 mt-4">
          Decent Printing Press LLC has aim with the primary purpose of print production, litho & digital (for commercial and non commercial customers) and the supply of office products for both commercial and retail. We have been the proud holders of ISO 14001 Environmental Management Standard since 2008 and also hold ISO 9001 Quality Management Systems certificate. It is the aim of Decent Printing Press LLC Ltd to achieve the highest status in the So-go-eco/Carbon Smart reduction programme for our Spalding Operation. The scheme has achieved a 20% reduction since we started participating in 2008. To eliminate and/or minimise any harmful effects on the environment, caused by the activities of Decent Printing Press LLC.
        </p>
      </div>
    </div>
  )
}

export default Environmental