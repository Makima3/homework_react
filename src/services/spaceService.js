import {axiosService} from "./axiosService";
import {urls} from "../const/urls";

 export const spaceService ={
    getAll:()=> axiosService.get(urls.launches.base)
}


