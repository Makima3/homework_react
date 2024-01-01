import axios from "axios";
import {baseURL} from "../Const/url";

const axiosService = axios.create({baseURL});

export {
    axiosService
}