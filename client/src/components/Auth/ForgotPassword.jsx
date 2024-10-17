import React, { useState } from 'react'
import { ForgetPassword } from '../../api/AuthApi'

const ForgotPassword = () => {
    const [email , setEmail] = useState('')
    const handleSubmit = () => {
        ForgetPassword(email)
    }
  return (
    <div className='main'>
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <hr />
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <button className='btn btn-primary'>send a main</button>
            </div>
        </form>
    </div>
</div>
  )
}

export default ForgotPassword