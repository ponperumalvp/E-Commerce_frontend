import React, { Children } from "react";
import ProductCard from "../../shared/productCard/ProductCard";
import ProductList from "../../shared/productList/ProductList";

const PageCompenent = ({ children, link }) => {
  return (
    <div>
      <ProductList children={children} link={link} />
    </div>
  );
};

export default PageCompenent;
