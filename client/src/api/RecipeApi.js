import Axios from 'axios'

const instance = Axios.create({
    baseURL:"http://localhost:4000/recipe"
})

const AddRecipe = async (data , jwtToken) => {
    try {
        console.log(jwtToken);
        const responce = await instance.post('/addrecipe' , data , {
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
        const responce = await instance.get('/getallrecipe' , {
            headers: {
                "authentication": `${jwtToken}`
            }
        })

        return responce.data;
    } catch (error) {
        console.log(error);
    }
}

export {AddRecipe , GetAllRecipes}