import React, { useEffect, useState } from 'react'
import { json, useNavigate } from 'react-router-dom'
import { LoginApi } from '../../api/AuthApi';
const Login = () => {
    const getLoginData = () => {
        const getData = localStorage.getItem('loginData')
        if (getData) {
            return JSON.parse(getData)
        }else{
            return {}
        }
    }

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loginData , setLoginData] = useState(getLoginData())
    const Navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const saveLoginData = async () => {
            const data = await LoginApi(email,password)
            setLoginData(data)            
        }
        saveLoginData()
    }

    useEffect(()=>{
        localStorage.setItem('loginData' , JSON.stringify(loginData))
    },[loginData])

  return (
    <div>
         <div className='main'>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <hr />
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button className="btn btn-primary mx-1" onClick={()=>Navigate('/signup')}>create account</button>
                    <button className="btn btn-danger" onClick={()=>Navigate('/forgotpassword')}>Forgot Password</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
