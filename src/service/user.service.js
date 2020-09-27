import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/test/";

function getPublicContent () {
  return axios.get(API_URL + "all");
};
function getUserBoard()  {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

function getModeratorBoard(){
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

function getAdminBoard() {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};
