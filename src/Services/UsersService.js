import {axiosService} from "./AxiosService";
import {urls} from "../Const/url";

const usersService ={
    getAll:()=> axiosService.get(urls.users),
    create:(user)=>axiosService.post(urls.users, user)

}

export {
    usersService
}