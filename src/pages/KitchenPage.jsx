import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../shared/productList/ProductList";
import { saveProduct } from "../Redux/productSlice";

const KitchenPage = () => {
  const dispatch = useDispatch();

  const { Products } = useSelector((store) => store.product);
  const kitchenpage = Products.filter((item) => {
    return item.category === "kitchen" || item.category === "bedroom";
  });
  console.log(kitchenpage);
  // const filterPage = (content1, content2) => {
  //   return Products.filter(
  //     (item) => item.category === content1 || item.category === content2
  //   );
  // };
  const handleSavedProduct = (productId) => {
    const userId = sessionStorage.getItem("userId");

    dispatch(saveProduct({ userId: userId, productId: productId }));
  };

  return (
    <div className="lg:w-[80%] mx-auto">
      <ProductList
        children={kitchenpage}
        link={"/kitchen"}
        handlefunction={handleSavedProduct}
      />
    </div>
  );
};

export default KitchenPage;
