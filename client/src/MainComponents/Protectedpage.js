import React, { useEffect, useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../apicalls/users";
import { useDispatch, useSelector } from "react-redux";

import { SetUser } from "../redux/userSlice";

// import Notifications from "./Notifications";
// import { GetAllNotifications } from "../apicalls/notifications";

function ProtectedPage({ children }) {

  const { user } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateToken = async () => {
    try {
      const response = await GetCurrentUser();

      if (response.success) {
        dispatch(SetUser(response.data));
      } else {
        navigate("/login");
        message.error(response.message);
      }
    } catch (error) {
      navigate("/login");
      message.error(error.message);
    }
  };


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      validateToken();
     
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default ProtectedPage;
