import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Home from "./components/Home/Home";
import ProductInfo from "./components/Home/ProductInfo";
 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/product/:id" element={<ProductInfo />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
