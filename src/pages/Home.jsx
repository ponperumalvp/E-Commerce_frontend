import React from "react";
import Carousel from "../carousel/Carousel";
import decorImg1 from "../assets/images/decor/decor1.png";
import ProductList from "../shared/productList/ProductList";
import { products } from "../assets/data/product";

const Home = () => {
  const text = ["MODERN", "DESIGN", "MEETS COZY", "COMFORT"];

  return (
    <div className="bg-thirdClr">
      {/* section one */}
      <section className="md:flex justify-around">
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
          <div className="border-2 border-primaryClr w-[60%] mb-4"></div>
        </div>
        <div className="md:p-10 hidden md:flex">
          <img src={decorImg1} alt="" className="md:w-96 md:h-96 w-svw" />
        </div>
      </section>

      {/* section two */}
      <section>
        <ProductList link={"/home"} children={products} />
      </section>
    </div>
  );
};

export default Home;
