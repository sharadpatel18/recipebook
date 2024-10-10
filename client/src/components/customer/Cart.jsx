import React, { useEffect, useState } from "react";
import { GetCartById } from "../../api/RecipeApi";
const Cart = () => {
  const getloginData = (e) => {
    const data = localStorage.getItem("loginData");
    if (data) {
      return JSON.parse(data);
    } else {
      return {};
    }
  };

  const [loginData, setLoginData] = useState(getloginData());
  const [CartData, setCartData] = useState([]);
  useEffect(() => {
    const saveData = async () => {
      const data = await GetCartById(loginData.Token, loginData.id);
      setCartData(data);
    };
    saveData();
  }, []);
  console.log(CartData);

  return (
    <div className="cart-main">
      <div className="cart-container">
        {CartData.map((item) => (
          <div className="cart">
            <div className="first">
              <img src={item.image} alt="" />
            </div>
            <div className="second">
              <h1>{item.name}</h1>
              <p>{item.description}</p>
            </div>
            <div className="third">
              <label htmlFor="">total price:{item.TotalPrice}</label>
            </div>
            <div className="fourth">
              <button className="btn btn-primary">Buy Now</button>
              <button className="btn btn-danger">cancel</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
