import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import * as PI from "react-icons/pi";
import { useDispatch } from "react-redux";
import * as Ai from "react-icons/ai";
import { setIsLogin } from "../../Redux/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setIsLogin(false));
    pathNavigatore("/");
  };
  return (
    <div className="flex items-center md:justify-evenly bg-[#faf6f6de] p-8   shadow-lg sticky top-0 z-20 ">
      <div>
        <Logo />
      </div>
      <div>
        <Nav />
      </div>
      <div className="hidden md:flex">
        <button>
          <PI.PiShoppingCartSimpleFill className="w-12 h-6 text-secondaryClr" />
        </button>
        <button onClick={handleLogout} className="flex items-center p-2 gap-1">
          <span className="tracking-wider text-zinc-400">Logout</span>
          <Ai.AiOutlineLogout className="text-secondaryClr" />
        </button>
      </div>
    </div>
  );
};

export default Header;
