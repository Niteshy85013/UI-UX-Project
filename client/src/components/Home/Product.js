import React, { useEffect } from "react";
import "./Product.css";
import { message } from "antd";
import { SetLoader } from "../../redux/loaderSlice";
import { GetProducts } from "../../apicalls/products";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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

  // if (user.role === "admin") {
  //   navigate("/admin");
  // } else {
  //   navigate("/");
  // }

  useEffect(() => {
    getData();
  }, [filters]);

  return (
    <section id="product">
      <div className="container my-4 p-3">
        <h1 className="text-danger">Products</h1>
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-5 g-3">
          {products.map((product) => (
            <div className="col">
              <div
                className="card card-shadows"
                key={product._id}
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

                <h2>{product.name}</h2>

                <p className="fs-5">{product.condition}</p>

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
