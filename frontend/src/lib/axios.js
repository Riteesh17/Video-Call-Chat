import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development" ? "http://mern-vcc-azure-web-app-gscccqgtddembbfh.southeastasia-01.azurewebsites.net/api" : "/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});