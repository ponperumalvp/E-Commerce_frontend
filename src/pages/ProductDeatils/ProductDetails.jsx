import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../assets/data/product";
import ProductCard from "../../shared/productCard/ProductCard";

const ProductDetails = () => {
  const { id } = useParams();

  console.log("first");
  console.log(typeof id);

  const ProductDeatils = products.filter((item) => item.id.toString() === id);
  console.log(ProductDeatils);

  const { name, src, number, rate, productInfo, RefundPolicy, desc } =
    ProductDeatils;
  return (
    <div>
      {ProductDeatils.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductDetails;
