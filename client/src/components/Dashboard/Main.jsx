import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddGalleryData from "./AddGalleryData";
import AddProduct from "./AddProduct";
import ProductCard from "./ProductCard";
import AddAdmin from "./AddAdmin";
import { getProducts, outOfStock } from "../../actions/products";
import { getData } from "../../actions/gallery";
import GalleryCard from "./GalleryCard";


const Main = ({ selectedCategory }) => {
  const [id, setId] = useState(null);
  const [id1, setId1] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(outOfStock(id));
    else { 
      dispatch(getProducts());
    }
  }, [dispatch, id]);

  // console.log(data)
  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch])

  const { data } = useSelector((state) => state.gallery);
  return isLoading ? (
    <h1> Loading... </h1>
  ) : (
    <div className="w-screen ">
      {selectedCategory === "Add Gallery Data" ? (
        <>
          <AddGalleryData />
        </>
      ) : selectedCategory === "Add Product" ? (
        <>
          <AddProduct />
        </>
      ) : selectedCategory === "Products" ? (
        <div>
          <button></button>
          <div className="flex m-16 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-10">
            { products.map((prod,idx) => (
              <ProductCard prod={prod} setId={setId} key={idx} />
            ))}
          </div>
        </div>
      ) : selectedCategory === "Add Admin" ? (
          <> 
            <AddAdmin /> 
          </>
      ) : selectedCategory === "Gallery" ? (
        <div>
        <button></button>
        <div className="flex m-16 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-10">
          { data.map((d, idx) => (
            <GalleryCard galleryData={d} key={idx} />
          ))}
        </div>
      </div>
      ) : <> Nothing </>
    }
    </div>
  );
};

export default Main;
