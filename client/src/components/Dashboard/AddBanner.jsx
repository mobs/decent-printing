import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FileBase from 'react-file-base64'

import { addBanner } from "../../actions/banner";

const AddBanner = () => {
    const dispatch = useDispatch();

    const [ bannerData, setBannerData ] = useState({
        image:"", link:"", offer:""
    });
    
    const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(addBanner(bannerData));
      clear();
    };

    const clear = () => {
        setBannerData({image:"", link:"", offer:""});
    }


  return (
    <div>
      <section className="bg-smokewhite">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="text-center text-5xl font-bold m-16">
            Add Banner Data
          </h2>

          <div className="md:flex justify-center items-center md:m-0 m-2">
            <form onSubmit={handleSubmit} className="space-y-8 md:w-96 w-auto">
            <div>
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Banner Link
                </label>
                <input
                  type="text"
                  name="link"
                  id="link"
                  className="shadow-sm bg-gray-200 text-black text-sm rounded-lg block p-2 w-full"
                  placeholder="Give the link banner should take to..."
                  required
                  value={bannerData.link}
                  onChange={(e) =>
                    setBannerData({ ...bannerData, link: e.target.value })
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
                  value={bannerData.offer}
                  onChange={(e) =>
                    setBannerData({ ...bannerData, offer: e.target.value })
                  }
                />
                </div>

              
              <div className="shadow-sm bg-gray-200 text-black text-sm rounded-lg block p-2 w-full">
                <FileBase
                  type="file"
                  className=""
                  multiple={false}
                  id="data"
                  name="data"
                  required
                  onDone={({ base64 }) =>
                    setBannerData({ ...bannerData, image: base64 })
                  }
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

export default AddBanner;
