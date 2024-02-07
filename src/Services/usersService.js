import {axiosService} from "./axiosService";
import {urls} from "../Const/url";

export const usersService = {
    getAll: () => axiosService.get(urls.users),
    create: (user) => axiosService.post(urls.users, user)
}