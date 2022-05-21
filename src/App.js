import "./styles.css";
import { useState } from "react";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Products from "./Components/Products";
import Signin from "./Components/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDescription from "./Components/ProductDescription";

export default function App() {
  // const [loginuser,setLoginuser] = useState("");
  const [loginUser, setLoginUser] = useState("");

  const handleSignin = (value) => {
    setLoginUser(value);
  };

  const handleLogout = () => {
    setLoginUser("");
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation isLogin={loginUser} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home username={loginUser} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDescription />} />
          <Route
            path="/signin"
            element={
              <Signin handleSignin={handleSignin} loginUser={loginUser} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
