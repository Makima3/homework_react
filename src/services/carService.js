import {axiosService} from "./axiosService";
import {urls} from "../const";

export const carService = {
    getAll: () => axiosService.get(urls.cars.base),
    create: (data) => axiosService.post(urls.cars.base, data),
    updateById: (data, id) => axiosService.put(urls.cars.byId(id), data),
    delete: (id) => axiosService.delete(urls.cars.byId(id))
}