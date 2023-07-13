import React from "react";
import { useSelector } from "react-redux";
function ProfileInfo() {
  const { user } = useSelector((state) => state.users);
  return (
    <>
      <div className="container border border-dark rounded">
        <div className="row">
          <div className="col-md-8">
            <h1>
              Hi, <span className="text-danger">{user.name}</span>
            </h1>

            <h3 className="mt-2 text-success mb-2">
              {" "}
              Here are your Profile details...{" "}
            </h3>
            <h4>Email: {user.email}</h4>
            <h4>Address: {user.address}</h4>
            <h4>Phone: {user.phone}</h4>
            <p className="fs-3 mt-2"> Customize your profile page Here</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://www.pngmart.com/files/22/User-Avatar-Profile-PNG.png"
              style={{ width: "20rem", height: "20rem" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileInfo;
