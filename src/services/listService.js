import {axiosService} from "./axiosService";
import {urls} from "../const/urls";

export const listService = {
    getAll: () => axiosService.get(urls.todos)
}