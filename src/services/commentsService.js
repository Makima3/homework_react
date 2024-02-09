import {axiosService} from "./axiosService";
import {urls} from "../const/urls";

export const commentsService = {
    getAll: () => axiosService.get(urls.comments)
}