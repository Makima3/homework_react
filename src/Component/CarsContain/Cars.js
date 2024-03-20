import {Car} from "./Car";
import {useEffect} from "react";
import {carService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {carAction} from "../../store/slices/carSlice";

export const Cars = () => {
    const dispatch = useDispatch()

    const {cars, trigger}= useSelector(state => state.cars)

    useEffect(() => {
    carService.getAll().then(({data}) => dispatch(carAction.setCars(data)))
}, [trigger, dispatch]);

    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

