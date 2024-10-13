import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import ProductDeatils from "../pages/ProductDeatils/ProductDetails";
import ProductList from "../shared/productList/ProductList";
import DecorPage from "../pages/DecorPage";
import KitchenPage from "../pages/KitchenPage";
import BedroomPage from "../pages/BedroomPage";
import CreateProduct from "../pages/CreateProduct";
import SavedProducts from "../pages/SavedProducts";
import CartProduct from "../pages/CartProduct";
import CheckoutPage from "../pages/CheckoutPage";

const Routing = () => {
  const { isLogin } = useSelector((store) => store.user);
  console.log(isLogin);
  return (
    <Routes>
      {/* {isLogin ? ( */}
      <Route>
        <Route path="/home">
          <Route index element={<Home />} />
          <Route path=":id" element={<ProductDeatils />} />
        </Route>
        <Route path="/decor">
          <Route index element={<DecorPage />} />
          <Route path=":id" element={<ProductDeatils />} />
        </Route>
        <Route path="/kitchen">
          <Route index element={<KitchenPage />} />
          <Route path=":id" element={<ProductDeatils />} />
        </Route>
        <Route path="/bedroom">
          <Route index element={<BedroomPage />} />
          <Route path=":id" element={<ProductDeatils />} />
        </Route>
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/savedProduct">
          <Route index element={<SavedProducts />} />
          <Route path=":id" element={<ProductDeatils />} />
        </Route>
        <Route path="/cart" element={<CartProduct />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>
      {/* ) : ( */}
      <>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </>
      {/* )} */}
    </Routes>
  );
};

export default Routing;
