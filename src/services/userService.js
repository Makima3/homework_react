import {axiosService} from "./axiosService";
import {urls} from "../const/urls";

export const userService = {

    getAll: () => axiosService.get(urls.users.base),
    getById: (id) => axiosService.getById(urls.users.byId(id))
}