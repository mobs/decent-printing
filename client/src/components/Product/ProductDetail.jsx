import React from "react";
import { Link } from "react-router-dom";

import { productData } from "../../constants/ProductData";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productTitle } = useParams();
  const currentUrl = window.location.href;

  const product = productData.find((p) => p.title === productTitle);

  return (
    <div>
      <div className="h-16 w-screen flex items-center justify-center bg-gray-200 text-white">
        <span className="text-gray-600"> Home </span>
        <hr className="m-2 mt-4 h-px w-8 bg-black border-0" />
        <span className="text-black"> Product Detail </span>
      </div>

      <div className="lg:m-32 m-2 p-4 lg:gap-24 gap-2 md:flex block justify-center">
        <div className="gap-8 md:flex block jusitfy-center items-center">
          <img className="h-[500px] md:w-[1000px]" src={product.image} />
        </div>

        <div className="md:flex block md:text-left text-center flex-col gap-8">
          {/* details and buttons etc. */}
          <p className="text-3xl font-bold md:mt-0 mt-4"> {product.title} </p>
          <p className="text-lg text-gray-500 md:mt-0 mt-4">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            tristique malesuada elit, ut facilisis tellus elementum id. Nullam
            id consectetur diam. Pellentesque nec tristique sapien etiam non
            augue lacus.{" "}
          </p>
          <div className="">
            <Link to={`/Checkout/${product.title}`}>
            <button className="md:mt-0 mt-4 p-2 bg-red-500 rounded text-white hover:bg-blue-700 ">
              Place Enquiry
            </button>
            </Link>
          </div>
          <hr className="md:mt-0 mt-4 md:mb-0 mb-4"/>
          <p className="flex justify-between md:mr-64">
            <span className="text-gray-500 font-semibold"> Share: </span>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
              target="_blank"
            >
              {" "}
              <i class="fa-brands fa-facebook hover:text-orange-500"></i>{" "}
            </a>

            <a
              href={`https://twitter.com/intent/tweet?url=${currentUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i class="fa-brands fa-twitter hover:text-orange-500"></i>{" "}
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i class="fa-brands fa-linkedin-in hover:text-orange-500"></i>{" "}
            </a>
            <a
              href={`https://www.tumblr.com/widgets/share/tool?canonicalUrl=${currentUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i class="fa-brands fa-tumblr hover:text-orange-500"></i>{" "}
            </a>
            <a
              href={`https://www.pinterest.com/pin/create/button/?url=${currentUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i class="fa-brands fa-pinterest-p hover:text-orange-500"></i>{" "}
            </a>
            <a
              href={`https://vk.com/share.php?url=${currentUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i class="fa-brands fa-vk hover:text-orange-500"></i>{" "}
            </a>
            <a
              href={`https://telegram.me/share/url?url=${currentUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i class="fa-brands fa-telegram hover:text-orange-500"></i>{" "}
            </a>
            {/* icons */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
