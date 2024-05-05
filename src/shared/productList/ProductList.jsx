import React, { Children } from "react";
import { products } from "../../assets/data/product";
import ProductCard from "../productCard/ProductCard";

const ProductList = ({ children, link }) => {
  return (
    <div>
      <div className="md:grid grid-cols-3 flex flex-col md:flex-none gap-4 p-4 mx-auto md:w-[80%]">
        {children.map((product, index) => (
          <div key={index} className="">
            <ProductCard product={product} link={link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
