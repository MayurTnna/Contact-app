import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/scss/header.scss";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/home") {
      setActiveTab("Home");
    } else if (location.pathname === "/add") {
      setActiveTab("AddContact");
    }
    if (location.pathname === "/about") {
      setActiveTab("About");
    }
  }, [location]);
  return (
    <>
      <div className="header">
        <Link to="/home">
          <p className="logo">Contact me</p>
        </Link>
        <div className="header-right">
          <Link to="/home">
            <p
              className={`${activeTab === "Home" ? "active" : " "}`}
              onClick={() => setActiveTab("Home")}
            >
              Home
            </p>
          </Link>
          <Link to="/add">
            <p
              className={`${activeTab === "AddContact" ? "active" : " "}`}
              onClick={() => setActiveTab("AddContact ")}
            >
              Add Contact
            </p>
          </Link>
          <Link to="/view">
            <p
              className={`${activeTab === "view" ? "active" : " "}`}
              onClick={() => setActiveTab("view")}
            >
              view
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
