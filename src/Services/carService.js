import {axiosService} from "./axiosService";
import {urls} from "../Const/urls";

const carService = {
    getAll: () => axiosService.get(urls.cars.base),

}