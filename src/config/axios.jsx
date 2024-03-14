import axios from "axios";

const instance = axios.create({
    baseURL:
    "http://localhost:8080/" || "https://internshalaapi-2.onrender.com", 
    withCredentials: true,
});

export default instance;
