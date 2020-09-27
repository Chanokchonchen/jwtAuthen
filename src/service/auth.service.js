import axios from "axios";
const API_URL = "http://localhost:2000/";

async function Register(username,email,password,role) {
    const response = await axios.post(`${API_URL}signup`,{username,email,password,role})
    console.log(response.data)
    if (response.data.token) {
        localStorage.setItem("token",JSON.stringify(response.data))
    }
    return response.data
}
async function Login(email,password) {
    const response = await axios.post(`${API_URL}signin`,{email,password})
    if (response.data.token) {
        localStorage.setItem("token",JSON.stringify(response.data))
    }
    return response.data
}
function Logout() {
    localStorage.removeItem("token");
}
function getCurrentUser() {
    const user  = JSON.parse(localStorage.getItem("token"))
    return user
}
export default {
    Register,
    Login,
    Logout,
    getCurrentUser
}


