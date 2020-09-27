import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import authService from "../service/auth.service"
import Head from "./Head";
function Normal() {
    return (
        <div>
            <h1>NormalUser Page</h1>
        </div>
    )
}
export default Normal