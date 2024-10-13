import React, { useEffect, useState } from "react";
import { GetHistoryById } from "../../api/RecipeApi";

const History = () => {
  const getloginData = (e) => {
    const data = localStorage.getItem("loginData");
    if (data) {
      return JSON.parse(data);
    } else {
      return {};
    }
  };

  const [loginData, setLoginData] = useState(getloginData());
  const [HistoryData, setHistoryData] = useState([]);

  useEffect(() => {
    const saveData = async () => {
        const data = await GetHistoryById(loginData.Token , loginData.id)
        setHistoryData(data)
    }
    saveData()
  }, []);
  return (
    <>
      <div className="cart-main">
        <div className="cart-container">
          {HistoryData.map((item) => (
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default History;
