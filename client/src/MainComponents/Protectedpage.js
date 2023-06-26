import React, { useEffect, useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../apicalls/users";
import { useDispatch, useSelector } from "react-redux";
import { SetLoader } from "../redux/loaderSlice";
import { SetUser } from "../redux/usersSlice";
import "./Header.css";
// import Notifications from "./Notifications";
// import { GetAllNotifications } from "../apicalls/notifications";

function ProtectedPage({ children }) {
  // const [notifications, setNotifications] = useState([]);
  // const [showNotifications, setShowNotifications] = useState(false);
  const { user } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateToken = async () => {
    try {
      dispatch(SetLoader(true));
      const response = await GetCurrentUser();
      dispatch(SetLoader(false));
      if (response.success) {
        dispatch(SetUser(response.data));
      } else {
        navigate("/login");
        message.error(response.message);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      navigate("/login");
      message.error(error.message);
    }
  };

  // const getNotifications = async () => {
  //   try {
  //     dispatch(SetLoader(true));
  //     const response = await GetAllNotifications();
  //     dispatch(SetLoader(false));
  //     if (response.success) {
  //       setNotifications(response.data);
  //     } else {
  //       throw new Error(response.message);
  //     }
  //   } catch (error) {
  //     dispatch(SetLoader(false));
  //     message.error(error.message);
  //   }
  // };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      validateToken();
      // getNotifications();
    } else {
      navigate("/login");
    }
  }, []);

  if (!user) {
    return null; // Return null or a loading spinner if user data is not available yet
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleProfileClick = () => {
    if (user.role === "user") {
      navigate("/profile");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center bg p-5">
        <h1
          className="text-2xl text-black cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          MarketHub
        </h1>

        <div className="bg-white py-2 px-5 rounded flex gap-1 items-center">
          <span
            className="underline cursor-pointer uppercase"
            onClick={handleProfileClick}
          >
            {user.name}
          </span>

          {/* Notification work */}
          {/* <Badge
            count={
              notifications.filter((notification) => !notification.read).length
            }
            onClick={() => setShowNotifications(true)}
            className="cursor-pointer"
          >
            <Avatar
              shape="circle"
              icon={<i className="ri-notification-3-line"></i>}
            />
          </Badge> */}
          <i className="ri-logout-box-r-line ml-10" onClick={handleLogout}></i>
        </div>
      </div>

      <div className="p-5">{children}</div>

      {/* <Notifications
        notifications={notifications}
        reloadNotifications={setNotifications}
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
      /> */}
    </div>
  );
}

export default ProtectedPage;
