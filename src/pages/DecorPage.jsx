import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../shared/productList/ProductList";
import { saveProduct } from "../Redux/productSlice";

const DecorPage = () => {
  const dispatch = useDispatch();

  const { Products } = useSelector((store) => store.product);
  const decorpage = Products.filter((item) => {
    return item.category === "decor" || item.category === "bedroom";
  });
  const handleSavedProduct = (productId) => {
    const userId = sessionStorage.getItem("userId");

    dispatch(saveProduct({ userId: userId, productId: productId }));
  };
  return (
    <div className="lg:w-[80%] mx-auto">
      <ProductList
        children={decorpage}
        link={"/decor"}
        handlefunction={handleSavedProduct}
      />
    </div>
  );
};

export default DecorPage;
