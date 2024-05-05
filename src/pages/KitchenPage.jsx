import React from "react";
import { products } from "../assets/data/product";
import PageCompenent from "../components/pageComponent/PageCompenent";

const KitchenPage = () => {
  const kitchenpage = products.filter((item) => {
    return item.product === "kitchen" || item.category === "bedroom";
  });
  return (
    <div>
      <PageCompenent children={kitchenpage} link={"/kitchen"} />
    </div>
  );
};

export default KitchenPage;
