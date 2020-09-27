import React, { useContext, useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import authService from "../service/auth.service"
import Head from "./Head"
import {LoginContext} from "./LoginProvider"
function Login(props) {
    const [form , setForm] = useState({password:"",email:""})
    if(props.isLogin) {
        return <Redirect to="/home"/>
    }
    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setForm((prev) => {
            return {...prev ,[name]:value}
        })
    }
    function handleSubmit(event) {
       event.preventDefault();
    }
    async function LogIn() {
        const result =  await authService.Login(form.email,form.password)
        console.log(result)
        setForm({password:"",email:""})
        props.setIsLogin(true)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>email</label>
                <input onChange={handleChange} type="email" name="email" value={form.email} />
                <br />
                <label>password</label>
                <input onChange={handleChange} type="password" name="password" value={form.password} />
                <br />
                <button onClick={LogIn} type="submit" >Signin</button>
            </form>
        </div>
    )
}
export default Login;