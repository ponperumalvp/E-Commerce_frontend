import React from "react";
import { products } from "../assets/data/product";
import PageCompenent from "../components/pageComponent/PageCompenent";

const DecorPage = () => {
  const decorpage = products.filter((item) => {
    return item.category === "decor" || item.category === "bedroom";
  });
  return (
    <div>
      <PageCompenent children={decorpage} link={"/decor"} />
    </div>
  );
};

export default DecorPage;
