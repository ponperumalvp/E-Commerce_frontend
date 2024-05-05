import React from "react";
import { products } from "../assets/data/product";
import PageCompenent from "../components/pageComponent/PageCompenent";

const BedroomPage = () => {
  const bedroompage = products.filter((item) => {
    return item.category === "bedroom" || item.category === "decor";
  });
  return (
    <div>
      <PageCompenent children={bedroompage} link={"/bedroom"} />
    </div>
  );
};
export default BedroomPage;
