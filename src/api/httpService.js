import axios from "axios";

const httpService = axios.create({
  baseURL: "https://www.afrihost.com/assessments/2603-fe-mid",
  headers: {
    "Content-Type": "application/json",
  },
});

// httpService.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

export default httpService;
