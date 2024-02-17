import {axiosService} from "./axiosService";
import {urls} from "../const/urls";

export const postService = {
    getById: (id) => axiosService.get(urls.posts.byId(id)),
    getByUserId: (userId) => axiosService.get(urls.posts.byUserId(userId))
}