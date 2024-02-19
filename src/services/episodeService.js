import {axiosService} from "./axiosService";
import {urls} from "../const";

export const episodeService = {
    getAll: () => axiosService.get(urls.episodes)
}