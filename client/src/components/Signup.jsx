import React from 'react'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const Navigate = useNavigate();
    return (
        <div className='main'>
            <div className='container'>
                <form>
                    <h1>Signup</h1>
                    <hr />
                    <div className='mb-3'>
                        <label htmlFor="exampleInputEmail1" className="form-label">username</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Are you Admin</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button className="btn btn-primary mx-1" onClick={()=>Navigate('/login')}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Signup
