import React, { useEffect, useState } from "react";
import { GetAllRecipes, GetRecipeById } from "../../api/RecipeApi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const getloginData = (e) => {
    const data = localStorage.getItem("loginData");
    if (data) {
      return JSON.parse(data);
    } else {
      return {};
    }
  };

  const [loginData, setLoginData] = useState(getloginData());
  const [Recipes, setRecipes] = useState([]);
  const recipedata = [];
  const Navigate = useNavigate();

  useEffect(() => {
    const saveData = async () => {
      const data = await GetAllRecipes(loginData.Token);
      setRecipes(data);
    };
    saveData();
  }, []);
  
  console.log(Recipes);
  Recipes.forEach((item) => {
    item.recipekeyword.forEach((keys) => {
      if (!recipedata.includes(keys)) {
        recipedata.push(keys);
      }
    });
  });

  const AddtoCart = (id) => {
    Navigate(`/addtocart/${id}`);
  };

  console.log(recipedata);
  return (
    <div className="home-main">
      <div className="home-details">
        <h1>Welcome user to Our Recipe App</h1>
        <label htmlFor="tag">
          Discover, create , and share recipes with ease.
        </label>
      </div>
      <div className="home-searchbar">
        <div>
          <input type="search" name="search" placeholder="search recipe" />
          <select name="recipe">
            {recipedata.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div>
          <button onClick={()=>Navigate('/cart')}>cart</button>
        </div>
      </div>
      <div className="home-recipe">
        {Recipes.map((item) => (
          <div key={item._id} className="data">
            <img src={item.recipeimage} alt="err" />
            <h2>{item.recipename}</h2>
            <label htmlFor="dis">{item.recipedescription}</label>
            <label htmlFor="user">user</label>
            <button
              className="btn btn-primary"
              onClick={() => AddtoCart(item._id)}
            >
              add to cart
            </button>
            <button className="btn btn-primary my-2">buy now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
