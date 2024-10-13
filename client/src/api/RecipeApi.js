import Axios from 'axios'

const instance = Axios.create({
    baseURL: "http://localhost:4000/recipe"
})

const AddRecipe = async (data, jwtToken) => {
    try {
        const responce = await instance.post('/addrecipe', data, {
            headers: {
                "authentication": `${jwtToken}`
            }
        })
        console.log(responce);
        alert("data is saved")
    } catch (error) {
        console.log(error);
    }
}

const GetAllRecipes = async (jwtToken) => {
    try {
        const responce = await instance.get('/getallrecipe', {
            headers: {
                "authentication": `${jwtToken}`
            }
        })
        if (responce) {
            return responce.data;
        }else{
            return []
        }
    } catch (error) {
        console.log(error);
        return []
    }
}


const GetRecipeById = async (Token , id) => {
    try {
        const responce = await instance.get(`/getrecipebyid/${id}`, {
            headers: {
                "authentication": `${Token}`
            }
        })
        return responce.data;
    } catch (error) {
        console.log(error);
    }
}

const AddCart = async (cartData , Token) => {
    try {
        const responce = await instance.post('/addcart', cartData ,{
            headers: {
                "authentication": `${Token}`
            }
        })
        console.log(responce);
        
    } catch (error) {
        console.log(error);
    }
}

const GetCartById = async (Token , id) => {
    try {
        const responce = await instance.get(`/getcartbyid/${id}`, {
            headers: {
                "authentication": `${Token}`
            }
        })
        return responce.data
    } catch (error) {
        console.log(error);
    }
}

const AddHistory = async (Token , data) => {
    try {
        const responce = await instance.post(`/addhistory` , data , {
            headers: {
                "authentication": `${Token}`
            }
        })
        return responce.data;
    } catch (error) {
        console.log(error);
    }
}

const RemoveCart = async (Token , id) => {
    try {
        const responce = await instance.delete(`/deletecart/${id}` , {
            headers: {
                "authentication": `${Token}`
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const GetHistoryById = async (Token , id) => {
    try {
        const responce = await instance.get(`/gethistorybyid/${id}` , {
            headers: {
                "authentication": `${Token}`
            }
        })
        return responce.data;
    } catch (error) {
        console.log(error);
        return []
    }
}

export { AddRecipe, GetAllRecipes, GetRecipeById , AddCart , GetCartById , AddHistory , RemoveCart , GetHistoryById}