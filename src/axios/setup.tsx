import axios from "axios";

const api = axios.create({
  // TODO setup enviropnment variables for different environments (i.e. local, production)
  baseURL: "http://localhost:8080/api/v1/skincare-diary",
  headers: { "Content-Type": "application/json" }
  //withCredentials: true, // If using cookies for authentication
});

export default api;
