import React, { useEffect } from "react";
import "./Product.css";
import { message } from "antd";
import { SetLoader } from "../../redux/loaderSlice";
import { GetProducts } from "../../apicalls/products";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Filters from "./Category";
import Divider from "../../MainComponents/Divider";
import Banner from "./Banner";

function Product() {
  const [showFilters, setShowFilters] = React.useState(true);
  const [products, setProducts] = React.useState([]);

  const [filters, setFilters] = React.useState({
    status: "approved",
    category: [],
  });
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(SetLoader(true));
      const response = await GetProducts(filters);
      dispatch(SetLoader(false));
      if (response.success) {
        setProducts(response.data);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  // Uncomment the following block if you want to navigate based on the user's role
  // useEffect(() => {
  //   if (user.role === "admin") {
  //     navigate("/admin");
  //   } else {
  //     navigate("/");
  //   }
  // }, [user.role, navigate]);

  useEffect(() => {
    getData();
  }, [filters]);

  return (
    <section className="product ">
      <div className="gap-5">
        {showFilters && (
          <Filters
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            filters={filters}
            setFilters={setFilters}
          />
        )}
        <div className="flex flex-col gap-5  sticky top-0">
          <div className="flex gap-5 items-center">
            {!showFilters && (
              <i
                className="ri-equalizer-line text-xl cursor-pointer"
                onClick={() => setShowFilters(!showFilters)}
              ></i>
            )}
          </div>
          <div
            className={`grid gap-5 ${
              showFilters ? "grid-cols-4" : "grid-cols-5"
            }`}
          ></div>
        </div>
      </div>
      <Banner />
      <div className="container my-4 p-3">
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-5 g-3">
          {products.map((product) => (
            <div className="col" key={product._id}>
              <div
                className="card card-shadows"
                onClick={() => navigate(`/product/${product._id}`)}
              >
                <img
                  src={product.images[0]}
                  style={{ height: "10rem" }}
                  className="card-img-top"
                  alt=""
                />

                <div className="label-top shadow-sm">
                  <a className="text-white" href="/">
                    {product.category}
                  </a>
                </div>

                <h3 className="flex ms-1">{product.name}</h3>

                <p className=" flex ms-1">{product.condition}</p>

                <div className="clearfix mb-2 ms-2">
                  <span className="float-start badge rounded-pill bg-success">
                    ₹ {product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product;
