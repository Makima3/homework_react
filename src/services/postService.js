import {axiosService} from "./axiosService";
import {urls} from "../const/urls";

export const postService = {
    getByPostId: (postId) => axiosService.get(urls.posts.byPostId(postId))
}