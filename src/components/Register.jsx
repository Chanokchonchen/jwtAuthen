import React, { useState , useEffect } from "react"
import { Redirect } from "react-router-dom"
import authService from "../service/auth.service"
import Head from "./Head"
function RegisterForm(props) {
    const [form , setForm] = useState({username:"" , password:"",email:"",role:""})
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
    async function Register() {
        const result =  await authService.Register(form.username,form.email,form.password,form.role)
        setForm({username:"",password:"",email:"" ,role:""})
        props.setIsLogin(true)
        console.log(result)

    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>username</label>
            <input onChange={handleChange} type="text" name="username" value={form.username}  />
            <br />
            <label>password</label>
            <input onChange={handleChange} type="password" name="password" value={form.password} />
            <br />
            <label>email</label>
            <input onChange={handleChange} type="email" name="email" value={form.email} />
            <br />
            <label>role</label>
            <input onChange={handleChange} type="text" name="role" value={form.role} />
            <br />
            <button onClick={Register} type="submit" >Signup</button>
        </form>
        </div>
    )
}
export default RegisterForm;