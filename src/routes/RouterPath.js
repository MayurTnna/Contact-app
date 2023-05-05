import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddEdit from "../pages/AddEdit";
import View from "../pages/View";

const RouterPath = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<AddEdit />} />
        <Route path="/update/:id" element={<AddEdit />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </>
  );
};

export default RouterPath;
