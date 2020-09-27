import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Register"
import { Redirect, Route } from "react-router-dom";
import Home from "./Home";
import Head from "./Head"
import Normal from "./Normal";
import Admin from "./Admin";
import DormOwner from "./DormOwner";
import Login from "./Login";
import authService from "../service/auth.service"
function App() {
    const [isLogin,setIsLogin] = useState(false)
    const [isAdmin,setIsAdmin] = useState(false)
    const [isDormOwner,setIsDormOwer] = useState(false)
    const [isNormal,setIsNormal] = useState(false)
    const [CurrentUser , setCurrentUser] = useState(undefined)
    useEffect(()=> {
        const currentUser = authService.getCurrentUser();
        if (currentUser) {
            setIsLogin(true)
            setCurrentUser(currentUser)
            if(currentUser.role === "Normal") {
                setIsNormal(true)
            }
            if(currentUser.role === "DormOwner") {
                setIsDormOwer(true)
            }
            if(currentUser.role === "Admin") {
                setIsAdmin(true)
            }
        }
    },[isLogin])
    return (
        <div>
            <Head currentUser={CurrentUser} isLogin={isLogin} setIsLogin={setIsLogin} />
            <Route exact path="/signin" component={()=> {
                return isLogin ? <Redirect to="/home" /> : <Login isLogin={isLogin} setIsLogin={setIsLogin} />
            }} />
            <Route exact path="/signup" component={()=> {
                return isLogin ? <Redirect to="/home" /> : <Register isLogin={isLogin} setIsLogin={setIsLogin} />
            }}  />
            <Route exact path="/home" component={()=> {
                return isLogin ? <Home /> : <Redirect to="/signin" />
            }} />
            <Route exact path="/normal" component={()=> {
                return (isNormal && isLogin) ? <Normal /> : <Redirect to="/signin" />
            }} />
            <Route exact path="/dormowner" component={()=> {
                return (isDormOwner && isLogin) ? <DormOwner /> : <Redirect to="/signin" />
            }} />
            <Route exact path="/admin" component={()=> {
                return (isAdmin && isLogin) ? <Admin /> : <Redirect to="/signin" />
            }} />
        </div>
    )
}
export default App;