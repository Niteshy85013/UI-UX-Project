import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Home from "./components/Home/Home";

import ProtectedPage from "./MainComponents/Protectedpage";
import ProductInfo from "./components/Home/ProductInfo";
import Header from "./components/Partials/Header";
import Admin from "./components/Admin";
import AdminDashboard from "./components/Admin/adminDashboard";
import Profile from "./components/Profile";
import BestSelling from "./components/BestSelling/bestSelling";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bestSelling" element={<BestSelling />} />
          <Route path="/product/:id" element={<ProductInfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route
            path="/profile"
            element={
              <ProtectedPage>
                <Profile />
              </ProtectedPage>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedPage>
                <Admin />
              </ProtectedPage>
            }
          />
          <Route
            path="/adminDashboard"
            element={
              <ProtectedPage>
                <AdminDashboard />
              </ProtectedPage>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
