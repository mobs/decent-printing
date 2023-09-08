import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import Card from "../Card/Card";

const Images = () => {
  const { data } = useSelector((state) => state.gallery);

  const images = data.filter((d) => d.dataType === "Images");

  const { category } = useParams();

  const groupedProducts = images.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  let filteredImages = [];
  if (category) filteredImages = groupedProducts[category];

  return (
    <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-1">
      {category ? (
        <>
          {filteredImages.map((data, idx) => (
            <Card data={data} page="Category" key={idx} />
          ))}
        </>
      ) : (
        Object.keys(groupedProducts).map((category, idx) => (
          <Link to={`/Gallery/${encodeURIComponent(category)}`} key={idx}>
            <Card
              data={groupedProducts[category][0]}
              length={groupedProducts[category].length}
            />
          </Link>
        ))
      )}
    </div>
  );
};

export default Images;
