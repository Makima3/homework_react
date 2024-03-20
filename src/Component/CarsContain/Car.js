import {useDispatch} from "react-redux";
import {carAction} from "../../store/slices/carSlice";
import {carService} from "../../services";

export const Car = ({car}) => {

    const {id, price, brand, year} = car

    const dispatch = useDispatch()

    const deleteById = async ()=>{
        await carService.delete(id)
    dispatch(carAction.trigger())
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>price: {price}</div>
            <div>brand: {brand}</div>
            <div>year: {year}</div>
            <button onClick={()=> dispatch(carAction.setCarForUpdate(car))}>Update</button>
            <button onClick={deleteById}>Delete</button>
            <hr/>
            <hr/>
        </div>
    );
};

