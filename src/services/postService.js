import {axiosService} from "./AxiosService";
import {urls} from "../constants/urls";

 export const postService = {
    getAll:()=> axiosService.get(urls.posts.base),
    getById:(id)=>axiosService.get(urls.posts.postById(id))
}
