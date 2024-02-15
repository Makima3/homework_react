import {axiosService} from "./axiosService";
import {urls} from "../const/urls";

export const postService = {

    getByUserId: (UserId) => axiosService.get(urls.posts.getByUserId(UserId)),
    getById: (id) => axiosService.getById(urls.posts.byId(id))
}