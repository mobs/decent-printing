import React from "react";
import { useDispatch } from 'react-redux';

import { deleteProduct } from '../../actions/products'


const ProductCard = ({ prod, setId }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
      dispatch(deleteProduct(prod._id));
    }
    
    const handleOutStock = () => {
      setId(prod._id)
    }

  return (
    <div className="relative block bg-white hover:translate-x-2 hover:translate-y-2 duration-300 hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.5),0_10px_20px_-2px_rgba(0,0,0,0.5)] ">
        <div>
          <img
            className="shadow-[0_2px_15px_-3px_rgba(0,0,0,0.5),0_10px_20px_-2px_rgba(0,0,0,0.5)] md:min-h-[300px] md:max-h-[300px] md:min-w-[100%] lg:max-w-[100%] lg:min-w-[363px] max-h-[120px] min-h-[247px] max-w-[120px] min-w-[247px]"
            src={prod?.image}
            alt="product image"
          />
        </div>
      <div className="p-6">
        <h5 className="h-18 mb-2 text-xl font-medium leading-tight text-gray-600">
          {prod?.title || prod?.category}
        </h5>

        <div className="flex items-center justify-between space-x-2">
          <button onClick={handleDelete} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-blue-800">
            Delete
          </button>
          
          <button
            className="text-white px-2 py-1 rounded bg-red-500 hover:bg-blue-800"
            onClick={handleOutStock}
          >
            Out Of Stock
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
