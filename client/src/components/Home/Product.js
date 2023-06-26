import React, { useEffect } from "react";
import "./Product.css";
import { message } from "antd";
import { SetLoader } from "../../redux/loaderSlice";
import { GetProducts } from "../../apicalls/products";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Filters from "./Category";
import Divider from "../../MainComponents/Divider";

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
      <div className="  gap-5">
        {showFilters && (
          <Filters
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            filters={filters}
            setFilters={setFilters}
          />
        )}
        <div className="flex flex-row gap-5 w-full">
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
          >
            {products.map((product) => (
              <div
                className="border border-gray-400 rounded border-solid  gap-2 cursor-pointer"
                key={product._id}
                onClick={() => navigate(`/product/${product._id}`)}
              >
                <img
                  src={product.images[0]}
                  alt="product"
                  className="w-full h-40 p-3 rounded-md"
                />
                <Divider />
                <div className="px-3 flex flex-col gap-1">
                  <h2 className="font-semibold pb-2">{product.name}</h2>

                  <h4 className="font-normal pb-1">
                    Condition: {product.condition}
                  </h4>

                  <h3 className="text-green-900 font-normal pb-2">
                    ₹. {product.price}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
