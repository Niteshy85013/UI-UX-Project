import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SetLoader } from "../../redux/loaderSlice";
import Divider from "../../MainComponents/Divider";
import { message } from "antd";
import { GetAllBids, GetProductById } from "../../apicalls/products";
import { useParams } from "react-router-dom";
import moment from "moment";
import BidModal from "./BidModal";

function ProductInfo() {
  const [showAddNewBid, setShowAddNewBid] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [product, setProduct] = useState(null);

  const { id } = useParams();
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(SetLoader(true));
      const response = await GetProductById(id);
      dispatch(SetLoader(false));

      if (response.success) {
        const bidsResponse = await GetAllBids({ product: id });
        setProduct({
          ...response.data,
          bids: bidsResponse.data,
        });
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  // const handleToggleBidModal = () => {
  //   setShowAddNewBid((prevShowAddNewBid) => !prevShowAddNewBid);
  // };

  if (!product) {
    // Render a loading spinner or placeholder while the product data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        {/* Image Section */}
        <div className="flex flex-col gap-2">
          <img
            src={product.images[selectedImageIndex]}
            alt=""
            className="w-full h-96 object-cover rounded-md"
          />
          <div className="flex gap-5">
            {product.images.map((image, index) => (
              <img
                key={index}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer ${
                  selectedImageIndex === index
                    ? "border-2 border-red-700 border-dashed p-2"
                    : ""
                }`}
                onClick={() => handleImageClick(index)}
                src={image}
                alt=""
              />
            ))}
          </div>
          {/* Product Add time section */}
          <Divider />
          <div className="flex flex-col">
            <h3 className="text-gray-600">Added On</h3>
            <span className="text-gray-600">
              {moment(product.createdAt).format("MMM D, YYYY hh:mm A")}
            </span>
          </div>
        </div>

        {/* product Details */}
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-2xl font-semibold text-orange-900 pb-3">
              {product.name}
            </h1>
            <span>{product.description}</span>
          </div>
          <Divider />

          {/* Product All Details */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold text-orange-900 pb-1">
              Product Details
            </h1>
            <div className="flex justify-between mt-2">
              <span>Price</span>
              <span>₹ {product.price}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Category</span>
              <span className="uppercase">{product.category}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Condition</span>
              <span className="uppercase font-semibold">
                {product.condition}
              </span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Bill Available</span>
              <span>{product.billAvailable ? "Yes" : "No"}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Box Available</span>
              <span>{product.boxAvailable ? "Yes" : "No"}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Warranty Available</span>
              <span>{product.warrantyAvailable ? "Yes" : "No"}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Accessories Available</span>
              <span>{product.accessoriesAvailable ? "Yes" : "No"}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Negotiable</span>
              <span>{product.negotiable ? "Yes" : "No"}</span>
            </div>
          </div>
          <Divider />

          {/* Seller Details */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold text-orange-900 pb-3">
              Seller Details
            </h1>
            <div className="flex justify-between mt-2">
              <span>Full Name</span>
              <span className="uppercase">{product.seller.name}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Email</span>
              <span>{product.seller.email}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Contact</span>
              <span>{product.seller.phone}</span>
            </div>
          </div>
          <Divider />
          <div className="flex flex-col mt-3 mb-2">
            <div className="flex justify-between">
              <h1 className="text-2xl font-semibold text-orange-900">Bids</h1>
              {/* <Button
                onClick={handleToggleBidModal}
                disabled={user._id === product.seller._id}
              >
                Bid Now
              </Button> */}
            </div>
          </div>
        </div>

        {/* Bid Section */}
      </div>

      {showAddNewBid && (
        <BidModal
          product={product}
          reloadData={getData}
          showBidModal={showAddNewBid}
          setShowBidModal={setShowAddNewBid}
        />
      )}
    </div>
  );
}

export default ProductInfo;
