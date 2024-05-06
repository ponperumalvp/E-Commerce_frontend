import React from "react";
import { getItem } from "../shared/localstorage/localStorage";
import { useDispatch } from "react-redux";
import { createProduct } from "../Redux/productSlice";
import { products } from "../assets/data/product";
const CreateProduct = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userOwner = getItem("userId");
    // const firstProduct = {
    //   src: "https://static.wixstatic.com/media/84770f_2ff29ff6663a4d619983458cb0899264.png/v1/fill/w_625,h_625,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/84770f_2ff29ff6663a4d619983458cb0899264.png",
    //   name: "WOOD FLOOR LAMP",
    //   number: "SKU: 0008",
    //   price: 128.0,
    //   category: "decor",
    //   color: "White",
    //   desc: "I'm a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.",
    //   productInfo:
    //     "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
    //   refundPolicy:
    //     "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
    // };
    const fProduct = products.map((item) => dispatch(createProduct(item)));
    console.log(fProduct);
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
