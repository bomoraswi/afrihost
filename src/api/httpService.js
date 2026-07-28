import axios from "axios";

const httpService = axios.create({
  baseURL: "/assessments/2603-fe-mid",
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpService;
