import React, { useEffect } from "react";
import decorImg1 from "../assets/images/decor/decor1.png";
import { Carousel } from "flowbite-react";
import ProductList from "../shared/productList/ProductList";

import {
  getProduct,
  getSavedProduct,
  getCartProduct,
  saveProduct,
} from "../Redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = () => {
      dispatch(getProduct());
    };
    getData();
  }, [dispatch]);

  useEffect(() => {
    const getData = () => {
      dispatch(getSavedProduct());
    };
    getData();
  }, [dispatch]);
  useEffect(() => {
    const getData = () => {
      console.log("cart product");
      dispatch(getCartProduct());
    };
    getData();
  }, [dispatch]);
  const handleSavedProduct = (productId) => {
    const userId = sessionStorage.getItem("userId");

    dispatch(saveProduct({ userId: userId, productId: productId }));
  };
  const { Products } = useSelector((store) => store.product);
  console.log(Products);
  const text = ["MODERN", "DESIGN", "MEETS COZY", "COMFORT"];

  return (
    <div className="lg:w-[80%] mx-auto">
      {/* section one */}
      <section className="md:flex justify-around bg-thirdClr">
        <div className="p-10">
          <div className="mt-6 flex flex-col gap-1 tracking-widest">
            {text.map((item, index) => (
              <h1
                className="text-5xl font-semibold p-1 text-secondaryClr"
                key={index}
              >
                {item}
              </h1>
            ))}
          </div>
          <h1 className="text-white font-normal  p-1 mt-6">
            Create the perfect space{" "}
          </h1>
          <div className="border-2 border-primaryClr mb-4"></div>
        </div>
        <div className="lg:p-10 lg:w-[50%]">
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={1000}>
              {Products.map((item, idx) => (
                <img src={item.image} alt="featured" key={idx} />
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* section two */}
      <section>
        <ProductList
          link={"/home"}
          children={Products}
          handlefunction={handleSavedProduct}
        />
      </section>
    </div>
  );
};

export default Home;
