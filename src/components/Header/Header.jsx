import React from "react";
import * as PI from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import * as Ai from "react-icons/ai";
import { setIsLogin } from "../../Redux/userSlice";
import { Link, useLocation } from "react-router-dom";
import * as Io from "react-icons/io";
import * as Io5 from "react-icons/io5";

import { Navbar } from "flowbite-react";
import Button from "../button/Button";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log("location", location);
  const handleLogout = () => {
    dispatch(setIsLogin(false));
    pathNavigatore("/");
  };
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
      path: "/createProduct",
      name: "Create",
    },
    {
      path: "/checkout",
      name: "Check Out",
    },
    {
      path: "/savedProduct",
      name: <Io.IoMdHeart className="w-6 h-6 text-red-400" />,
    },
  ];
  const { totalCount } = useSelector((store) => store.product);
  console.log("header totalcount", totalCount);

  return (
    // <Navbar
    //   fluid
    //   rounded
    //   className="bg-[#faf6f6de] p-8 shadow-lg sticky top-0 z-20"
    // >
    //   <Navbar.Brand as={Link}>
    //     <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
    //       INDOOR
    //     </span>
    //   </Navbar.Brand>
    //   <Navbar.Toggle />
    //   <Navbar.Collapse>
    //     {nav.map((item, idx) => {
    //       return (
    //         <Navbar.Link
    //           as={Link}
    //           key={idx}
    //           to={item.path}
    //           className={`p-3 hover:text-red-400 ${
    //             location.pathname === item.path ? "text-orange" : ""
    //           }`}
    //         >
    //           {item.name}
    //         </Navbar.Link>
    //       );
    //     })}
    //     <Navbar.Link as={Link} to="/cart">
    //       <button>
    //         <PI.PiShoppingCartSimpleFill className="w-6 h-6 text-secondaryClr relative" />
    //       </button>
    //       <div className="absolute top-9 w-5 ml-2 text-bgClr font-light text-xs">
    //         {totalCount}
    //       </div>
    //     </Navbar.Link>
    //     <Navbar.Link as={Link} className="">
    //       <button onClick={handleLogout}>
    //         {/* <span className="tracking-wider text-white">Logout</span> */}
    //         <Io5.IoLogOut className="text-secondaryClr w-6 h-6" />
    //       </button>
    //     </Navbar.Link>
    //   </Navbar.Collapse>
    // </Navbar>
    <Navbar
      fluid
      rounded
      className="bg-[#faf6f6de] p-8 shadow-lg sticky top-0 z-20"
    >
      <Navbar.Brand as={Link} to="/home">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          INDOOR
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {nav.map((item, idx) => (
          <Navbar.Link
            as={Link}
            key={idx}
            to={item.path}
            className={`p-3 ${
              location.pathname === item.path ? "text-red-500" : ""
            }`}
          >
            {item.name}
          </Navbar.Link>
        ))}
        <Navbar.Link
          as={Link}
          to="/cart"
          className={`p-3 hover:text-secondaryClr ${
            location.pathname === "/cart" ? "text-red-500" : ""
          }`}
        >
          <button>
            <PI.PiShoppingCartSimpleFill className="w-8 h-7 text-secondaryClr relative" />
          </button>
          <div className="absolute  top-9 ml-3 text-bgClr font-normal text-xs">
            {totalCount}
          </div>
        </Navbar.Link>
        <Navbar.Link as={Link} className="">
          <button onClick={handleLogout}>
            <Io5.IoLogOut className="text-secondaryClr w-6 h-6" />
          </button>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
