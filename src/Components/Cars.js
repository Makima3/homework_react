import {Car} from "./Car";

export const Cars = ({cars, setCarForUpdate, setTrigger}) => {
    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>)
            }
        </div>
    );
};
