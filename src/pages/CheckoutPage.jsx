import React from "react";
import Accordion from "../components/accordion/Accordion";
import AddressInput from "../components/AddressInput/AddressInput";
import Button from "../components/button/Button";
import Payment from "../components/Payments/Payment";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const { totalAmount, totalCount, cartProducts } = useSelector(
    (store) => store.product
  );

  return (
    <div className=" container lg:w-[80%] mx-auto min-h-svh md:grid grid-cols-3 p-4 mt-10">
      <div className="md:w-[90%] col-span-2">
        <Accordion
          title="Add your Address"
          answer={<AddressInput />}
          type={true}
        />
        <Accordion title="Payment Method" answer={<Payment />} type={false} />
      </div>

      <div className="container col-span-1 sticky top-[80px] h-[400px]">
        <h1 className="mb-4">Order summary</h1>
        <div className=" border-t-2 border-b-2 flex flex-col gap-4 border-textClr ">
          <div className="flex justify-between">
            <p>Number Of Products</p>
            <p>{totalCount}</p>
          </div>
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>${totalAmount}</p>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <h1> Total </h1>
          <h1>${totalAmount}</h1>
        </div>
        <div className="mt-4">
          {/* <Button className="bg-btClr2 h-10 hover:bg-btHover hover:ease-in-out duration-300 text-white font-medium text-lg">
            Buy Now
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
