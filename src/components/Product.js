import React, { useContext } from "react";
// import link
import { Link } from "react-router-dom";
// import icons
import { BsPlus, BsEyeFill } from "react-icons/bs";

const Product = ({ product }) => {
  console.log(product);
  // destructure product
  const { id, image, category, title, price } = product;

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div class="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute top-2 -right-11 group-hover:right-2 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all">
          <button>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="flex w-12 h-12 bg-white justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div>2</div>
    </div>
  );
};

export default Product;
