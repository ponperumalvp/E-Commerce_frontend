import React, { Children } from "react";
import { products } from "../../assets/data/product";
import ProductCard from "../productCard/ProductCard";

const ProductList = ({ children, link, handlefunction, subtitle }) => {
  return (
    <div>
      {children.length ? (
        <div className="md:grid grid-cols-3 flex flex-col md:flex-none gap-4 p-4 mx-auto md:w-[100%]">
          {children.map((product, index) => (
            <div key={index} className="">
              <ProductCard
                product={product}
                link={link}
                handlefunction={handlefunction}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-20">
          <h1>{subtitle} Is Empty</h1>
        </div>
      )}
    </div>
  );
};

export default ProductList;
