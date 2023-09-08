import React, { useState } from "react";
import { useSelector } from "react-redux";
import Images from "./Images";
import Videos from "./Videos";
import Card from "../Card/Card";


const Gallery = () => {
  const [tab, setTab] = useState("Images");

  const { data } = useSelector((state) => state.gallery);

  const videos = data.filter((d) => d.dataType === "Videos");
  const devices = data.filter((d) => d.dataType === "Devices");

  const handleClick = (tab) => {
    setTab(tab);
  };

  return (
    <div>
      <div className="h-16 w-screen flex items-center justify-center bg-gray-200 text-white">
        <span className="text-gray-600"> Home </span>
        <hr className="m-2 mt-4 h-px w-8 bg-black border-0" />
        <span className="text-black"> Gallery </span>
      </div>

      <div className="flex mt-8 text-center justify-center items-center gap-8 font-bold text-lg">
        <button
          onClick={() => handleClick("Images")}
          className={`${tab === "Images" ? "underline" : ""}`}
        >
          {" "}
          Images{" "}
        </button>
        <button
          onClick={() => handleClick("Videos")}
          className={`${tab === "Videos" ? "underline" : ""}`}
        >
          {" "}
          Videos{" "}
        </button>
        <button
          onClick={() => handleClick("Devices")}
          className={`${tab === "Devices" ? "underline" : ""}`}
        >
          {" "}
          Devices{" "}
        </button>
      </div>

      <div>
        {tab === "Images" ? (
          <Images />
        ) : tab === "Videos" ? (
          <Videos data={videos} />
        ) : (
          <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-1">
            {devices.map((data, idx) => (
              <Card data={data} key={idx} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
