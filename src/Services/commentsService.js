import {axiosService} from "./axiosService";
import {urls} from "../Const/urls";

 export const commentsService={
    getAll:()=> axiosService.get(urls.comments)
}