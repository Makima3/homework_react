import {axiosService} from "./axiosService";
import {urls} from "../const/urls";

const episodeService = {
    getAll: () => axiosService.get(urls.episode.base)
}