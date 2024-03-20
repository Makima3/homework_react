import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {carAction} from "../../store/slices/carSlice";
import {useEffect} from "react";

export const CarsForm = () => {
    const {
        reset,
        register,
        handleSubmit,
        setValue
    } = useForm()

    const dispatch = useDispatch()
    const {carForUpdate} = useSelector(state => state.cars)

    const save = async (car) => {
        await carService.create(car)
        dispatch(carAction.trigger())
        reset()
    }

    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        dispatch(carAction.trigger())
        dispatch(carAction.setCarForUpdate(null))
        reset()
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('year', carForUpdate.year)
            setValue('price', carForUpdate.price)
        }
    }, [carForUpdate, setValue]);

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type='text' placeholder={'brand'} {...register('brand')}/>
            <input type='text' placeholder={'year'} {...register('year')}/>
            <input type='text' placeholder={'price'} {...register('price')}/>
            <button>{carForUpdate ? 'Update' : 'Save'}</button>
        </form>
    );
};

