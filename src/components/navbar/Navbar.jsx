import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  let { pathname } = useLocation();
  let isLogin = localStorage.getItem("x-auth-token");

  if (pathname.includes("register") || pathname.includes("admin")) {
    return <></>;
  }

  return (
    <header className="header">
      <div className="container header__container">
        <h2>Logo</h2>
        <ul className="header__list">
          <li>
            <NavLink className="header__link" to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="header__link" to={"/users"}>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              className="header__link "
              to={isLogin ? "/admin/create-product" : "/register"}
            >
              {isLogin ? "Account" : "Login"}
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
