import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ResetPassword } from "../../api/AuthApi";

const ResetPasswordComponent = () => {
    const {id} = useParams();
    const Navigate = useNavigate()
    const [password,setPassword] = useState('')
    
    const handleClick = () => {
        ResetPassword(password , id);
        Navigate('/login')
    }

  return (
    <div>
      <div className="main">
        <div className="fp-container">
          <div className="mb-3">
            <h4>reset password</h4>
            <hr />
            <label htmlFor="exampleInputEmail1" className="form-label">
              new password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleClick}>
              submit now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordComponent;
