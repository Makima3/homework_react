import {axiosService} from "./axiosService";
import {urls} from "../const/urls";

export const postSrvice = {
    getById: (id) => axiosService.get(urls.posts.byUserId(id))
}