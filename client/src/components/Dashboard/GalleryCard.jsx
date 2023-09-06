import React from "react";
import { useDispatch } from 'react-redux';

import { deleteData } from "../../actions/gallery";


const GalleryCard = ({ galleryData }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
      dispatch(deleteData(galleryData._id));
    }
    

  return (
    <div className="relative block bg-white hover:translate-x-2 hover:translate-y-2 duration-300 hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.5),0_10px_20px_-2px_rgba(0,0,0,0.5)] ">
        <div>
          <img
            className="shadow-[0_2px_15px_-3px_rgba(0,0,0,0.5),0_10px_20px_-2px_rgba(0,0,0,0.5)] md:min-h-[300px] md:max-h-[300px] md:min-w-[100%] lg:max-w-[100%] lg:min-w-[363px] max-h-[120px] min-h-[247px] max-w-[120px] min-w-[247px]"
            src={galleryData.data}
            alt="product image" style={{ }}
          />
        </div>

        <div className="p-6 flex items-center justify-between space-x-2">
          <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded hover:bg-blue-500">
            Delete
          </button>
          
        </div>
    </div>
  );
};

export default GalleryCard;
