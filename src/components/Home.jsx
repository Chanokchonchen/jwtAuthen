import React, { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import authService from "../service/auth.service"
import Head from "./Head"
function Home() {
    const [content,setCotent] = useState({})
    useEffect(()=> {
        const currentUser = authService.getCurrentUser()
        if(currentUser) {
            setCotent(currentUser)
        }
    },[])
    return (
        <div>
            <h1>{`Hello ${content.username}`}</h1>
            <h3>{`Role : ${content.role}`}</h3>
        </div>
    )
}
export default Home;