import React, { useEffect , useState} from "react";
import { GetRecipeById } from "../../api/RecipeApi";
import { useParams } from "react-router-dom";

const MyRecipe = () => {
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

  useEffect(() => {
    const saveData = async () => {
      const data = await GetRecipeById(loginData.Token, loginData.id);
      setRecipes(data);
    };
    saveData();
  }, []);

  return (
    <>
      {Recipes.map((item) => {
        return (
          <div key={item._id} className="data">
            <img src={item.recipeimage} alt="err" />
            <h2>{item.recipename}</h2>
            <label htmlFor="dis">{item.recipedescription}</label>
          </div>
        );
      })}
    </>
  );
};

export default MyRecipe;
