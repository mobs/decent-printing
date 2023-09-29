import React from "react";

const Card = ({ data, length, page }) => {
  return (
    <div className="rounded m-8 bg-white hover:translate-x-2 hover:translate-y-2 duration-300 hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.5),0_10px_20px_-2px_rgba(0,0,0,0.5)] ">
      <div className="rounded border">
        <img
          className="hover:p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.5),0_10px_20px_-2px_rgba(0,0,0,0.5)] aspect-square"
          src={data?.image || data.data}
          alt="image"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-6 flex items-center text-center justify-center">
        <h6 className="mb-2 md:text-xl text-sm font-medium leading-tight text-gray-800">
          {/* {data?.dataType === "Devices" ? (
            <></>
          ) : data?.dataType ? (
            page === "Category" ? (
              <> {data.title} </>
            ) : (
              <>
                {" "}
                {data.category} ({length}){" "}
              </>
            )
          ) : (
            <>{data.category || data.title} ({length})</>
          )} */}
          {
            data.dataType ? (
              page === "Category" ? (
                <> {data.title} </>
              ) : (
                <> {data.category} ({length}) </>
              )
            ) : (
              page === "Category" ? (
                <> {data.title} </>
              ) : length ? (
                <> {data.category} ({length}) </>
              ) : (
                <>{data.category}</>
              )
            )
          }
        </h6>
      </div>
    </div>
  );
};

export default Card;
