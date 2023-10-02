import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import PaginationControls from "../Pagination/PaginationControl";
import Card from "../Card/Card";

const Products = () => {
  const { category } = useParams();

  const { products, isLoading } = useSelector((state) => state.products);
  let filteredProducts;

  const groupedProducts = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  if (category) {
    filteredProducts = groupedProducts[category];
  } else {
    filteredProducts = products;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [currPage, setCurrPage] = useState(1);
  const productsPerPage = 12;
  const totalProducts = Object.keys(groupedProducts).length;

  const indexOfLastProduct = category ? currPage * productsPerPage : currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const productsToShow = filteredProducts && filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const categoryKeys = category ? [category] : Object.keys(groupedProducts);
  const keysToShow = categoryKeys.slice(indexOfFirstProduct, indexOfLastProduct);

  // Create a new object containing only the selected categories and their products
  const groupedProductsToShow = keysToShow.reduce((acc, categoryKey) => {
    acc[categoryKey] = groupedProducts[categoryKey];
    return acc;
  }, {});

  return isLoading ? (
    <h1> Loading... </h1>
  ) : (
    <div>
      <div className="h-16 w-screen flex items-center justify-center bg-gray-200 text-white">
        <span className="text-gray-600"> Home </span>
        <hr className="m-2 mt-4 h-px w-8 bg-black border-0" />
        <span className="text-black"> Products </span>
      </div>

      <div>
        <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-1">
          {category ? (
            <>
              {productsToShow?.map((data, idx) => (
                <Card data={data} page="Category" key={idx} />
              ))}
            </>
          ) : (
            Object.keys(groupedProductsToShow)?.map((category, idx) => (
              <Link to={`/Products/${encodeURIComponent(category)}`} key={idx}>
                <Card
                  page=""
                  data={groupedProducts[category][0]}
                  length={groupedProducts[category]?.length}
                />
              </Link>
            ))
          )}
        </div>
        <div>
          {
            category ? 
              <PaginationControls
                currentPage={currPage}
                productsPerPage={productsPerPage}
                totalProducts={groupedProducts[category]?.length}
                onPageChange={setCurrPage}
              /> :
              <PaginationControls
                currentPage={currentPage}
                productsPerPage={productsPerPage}
                totalProducts={totalProducts}
                onPageChange={setCurrentPage}
              />
          }
        </div>
      </div>
    </div>
  );
};

export default Products;
