import {axiosService} from "./AxiosService";
import {baseURL, urls} from "../Const/url";



export const commentsService = {
    getAll:() => axiosService.get(urls.comments),
    create:(post)=> axiosService.post(urls.comments, post)
}