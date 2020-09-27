import React, { useContext, useEffect, useState } from "react"
import authService from "../service/auth.service"
import { Link } from "react-router-dom"
function Head(props) {
    return (
    <div className="mb-3" >
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to="/" >AuthenTest</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                   
                    {props.isLogin ? (
                        <div>
                        <li style={{display:"inline-block"}} className="nav-item active">
                            <Link className="nav-link" to={`/${props.currentUser.role.toLowerCase()}`}>{`${props.currentUser.role} Page`}</Link>
                        </li>
                        <li style={{display:"inline-block"}} className="nav-item active">
                            <Link className="nav-link" to="/home">{props.currentUser.username}</Link>
                        </li>
                        <li style={{display:"inline-block"}} className="nav-item active">
                            <Link onClick={()=> {
                                authService.Logout();
                                props.setIsLogin(false)
                            }
                                } className="nav-link" to="/">Logout</Link>
                        </li>
                        </div>
                    ) :  
                    (
                        <div>
                        <li style={{display:"inline-block"}} className="nav-item active">
                            <Link className="nav-link" to="/signin">Signin</Link>
                        </li>
                        <li style={{display:"inline-block"}} className="nav-item active">
                            <Link className="nav-link" to="signup">Signup</Link>
                        </li>
                        </div>
                    )}

                </ul>
            </div>
        </nav>
        </div>
        
    )
}
export default Head;