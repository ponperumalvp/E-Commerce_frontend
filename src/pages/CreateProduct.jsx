import React from "react";
import { getItem } from "../shared/localstorage/localStorage";
import { useDispatch } from "react-redux";
import { createProduct } from "../Redux/productSlice";
import { products } from "../assets/data/product";
const CreateProduct = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // const userOwner = getItem("userId");
    // products.map((item) => dispatch(createProduct(item)));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default CreateProduct;
