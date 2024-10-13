import React, { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    const getLoginData = () => {
        const getData = localStorage.getItem('loginData')
        if (getData) {
            return JSON.parse(getData)
        }else{
            return {}
        }
    }
    const [loginData , setLoginData] = useState(getLoginData())
 
    const handleLogout = () => {
        localStorage.setItem("loginData" , JSON.stringify({}))
        window.location.reload()
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {(Object.keys(loginData).length === 0) ? <Link className="navbar-brand" to="/">username</Link> :  <Link className="navbar-brand" to="/">Welcome, {loginData.name}</Link>}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/history">History</Link>
                            </li>
                            <li className="nav-item">
                               {(Object.keys(loginData).length === 0) ?  <Link className="nav-link" to="/signup">Signup</Link> :  <button className='nav-link' onClick={handleLogout}>log out</button>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Navbar
