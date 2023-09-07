import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import PaginationControls from '../Pagination/PaginationControl';
import Card from '../Card/Card';

const Products = () => {
  const { category } = useParams();

  const { products, isLoading } = useSelector((state) => state.products);
  let filteredProducts
  if(category){
    filteredProducts = products.filter((product) => product.category === category);
  } else {
    filteredProducts = products;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;
  const totalProducts = filteredProducts.length;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;


  const productsToShow = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    isLoading ? <h1> Loading... </h1> :
    <div>
      <div className="h-16 w-screen flex items-center justify-center bg-gray-200 text-white">
        <span className="text-gray-600"> Home </span>
        <hr className="m-2 mt-4 h-px w-8 bg-black border-0" />
        <span className="text-black"> Products </span>
      </div>

      <div>

      <div className='mt-8 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-1'>
        { productsToShow.map((cardData, idx) => (
          <Link to={`/Checkout/${encodeURIComponent(cardData._id)}`} key={idx}>
          <div className=''>
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