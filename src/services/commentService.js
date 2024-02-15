import {axiosService} from "./axiosService";
import {urls} from "../const/urls";

export const commentService = {

    getByPostId: (postId) => axiosService.get(urls.comments.getByPostId(postId))
}