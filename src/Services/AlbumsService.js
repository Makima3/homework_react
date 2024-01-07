import {axiosService} from "./axiosService";
import {urls} from "../Const/urls";

 export const AlbumsService = {
    getAll:()=> axiosService.get(urls.albums )
}