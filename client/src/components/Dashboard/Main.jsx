import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddGalleryData from "./AddGalleryData";
import AddProduct from "./AddProduct";
import ProductCard from "./ProductCard";
import AddAdmin from "./AddAdmin";
import { deleteProduct, outOfStock } from "../../actions/products";
import GalleryCard from "./GalleryCard";
import AddBanner from "./AddBanner";

const Main = ({ selectedCategory }) => {
  const [id, setId] = useState(null);
  const [id1, setId1] = useState(null);
  const dispatch = useDispatch();

  let { products, isLoading } = useSelector((state) => state.products);
  const { banners } = useSelector((state) => state.banner); 
  const { data } = useSelector((state) => state.gallery);

  useEffect(() => {
    if (id1) {
      products = products.filter((product) => product.id !== id1);
      dispatch(deleteProduct(id1)); 
      setTimeout(() => {
        alert("Product deleted successfully!!!")
      }, 2000);
    }
    if(id) dispatch(outOfStock(id));
  }, [id, id1]);

  return isLoading ? (
    <h1> Loading... </h1>
  ) : (
    <div className="w-screen">
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
          <div className="flex m-16 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-10">
            {products.map((prod, idx) => (
              <ProductCard prod={prod} setId={setId} setId1={setId1} key={idx} />
            ))}
          </div>
        </div>
      ) : selectedCategory === "Add Admin" ? (
        <>
          <AddAdmin />
        </>
      ) : selectedCategory === "Gallery" ? (
        <div>
          <div className="flex m-16 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-10">
            {data.map((d, idx) => (
              <GalleryCard page="Gallery" galleryData={d} key={idx} />
            ))}
          </div>
        </div>
      ) : selectedCategory === "Add Banner" ? (
        <div>
          <AddBanner />
        </div>
      ) : selectedCategory === "Banners" ? (
        <>
        <p className="font-bold text-lg text-center"> Only the Top 4 Banners will be displayed on the Home page(See the Home Page for reference) </p>
        <div className="block">
          {banners.map((d, idx) => (
            <GalleryCard page="Banners" galleryData={d} key={idx} />
          ))}
        </div>
        </>
      ) : (
        <> Nothing </>
      )}
    </div>
  );
};

export default Main;
