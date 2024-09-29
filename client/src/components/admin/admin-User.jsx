import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetAllRecipes } from '../../api/RecipeApi'
const AdminUser = () => {
    const getloginData = (e) => {
        const data = localStorage.getItem("loginData")
        if (data) {
            return JSON.parse(data)
        } else {
            return {}
        }
    }
    const [loginData, setLoginData] = useState(getloginData())
    const Navigate = useNavigate();
    const [Recipes , setRecipes] = useState([]);
    useEffect(()=>{
        const saveData = async () => {
            const data = await GetAllRecipes(loginData.Token);
            setRecipes(data);
        }
        saveData();
    },[])
    console.log(Recipes);
  return (
    <div className='admin-main'>
        <div className='admin-navbar'>
            <div></div>
            <div>
                <h2>Recipe</h2>
            </div>
            <div>
                <button onClick={()=>Navigate("/admin/addrecipe")}>Add recipe</button>
                <button>Recipe-List</button>
            </div>
        </div>
        <div className='recipe-data'>
                {
                    Recipes.map((item)=>(
                        <div key={item._id} className='data'>
                            <img src={item.recipeimage} alt="err" />
                            <h2>{item.recipename}</h2>
                            <label htmlFor="dis">{item.recipedescription}</label>
                            <label htmlFor="user">user</label>
                            <button className='btn btn-primary'>details</button>
                        </div>
                    ))
                }
        </div>
    </div>
  )
}

export default AdminUser
