import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import authService from "../service/auth.service"
import Head from "./Head";
function DormOwner() {
    useEffect(()=> {
        const currentUser = authService.getCurrentUser();
    },[])
    return (
        <div>
            <h1>DormOwner Page</h1>
        </div>
    )
}
export default DormOwner