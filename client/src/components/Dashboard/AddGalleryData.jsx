import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";

import { addData } from "../../actions/gallery";

const AddGalleryData = () => {
  const categories = [
    "Select Category",
    "Popups/Rollups Printing",
    "Graphic Design",
    "Notepads/Annual Reports",
    "Presentation Folders/Booklets",
    "Price List / Proposal / Brochures",
    "Bussiness Cards / Calendars",
    "Fabric Print / Screen Printing",
    "Floor Graphics",
    "Lamp Posts",
    "Exhibitions & Events",
    "Display Stands",
    "Showroom Glass Branding",
    "Billboards",
    "Device"
  ];

  const dataTypes = ["Select", "Images", "Videos", "Devices"];

  const dispatch = useDispatch();
  const [ galleryData, setData] = useState({
    category: "",
    dataType: "",
    data: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addData(galleryData));
    setTimeout(() => {
      alert("Image added successfully!!!")
    }, 2000);
    clear();
  };

  const clear = () => {
    setData({
      category: "",
      dataType: "",
      data: "",
    });
  };

  return (
    <div>
      <section className="bg-smokewhite">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="text-center text-5xl font-bold m-16">
            Add Gallery Data
          </h2>

          <div className="md:flex justify-center items-center md:m-0 m-2">
            <form onSubmit={handleSubmit} className="space-y-8 md:w-96 w-auto">
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
                  value={galleryData.category}
                  onChange={(e) =>
                    setData({ ...galleryData, category: e.target.value })
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

              <div className="w-full">
                <label
                  for="dataType"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Data Type
                </label>
                <select
                  id="dataType"
                  name="dataType"
                  className="w-full shadow-sm bg-gray-200 text-black text-sm rounded-lg block p-2"
                  value={galleryData.dataType}
                  onChange={(e) =>
                    setData({ ...galleryData, dataType: e.target.value })
                  }
                >
                  {dataTypes.map((cat, idx) => (
                    <option selected="" value={cat} key={idx}>
                      {" "}
                      {cat}{" "}
                    </option>
                  ))}
                </select>
              </div>
              <div className="shadow-sm bg-gray-200 text-black text-sm rounded-lg block p-2 w-full">
                <FileBase
                  type="file"
                  className=""
                  multiple={false}
                  id="data"
                  name="data"
                  onDone={({ base64 }) => setData({ ...galleryData, data: base64 })}
                />
              </div>

              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-500 sm:w-fit hover:bg-primary-800 hover:text-black"
              >
                Add Data
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddGalleryData;

