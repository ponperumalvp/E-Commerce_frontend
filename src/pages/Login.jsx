import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setIsLogin, verifyUser, setuser } from "../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import Input from "../components/input/Input";
import Button from "../components/button/Button";

const Login = () => {
  const { newUser, user, isLogin } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const history = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      setUser({
        ...newUser,
        [name]: value,
      })
    );
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const newUserDetails = {
        email: newUser.email,
        password: newUser.password,
      };
      console.log(newUserDetails);
      const resp = await dispatch(verifyUser(newUserDetails));
      console.log("verifyuser", resp);
      // dispatch(setuser([...resp.payload.data.userId, resp.payload.data.token]));
      resp.payload.data.message === "login successful"
        ? (await dispatch(setIsLogin(true))) && history("/home")
        : await dispatch(setIsLogin(false));
      console.log(isLogin);
    } catch (err) {
      console.log("login err:", err);
      alert("invalid user");
    }
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
        <div className="w-[85%] flex items-center justify-center mt-10">
          <Button
            className="bg-primaryClr  text-white h-8"
            onclick={handleSubmit}
          >
            Sign In
          </Button>
        </div>
        <div className="flex mt-4 items-center justify-center">
          <div className="border-[1px] border-zinc-400 w-[30%] h-[1px]"></div>
          <p className="text-center text-textClr  ">Already Have Account</p>
          <div className="border-[1px] border-zinc-400 w-[30%] h-[1px]"></div>
        </div>

        <div className="w-[40%] flex justify-center mt-2">
          <Button className="bg-primaryClr text-white h-8" link="/">
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
