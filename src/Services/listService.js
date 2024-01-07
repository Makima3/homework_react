import {axiosService} from "./axiosService";
import {urls} from "../Const/urls";

export const listService={
    getAll:()=> axiosService.get(urls.comments)
}