import {axiosService} from "./axiosService";
import {urls} from "../const/urls";

export const albumsService = {
    getAll: () => axiosService.get(urls.albums)
}