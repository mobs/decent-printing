import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import { productData } from '../../constants/ProductData';
import PaginationControls from '../Pagination/PaginationControl';
import Card from '../Card/Card';

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;
  const totalProducts = productData.length;



  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const productsToShow = productData.slice(indexOfFirstProduct, indexOfLastProduct);


  return (
    <div>
      <div className="h-16 w-screen flex items-center justify-center bg-gray-200 text-white">
        <span className="text-gray-600"> Home </span>
        <hr className="m-2 mt-4 h-px w-8 bg-black border-0" />
        <span className="text-black"> Products </span>
      </div>

      <div>

      <div className='mt-8 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-1'>
        { productsToShow.map((cardData, idx) => (
          <Link to={`/Products/${cardData.title}`}>
          <div className='' key={idx}>
            <Card data={cardData} />
          </div>
          </Link>
        ))}
      </div>
      <div>
          <PaginationControls
            currentPage={currentPage}
            productsPerPage={productsPerPage}
            totalProducts={totalProducts}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  )
}

export default Products