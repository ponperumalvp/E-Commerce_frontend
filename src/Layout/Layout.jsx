import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Routing from "../routing/Routing";
import Header from "../components/Header/Header";
import { useNavigate } from "react-router-dom";
import Footers from "../components/Footer/Footers";

const Layout = () => {
  const { isLogin } = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    isLogin ? "" : navigate("/");
  }, [isLogin]);

  return (
    <div>
      {isLogin ? (
        <div>
          <Header />
          <div>
            <Routing />
          </div>
          <Footers />
        </div>
      ) : (
        <div>
          <Routing />
        </div>
      )}
    </div>
  );
};

export default Layout;
