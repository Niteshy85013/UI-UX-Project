import React, { useEffect } from "react";
import "./Home.css";
import Product from "./Product";
import Header from "../Partials/Header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);

  useEffect(() => {
    if (user && user.role === "user") {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [user]);
  return (
    <>
      <Header />
      <Product />
    </>
  );
}

export default Home;
