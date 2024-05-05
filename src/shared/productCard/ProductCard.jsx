import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, link }) => {
  const { id, name, rate, number, featured, src } = product;
  return (
    <div className="container ">
      <div className="border-white bg-bgClr shadow-lg rounded-lg  ">
        <div className="">
          <div className="relative">
            <img src={src} alt="" className="rounded-lg w-[100%] h-[300px] " />
            {featured && (
              <span className="absolute bottom-0  right-0 h-[max-content] w-[max-content]  bg-[var(--primary-color)] rounded-md p-1 text-black">
                NEW
              </span>
            )}
          </div>
          <div></div>
        </div>
        <div>
          <div>
            <h5 className="mt-3 p-2 ">
              <Link
                to={`${link}/${id}`}
                className="no-underline hover:text-[var(--secondary-color)]"
              >
                {name}
              </Link>
            </h5>
            <div className=" mt-3 flex items-center justify-between p-2">
              <h5>
                ${rate} <span className="text-sm" />
              </h5>
              <button className="w-[max-content] h-[max-content] bg-[var(--secondary-color)]  rounded-md p-1">
                <Link
                  to={`${link}/${id}`}
                  className=" text-primaryClr no-underline"
                >
                  Book Now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
