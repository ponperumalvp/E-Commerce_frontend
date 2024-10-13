import React, { useState } from "react";
import Motal from "../Motal/Motal";
import { useDispatch, useSelector } from "react-redux";
import { createUser, setIsLogin, setUser } from "../Redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/input/Input";
import Button from "../components/button/Button";

const Register = () => {
  const { newUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setUser({ ...newUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetails = {
      userName: newUser.name,
      email: newUser.email,
      password: newUser.password,
    };
    console.log(userDetails);
    const res = await dispatch(createUser(userDetails));
    console.log("register", res);
    (await res.payload) === "verified"
      ? dispatch(setIsLogin(true)) && history("/home")
      : dispatch(setIsLogin(false));
  };

  return (
    <div className="bg-bgClr mx-auto h-svh flex justify-center items-center">
      <form
        className=" border w-[90%] md:w-[40%] lg:w-[25%] p-2 h-3/4 md:h-4/5 flex  flex-col rounded-[3rem] items-center justify-center shadow-2xl bg-bgClr  gap-3"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-semibold mt-4 text-secondaryClr">
          INDOOR
        </h2>
        <Input
          placeholder="Name"
          name="name"
          value={newUser.name}
          type="text"
          required
          onChange={handleChange}
        />

        <Input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={newUser.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          required
          value={newUser.password}
          onChange={handleChange}
        />
        <div className="w-[90%] flex items-center justify-center mt-10">
          <Button
            className="bg-primaryClr text-white h-8"
            onclick={handleSubmit}
          >
            Register
          </Button>
        </div>
        <div className="flex mt-4 items-center justify-center">
          <div className="border-[1px] border-zinc-400 w-[30%] h-[1px]"></div>
          <p className="text-center text-textClr  ">Already Have Account</p>
          <div className="border-[1px] border-zinc-400 w-[30%] h-[1px]"></div>
        </div>

        <div className="w-[40%] flex justify-center mt-2">
          <Button className="bg-primaryClr text-white h-8" link="/login">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
