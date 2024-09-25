import Axios from'axios'

const instance = Axios.create({
    baseURL:"http://localhost:4000/auth"
})

const SignupApi = async (name,email,password,isAdmin) => {
    try {
        const responce = await instance.post("/signup" , {name,email,password,isAdmin})
        return responce;
    } catch (error) {
        console.log(error);
    }
}

const LoginApi = async (email,password) => {
    try {
        const responce = await instance.post("/login" , {email,password})
        return responce.data;
    } catch (error) {
        console.log(error);
    }
}

export {SignupApi , LoginApi}