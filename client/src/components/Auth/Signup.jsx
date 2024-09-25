import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignupApi } from '../../api/AuthApi';
const Signup = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isAdmin,setIsAdmin] = useState(false)

    const Navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        SignupApi(name,email,password,isAdmin)
    }
    return (
        <div className='main'>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <h1>Signup</h1>
                    <hr />
                    <div className='mb-3'>
                        <label htmlFor="exampleInputEmail1" className="form-label">username</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className="mb-3 form-check">
                        <label className="form-check-label" htmlFor="exampleCheck1">Are you Admin</label>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" value={isAdmin} onChange={()=>setIsAdmin(!isAdmin)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button className="btn btn-primary mx-1" onClick={()=>Navigate('/login')}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Signup
