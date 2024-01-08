import {axiosService} from "./axiosService";
import {urls} from "../Const/urls";

export const postService ={
    getAll:()=> axiosService.get(urls.posts.base),
    getByPostId:(postId)=> axiosService.get(urls.posts.byPostId(postId))
}