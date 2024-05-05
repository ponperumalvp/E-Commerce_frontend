import React from "react";
import { NavLink } from "react-router-dom";
import { pathNavigatore } from "../../shared/pathnavigatore/pathNavigatore";
import { useDispatch } from "react-redux";
import { setIsLogin } from "../../Redux/userSlice";

const Nav = () => {
  const nav = [
    {
      path: "/home",
      name: "Home",
    },
    {
      path: "/decor",
      name: "Decor",
    },
    {
      path: "/kitchen",
      name: "Kitchen",
    },
    {
      path: "/bedroom",
      name: "Bedroom",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  return (
    <div className="">
      <div className="hidden md:flex justify-between gap-4 tracking-wider text-zinc-400 ">
        {nav.map((item, idx) => {
          return (
            <NavLink
              key={idx}
              to={item.path}
              className="p-3 hover:text-secondaryClr active:text-secondaryClr "
            >
              {item.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
