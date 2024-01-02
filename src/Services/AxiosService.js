import axios from "axios";
import {baseURL} from "../Const/url";

export const axiosService = axios.create({baseURL});

