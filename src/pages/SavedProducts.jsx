import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSavedProduct,
  getSavedProduct,
  saveProduct,
  setDeleteSaved,
} from "../Redux/productSlice";
import ProductList from "../shared/productList/ProductList";

const SavedProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = () => {
      dispatch(getSavedProduct());
    };
    getData();
  }, [dispatch]);

  const { savedProducts } = useSelector((store) => store.product);
  console.log(savedProducts);
  const handleDelete = (productId) => {
    dispatch(setDeleteSaved(productId));
  };
  return (
    <div className="min-h-svh lg:w-[80%] mx-auto">
      <ProductList
        children={savedProducts}
        link={"/save"}
        handlefunction={handleDelete}
        subtitle="Wish List"
      />
    </div>
  );
};

export default SavedProducts;
