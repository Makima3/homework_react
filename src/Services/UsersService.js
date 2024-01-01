import {axiosService} from "./AxiosService";
import {baseURL, urls} from "../Const/url";

export const usersService ={
    getAll:()=> axiosService.get(urls.users),
    create:(post)=> axiosService.create(urls.users, post)
}