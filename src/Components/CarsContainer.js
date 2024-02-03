import {useEffect, useState} from "react";
import {carService} from "../Services/carService";
import {CarsForm} from "./CarsForm";
import {Cars} from "./Cars";

const CarsContainer = () => {

    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(true)
    const [carForUpdate, setCarForUpdate] = useState(null)

    useEffect(()=> {
        carService.getAll().then(({data})=> setCars(data))
    }, [trigger])
    return (
        <div>
            <CarsForm trigger={trigger} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {CarsContainer};

