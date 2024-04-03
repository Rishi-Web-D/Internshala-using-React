import axios from "axios";

const instance = axios.create({
  baseURL: "https://internshalaapi-2.onrender.com/" || "http://localhost:8080/",
  withCredentials: true,
});

export default instance;
