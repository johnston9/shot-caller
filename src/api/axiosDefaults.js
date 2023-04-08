/* page to contain the Axios base and create the
   axiosReq and axiosRes */
import axios from "axios";

axios.defaults.baseURL = 'https://shot-caller-api.herokuapp.com/';
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();