import React from "react";
import { Link } from "react-router-dom";
import bedroomImg from "../../assets/images/bedroom/bedroom4.png";
import { useDispatch, useSelector } from "react-redux";
import * as Io from "react-icons/io";
import { Button } from "flowbite-react";
// import SavedProducts from "../../pages/SavedProducts";

const ProductCard = ({ product, link, handlefunction }) => {
  const dispatch = useDispatch();
  const { _id, name, price, number, featured, image } = product;
  const { savedProducts } = useSelector((store) => store.product);

  return (
    <div className="container ">
      <div className="border-white bg-bgClr shadow-lg rounded-lg  ">
        <div className="">
          <div className="relative">
            <Link
              to={`${link}/${_id}`}
              className="no-underline text-secondaryClr hover:text-thirdClr"
            >
              <img
                src={image ? image : bedroomImg}
                alt=""
                className="rounded-lg w-[100%] h-[300px] "
              />
            </Link>
            <button
              onClick={() => handlefunction(_id)}
              className="absolute top-0 right-0"
            >
              {savedProducts.find((item) => item._id === _id) ? (
                <Io.IoMdHeart className={`w-8 h-8 text-red-500`} />
              ) : (
                <Io.IoMdHeart className={`w-8 h-8 text-white`} />
              )}
            </button>

            {featured && (
              <span className="absolute top-0  left-0 h-[max-content] w-[max-content]  bg-[var(--primary-color)] rounded-md p-1 bg-thirdClr text-white">
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
                to={`${link}/${_id}`}
                className="no-underline text-lg font-serif text-secondaryClr hover:text-thirdClr"
              >
                {name}
              </Link>
            </h5>
            <div className=" mt-3 flex items-center text-lg text-secondaryClr font-serif   justify-between p-2">
              <h5>
                ${price}.00 <span className="text-sm" />
              </h5>

              <button className="w-[max-content] h-[max-content] bg-[var(--secondary-color)]  rounded-md p-1">
                <Link
                  to={`${link}/${_id}`}
                  className=" text-primaryClr no-underline"
                >
                  <Button>Buy Now</Button>
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
