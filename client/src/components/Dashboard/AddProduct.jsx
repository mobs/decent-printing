import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";

import { addNewProduct } from "../../actions/products";

const AddProduct = () => {
  const categories = [
    "Select Category",
    "Designing Work",
    "Date Box",
    "Cake Box",
    "Burger Box",
    "Perfume Box",
    "Chocolate Box",
    "Paper Bags",
    "Lunch Box",
    "Bussiness Card",
    "Letter Head",
    "Flyers",
    "Menus",
    "Brochures",
    "Envelope",
    "Booklets",
    "Diaries",
    "NCR Books",
    "Continuous Computer Forms",
    "Miscellaneous",
  ];

  const [productData, setProductData] = useState({
    title: "",
    category: "",
    image: "",
    inStock: "",
    offer: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewProduct(productData));
    setTimeout(() => {
      alert("Product added successfully");
    }, 3000);
    clear();
  };

  const clear = () => {
    setProductData({
      title: "",
      category: "",
      image: "",
      inStock: "",
      offer: "",
    });
  };

  return (
    <div>
      <section className="bg-smokewhite">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="text-center text-5xl font-bold m-16">
            Add a new product
          </h2>

          <div className="md:flex justify-center items-center md:m-0 m-2">
            <form onSubmit={handleSubmit} className="space-y-8 md:w-96 w-auto">
              <div>
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="shadow-sm bg-gray-200 text-black text-sm rounded-lg block p-2 w-full"
                  placeholder="Type product name"
                  required
                  value={productData.title}
                  onChange={(e) =>
                    setProductData({ ...productData, title: e.target.value })
                  }
                />
              </div>
              <div className="w-full">
                <label
                  for="offer"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Offer
                </label>
                <input
                  type="text"
                  name="offer"
                  id="offer"
                  className="shadow-sm bg-gray-200 text-black text-sm rounded-lg block p-2 w-full"
                  placeholder="Any Offer"
                  value={productData.offer}
                  onChange={(e) =>
                    setProductData({ ...productData, offer: e.target.value })
                  }
                />
              </div>
              <div className="w-full">
                <label
                  for="category"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="w-full shadow-sm bg-gray-200 text-black text-sm rounded-lg block p-2"
                  value={productData.category}
                  onChange={(e) =>
                    setProductData({ ...productData, category: e.target.value })
                  }
                >
                  {categories.map((cat, idx) => (
                    <option selected="" value={cat} key={idx}>
                      {" "}
                      {cat}{" "}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  for="stock"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Stock
                </label>
                <input
                  type="boolean"
                  name="inStock"
                  id="inStock"
                  className="shadow-sm bg-gray-200 text-black text-sm rounded-lg block p-2 w-full"
                  placeholder="Yes / No"
                  required=""
                  value={productData.inStock}
                  onChange={(e) =>
                    setProductData({ ...productData, inStock: e.target.value })
                  }
                />
              </div>
              <div className="shadow-sm bg-gray-200 text-black text-sm rounded-lg block p-2 w-full">
                <FileBase
                  type="file"
                  className=""
                  multiple={false}
                  id="image"
                  name="image"
                  onDone={({ base64 }) =>
                    setProductData({ ...productData, image: base64 })
                  }
                />
              </div>

              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-500 sm:w-fit hover:bg-primary-800"
              >
                Add product
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
