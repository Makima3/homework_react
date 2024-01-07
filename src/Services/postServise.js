import {axiosService} from "./axiosService";
import {urls} from "../Const/urls";

export const postServise ={
    getByPostId:(postId)=> axiosService.get(urls.posts.byPostId(postId))
}