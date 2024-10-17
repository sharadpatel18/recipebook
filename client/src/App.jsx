import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/customer/Home";
import Navbar from "./components/Navbar";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import AdminUser from "./components/admin/admin-User";
import Addrecipe from "./components/admin/Addrecipe";
import Addtocart from "./components/customer/Addtocart";
import Cart from "./components/customer/Cart";
import History from "./components/customer/History";
import MyRecipe from "./components/admin/MyRecipe";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPasswordComponent from "./components/Auth/ResetPassword";

function App() {
  const getLoginData = () => {
    const getData = localStorage.getItem("loginData");
    if (getData) {
      return JSON.parse(getData);
    } else {
      return {};
    }
  };
  const [loginData, setLoginData] = useState(getLoginData());
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {(loginData.isAdmin) ? <Route path="/admin" element={<AdminUser />} /> : ""}
            <Route path="/admin/addrecipe" element={<Addrecipe />} />
            <Route path="/admin/myrecipe" element={<MyRecipe />} />
            <Route path="/addtocart/:id" element={<Addtocart />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/history" element={<History />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/resetpassword/:id" element={<ResetPasswordComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
