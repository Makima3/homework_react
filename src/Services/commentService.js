import {axiosService} from "./axiosService";
import {urls} from "../Const/urls";

 export const commentService= {
    getAll:()=>axiosService.get(urls.comments),
    create:(comment)=> axiosService.post(urls.comments,comment)
}