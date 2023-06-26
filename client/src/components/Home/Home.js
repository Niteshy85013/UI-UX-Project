import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <>
      <div className="container contback mt-5 rounded ">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mt-3 text-light">Multi-vendor Ecommerce Platform</h2>
            <h3 className="text-warning mt-2">
              Buy and Sell your products without any charges
            </h3>
          </div>
          <div className="col-md-6">
            <img
              src="./images/multi-vendor.png"
              style={{ width: "20rem" }}
              alt=""
            />
          </div>
        </div>
      </div>
      <Product />
    </>
  );
};

export default Home;
