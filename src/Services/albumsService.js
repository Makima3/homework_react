import {axiosService} from "./axiosService";
import {urls} from "../Const/urls";

 export const albumsService = {
    getAll:()=> axiosService.get(urls.albums )
}