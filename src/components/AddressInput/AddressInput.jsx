import React from "react";
import Input from "../input/Input";
import Button from "../button/Button";

const AddressInput = () => {
  return (
    <div className="md:w-[90%] mt-4 border border-btHover rounded-md">
      <form /* onSubmit={handleSubmit} */>
        <div className=" h-[300px] overflow-y-auto flex flex-col">
          <Input
            // onChange={handleChange}
            // value={newProduct.name}
            type="text"
            placeholder="Name"
            name="name"
          />
          <Input
            // onChange={handleChange}
            // value={newProduct.number}
            type="number"
            placeholder="PhoneNumber"
            name="number"
          />
          <Input
            // onChange={handleChange}
            // value={newProduct.color}
            type="text"
            placeholder="Door No"
            name="color"
          />
          <Input
            // onChange={handleChange}
            // value={newProduct.category}
            type="text"
            placeholder="Street"
            name="category"
          />
          <Input
            // onChange={handleChange}
            // value={newProduct.desc}
            type="text"
            placeholder="Village"
            name="desc"
          />
          <Input
            // onChange={handleChange}
            // value={newProduct.productInfo}
            type="text"
            placeholder="district"
            name="productInfo"
          />
          <Input
            // onChange={handleChange}
            // value={newProduct.price}
            type="number"
            placeholder="pincode"
            name="price"
          />
          <Input
            // onChange={handleChange}
            // value={newProduct.refundPolicy}
            type="text"
            placeholder="Near Famous Place"
            name="refundPolicy"
          />
          {/* <Input
            // onChange={handleChange}
            // value={newProduct.image}
            type="text"
            name="image"
            placeholder="Image Url Only"
          /> */}
        </div>
        <div className="w-[90%] flex items-center justify-center mt-8">
          {/* <Button
            className="bg-primaryClr text-white h-8 font-semibold "
            // onclick={handleSubmit}
          >
            Create Your Product
          </Button> */}
        </div>
      </form>
    </div>
  );
};

export default AddressInput;
