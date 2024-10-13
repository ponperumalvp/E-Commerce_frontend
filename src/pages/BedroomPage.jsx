import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../shared/productList/ProductList";
import { saveProduct } from "../Redux/productSlice";

const BedroomPage = () => {
  const { Products } = useSelector((store) => store.product);
  const bedroompage = Products.filter((item) => {
    return item.category === "bedroom" || item.category === "decor";
  });
  const dispatch = useDispatch();
  const handleSavedProduct = (productId) => {
    const userId = sessionStorage.getItem("userId");

    dispatch(saveProduct({ userId: userId, productId: productId }));
  };
  return (
    <div className="lg:w-[80%] mx-auto">
      <ProductList
        children={bedroompage}
        link={"/bedroom"}
        handlefunction={handleSavedProduct}
      />
    </div>
  );
};
export default BedroomPage;
