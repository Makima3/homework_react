import {axiosService} from "./AxiosService";
import {urls} from "../constants/urls";

const postService = {
    getAll:()=> axiosService.get(urls.posts.base),
    getById:(id)=>axiosService.get(urls.posts.postById(id))
}
export {
    postService
}