import React, { useEffect, useState } from "react";
import { GetSelectedRecipeById , AddCart } from "../../api/RecipeApi";
import { useParams } from "react-router-dom";
import Atc from "../minicomponents/Atc";

const Addtocart = () => {
  const getloginData = (e) => {
    const data = localStorage.getItem("loginData");
    if (data) {
      return JSON.parse(data);
    } else {
      return {};
    }
  };

  const [loginData, setLoginData] = useState(getloginData());
  const [recipe, setRecipe] = useState({});
  const [person, setPerson] = useState(1);
  const [ingredientsList, setIngredientList] = useState([]);
  const [updatedIngredients, setUpdatedIngredients] = useState([]);
  const [TotalPrice , SetTotalPrice] = useState(0)
  const { id } = useParams();

  useEffect(() => {
    const saveData = async () => {
      const data = await GetSelectedRecipeById(loginData.Token , id);
      if (data !== undefined) {
        setRecipe(data);
        setIngredientList(data.ingredientsList);
        setUpdatedIngredients(data.ingredientsList);
      }
    };
    saveData();
  }, []);

  const handleUpdateValue = (value) => {
    const index = updatedIngredients.findIndex((item) => {
      return item._id === value._id;
    });

    if (index !== -1) {
      setUpdatedIngredients((prev) => {
        let data = [...prev];
        data[index] = value;
        return data;
      });
    }
  };

  useEffect(()=>{  
    let sum = 0
    updatedIngredients.forEach((item)=>{
      console.log(item.ingredientname , item.ingredientprice);
      
      sum += item.ingredientprice
    })
    SetTotalPrice(sum)
  },[updatedIngredients , person])

  const handleSubmit = () => {
    const obj = {
      name: recipe.recipename,
      image: recipe.recipeimage,
      description: recipe.recipedescription,
      person: person,
      Ingredients: updatedIngredients,
      TotalPrice:TotalPrice,
      userId: loginData.id,
    };
    AddCart(obj, loginData.Token);
  };
  return (
    <>
      <div className="atc-main">
        <div className="atc-container">
          <div>
            <h4>Name: </h4>
            <label htmlFor="name">{recipe.recipename}</label>
          </div>
          <div>
            <img src={recipe.recipeimage} alt="err" />
          </div>
          <div>
            <h4>description: </h4>
            <label htmlFor="description">{recipe.recipedescription}</label>
          </div>
          <div>
            <h4>Person: </h4>
            <input
              type="number"
              value={person}
              onChange={(e) => setPerson(e.target.value)}
            />
          </div>
          <hr />
          <div className="list">
            {ingredientsList.map((item) => {
              return (
                <Atc
                  name={item.ingredientName}
                  quentity={item.ingredientquentity}
                  unit={item.ingredientunit}
                  price={item.ingredientprice}
                  PricePerUnit={Math.max(
                    item.ingredientprice / item.ingredientquentity
                  ).toFixed(2)}
                  person={person}
                  handleUpdateValue={handleUpdateValue}
                  id={item._id}
                />
              );
            })}
          </div>
          <div>
            <label htmlFor=""><b>Price: </b></label>
            <label htmlFor="">{TotalPrice}</label>
          </div>
          <div style={{ display: "flex" }}>
            <button className="btn btn-primary mx-2">Buy now</button>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addtocart;
