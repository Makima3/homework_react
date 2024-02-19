import {axiosService} from "./axiosService";
import {urls} from "../const";

export const episodeService = {
    getAll: (page ='1') => axiosService.get(urls.episodes, {params: {page}})
}