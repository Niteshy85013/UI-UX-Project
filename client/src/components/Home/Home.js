import "./Home.css";
import Product from "./Product";
import NavSec from "../Partials/Header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
function Home() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);

  useEffect(() => {
    if (user && user.role === "user") {
      navigate("/");
    } else if (user && user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/login");
    }
  }, [user]);
  return (
    <>
      <NavSec />
      <Product />
    </>
  );
}

export default Home;
