import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartProduct,
  getCartProduct,
  setCount,
  setTotalAmount,
  setTotalCount,
} from "../Redux/productSlice";
import Button from "../components/button/Button";
import * as Ti from "react-icons/ti";
import { Link } from "react-router-dom";

const CartProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = () => {
      console.log("cart product");
      dispatch(getCartProduct());
    };
    getData();
  }, [dispatch]);
  const { cartProducts, totalAmount, totalCount } = useSelector(
    (store) => store.product
  );
  console.log(cartProducts);
  const totalCounts = cartProducts.reduce((acc, item) => acc + item.count, 0);
  dispatch(setTotalCount(totalCounts));
  console.log(totalCount);
  const totalAmounts = cartProducts.reduce(
    (acc, item) => acc + item.count * item.price,
    0
  );
  dispatch(setTotalAmount(totalAmounts));

  console.log(totalAmount);
  const handleDelete = (productId) => {
    dispatch(deleteCartProduct(productId));
  };
  const handleChange = (e, productId) => {
    const newCount = parseInt(e.target.value);
    dispatch(setCount({ productId, count: newCount }));
  };
  return (
    <div className="min-h-svh  lg:w-[70%] mx-auto  text-textClr  ">
      <h1 className="mb-2">My Cart</h1>
      {cartProducts.length ? (
        <div className="md:grid grid-cols-3 gap-6">
          <div className=" col-span-2">
            {cartProducts?.map((item) => (
              <div className="flex flex-col gap-4  lg:min-w-[40%] relative">
                <div className=" absolute top-2 right-0">
                  <Button onclick={() => handleDelete(item._id)}>
                    <Ti.TiDelete className="w-8 h-8" />
                  </Button>
                </div>
                <div className="md:h-[200px] w-full flex gap-10 border-t-2 border-b-2 md:justify-between items-center  ">
                  <div>
                    <img
                      src={item.image}
                      alt=""
                      className="min-w-[150px] h-[150px] "
                    />
                  </div>
                  <div className=" flex gap-10">
                    <div className="flex flex-col gap-4 ">
                      <p>{item.name}</p>
                      <div>${item.price}</div>
                    </div>
                    <div className="flex flex-col gap-5 items-center">
                      <input
                        type="number"
                        value={item.count}
                        onChange={(e) => handleChange(e, item._id)}
                        className="w-16"
                      />
                      <div>${item.count * item.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="container lg:min-w-[40%] col-span-1 sticky top-[100px] h-[300px]">
            <h1 className="mb-4">Order summary</h1>
            <div className=" border-t-2 border-b-2 flex flex-col gap-4 border-textClr ">
              <div className="flex justify-between">
                <p>Number Of Products</p>
                <p>{totalCounts}</p>
              </div>
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>${totalAmounts}</p>
              </div>
            </div>
            <div className="flex justify-between mt-10">
              <h1> Total </h1>
              <h1>${totalAmounts}</h1>
            </div>
            <div className="mt-4">
              <Button
                className="bg-btClr2 h-10 hover:bg-btHover hover:ease-in-out duration-300 text-white font-medium text-lg"
                link="/checkout"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-20">
          <h1>Cart Is Empty</h1>
        </div>
      )}
    </div>
  );
};

export default CartProduct;
