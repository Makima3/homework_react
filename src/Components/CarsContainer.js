import {useEffect, useState} from "react";
import {carService} from "../services/carService";
import {CarsForm} from "./CarsForm";
import {Cars} from "./Cars";

export const CarsContainer = () => {

    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger])


    return (
        <div>
            <CarsForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarFotUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>
        </div>
    );
};
