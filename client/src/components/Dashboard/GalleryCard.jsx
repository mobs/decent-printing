import React from "react";
import { useDispatch } from 'react-redux';

import { deleteData } from "../../actions/gallery";


const GalleryCard = ({ galleryData }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
      dispatch(deleteData(galleryData._id));
      setTimeout(() => {
        alert("Image deleted successfully!!!")
      }, 2000);
    }
    

  return (
    <div className="relative block bg-white ">
        <div className="hover:translate-x-2 hover:translate-y-2 duration-300 hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.5),0_10px_20px_-2px_rgba(0,0,0,0.5)]">
          { galleryData.image ? 
          <img
           className="w-auto h-96"
            src={galleryData.image}
          />
          : 
          <img
            className="shadow-[0_2px_15px_-3px_rgba(0,0,0,0.5),0_10px_20px_-2px_rgba(0,0,0,0.5)] aspect-square"
            src={galleryData?.data}
            alt="gallery image"
            style={{ objectFit: "fill",height:'100%',width:'100%' }}
          />
        }
        </div>

        <div className="p-6 flex items-center justify-between space-x-2">
          <button onClick={handleDelete} className="hover:bg-blue-800 bg-red-500  text-white px-2 py-1 rounded hover:bg-blue-500">
            Delete
          </button>
          
        </div>
    </div>
  );
};

export default GalleryCard;
