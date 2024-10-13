import React, { useEffect, useState } from "react";
import { GetAllRecipes } from "../../api/RecipeApi";
import { useNavigate } from "react-router-dom";
import RecipeComponent from "../minicomponents/Recipes";

const Home = () => {
  const getloginData = (e) => {
    const data = localStorage.getItem("loginData");
    if (data) {
      return JSON.parse(data);
    } else {
      return {};
    }
  };

  let tested = [];
  const [filterData,setFilterData] = useState([])
  const [loginData, setLoginData] = useState(getloginData());
  const [Recipes, setRecipes] = useState([]);
  const [searchValue , setSearchValue] = useState("")
  const recipedata = [];
  const Navigate = useNavigate();
  
  useEffect(() => {
    const saveData = async () => {
      const data = await GetAllRecipes(loginData.Token);
      setRecipes(data);
      setFilterData(data)
    };
    saveData();
  }, []);
  
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

  const handleSearch = (value) => {
    setSearchValue(value);
    Recipes.forEach((item)=>{
      item.recipekeyword.forEach ((keys)=>{
        if (keys.includes(value)) {
          if (!tested.includes(item)) {
            tested.push(item);
          }else{
            tested = [];
            tested.push(item);
          }
        }
      })

      if (item.recipename.includes(value)) {
        tested.push(item);
      }

    })
    if (value === "") {
      setFilterData(Recipes);
    }else{
      setFilterData(tested);
    }
  }

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
          <input type="search" name="search" placeholder="search recipe" value={searchValue} onChange={(e)=>handleSearch(e.target.value)}/>
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
        {filterData.map((item) => {
          return(
            <RecipeComponent id={item._id} name={item.recipename} image={item.recipeimage} description={item.recipedescription} AddtoCart={AddtoCart}/>
          )
          }
        )}
      </div>
    </div>
  );
};

export default Home;
