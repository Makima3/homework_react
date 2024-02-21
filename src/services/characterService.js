import {axiosService} from "./axiosService";
import {urls} from "../const";

export const characterService = {
    getByIds: (ids) => axiosService.get(urls.characters.byIds(ids))
}