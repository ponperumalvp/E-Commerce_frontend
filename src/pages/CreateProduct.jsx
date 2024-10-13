import React from "react";
import { getItem } from "../shared/localstorage/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, createProduct } from "../Redux/productSlice";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/input/Input";
import Button from "../components/button/Button";

const CreateProduct = () => {
  const { newProduct } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(addProduct({ ...newProduct, [name]: value }));
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newProduct);
    dispatch(createProduct(newProduct));
    navigate("/home");
  };
  return (
    <div className="min-h-screen gap-3 bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-[500px] sticky top-[100px]">
        <h2 className="text-3xl text-center font-semibold font-serif text-secondaryClr">
          INDOOR
        </h2>
        <h2 className="text-2xl font-semibold font-serif text-center text-secondaryClr my-6">
          Create Product
        </h2>
        <form
          onSubmit={handleSubmit}
          className=" h-[300px] overflow-y-auto flex flex-col gap-2 items-center"
        >
          <Input
            onChange={handleChange}
            value={newProduct.name}
            type="text"
            placeholder="ProductName"
            name="name"
            required
          />
          <Input
            onChange={handleChange}
            value={newProduct.number}
            type="number"
            placeholder="ProductNumber"
            name="number"
          />
          <Input
            onChange={handleChange}
            value={newProduct.color}
            type="text"
            placeholder="ProductColor"
            name="color"
          />
          <Input
            onChange={handleChange}
            value={newProduct.category}
            type="text"
            placeholder="ProductCategory"
            name="category"
          />
          <Input
            onChange={handleChange}
            value={newProduct.desc}
            type="text"
            placeholder="ProductDescription"
            name="desc"
          />
          <Input
            onChange={handleChange}
            value={newProduct.productInfo}
            type="text"
            placeholder="ProductInfo"
            name="productInfo"
          />
          <Input
            onChange={handleChange}
            value={newProduct.price}
            type="number"
            placeholder="ProductPrice"
            name="price"
          />
          <Input
            onChange={handleChange}
            value={newProduct.refundPolicy}
            type="text"
            placeholder="ProductRefundPolicy"
            name="refundPolicy"
          />
          <Input
            onChange={handleChange}
            value={newProduct.image}
            type="text"
            name="image"
            placeholder="Image Url Only"
          />

          {/* <div className="w-[90%] flex items-center justify-center mt-8">
            <Button
              className="bg-primaryClr text-white h-8 font-semibold "
              // onclick={handleSubmit}
            >
              Create Your Product
            </Button>
          </div> */}
          <button
            type="submit"
            className="bg-primaryClr text-white h-8 p-1 rounded-md text-center my-8 w-[80%] font-semibold "
          >
            save
          </button>
        </form>
      </div>
    </div>
    // <div className="min-h-screen bg-gray-100 flex justify-center items-center">
    //   <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
    //     <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
    //       Create Product
    //     </h2>
    //     <form onSubmit={handleSubmit} className="space-y-4">
    //       <input
    //         onChange={handleChange}
    //         value={newProduct.name}
    //         type="text"
    //         placeholder="Product Name"
    //         name="name"
    //       />
    //       <input
    //         onChange={handleChange}
    //         value={newProduct.number}
    //         type="number"
    //         placeholder="Product Number"
    //         name="number"
    //       />
    //       <input
    //         onChange={handleChange}
    //         value={newProduct.color}
    //         type="text"
    //         placeholder="Product Color"
    //         name="color"
    //       />
    //       <input
    //         onChange={handleChange}
    //         value={newProduct.category}
    //         type="text"
    //         placeholder="Product Category"
    //         name="category"
    //       />
    //       <input
    //         onChange={handleChange}
    //         value={newProduct.desc}
    //         type="text"
    //         placeholder="Product Description"
    //         name="desc"
    //       />
    //       <input
    //         onChange={handleChange}
    //         value={newProduct.productInfo}
    //         type="text"
    //         placeholder="Product Info"
    //         name="productInfo"
    //       />
    //       <input
    //         onChange={handleChange}
    //         value={newProduct.price}
    //         type="number"
    //         placeholder="Product Price"
    //         name="price"
    //       />
    //       <input
    //         onChange={handleChange}
    //         value={newProduct.refundPolicy}
    //         type="text"
    //         placeholder="Product Refund Policy"
    //         name="refundPolicy"
    //       />
    //       <input
    //         onChange={handleChange}
    //         value={newProduct.image}
    //         type="link"
    //         name="image"
    //         placeholder="Image URL"
    //       />
    //       <div className="flex justify-center">
    //         <Button
    //           type="submit"
    //           className="w-full bg-blue-500 text-white rounded-lg py-2 font-semibold hover:bg-blue-600 transition duration-300"
    //         >
    //           Create Your Product
    //         </Button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
};

export default CreateProduct;
