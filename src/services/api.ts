import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOSTNAME+"/api",
});


api.interceptors.response.use(
  response => response,
  error => {
    alert("Erro");
    console.log("Response: ", error);
  }
);

api.interceptors.request.use(
  request => request,
  error => {
    alert("Erro");
    console.log("Request: ", error);
  }
)