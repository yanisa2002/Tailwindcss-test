import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Notification from "./pages/Notification";
// import Register from "./pages/register";
import FormSignup from "./pages/testRegis";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resizeedddd");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/register" element={<FormSignup />} />
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/register" element={<Noti />} /> */}
      </Routes>
    </>
  );
}

export default App;
