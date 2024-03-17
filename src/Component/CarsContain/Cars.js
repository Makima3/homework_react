import {Car} from "./Car";
import {useEffect} from "react";
import {carService} from "../../services";

useEffect(() => {
    carService.getAll().then(({data}) => )
}, []);
export const Cars = () => {
    return (
        <div>
            <Car/>
        </div>
    );
};

