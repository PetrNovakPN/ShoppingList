import React from "react";
import { Outlet, Link } from "react-router-dom";
import Login from "./Login";
import "./Style.css";

export default function Layout({ SetLoggedInUser }) {
  function LoggedInUser(user) {
    SetLoggedInUser(user);
  }
  return (
    <>
      <div className="layout">
        {" "}
        {/* Apply the "layout" class */}
        <nav className="nav">
          <ul className="nav-ul">
            <li className="nav-li">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
        </nav>
        <div className="login-container">
          {" "}
          {/* Apply the "login-container" class */}
          <Login LoggedInUser={LoggedInUser} />
        </div>
      </div>
      <Outlet />
    </>
  );
}
