import {useForm} from "react-hook-form";
import {carService} from "../Services/carService";
import {useEffect} from "react";



const CarsForm = ({setTrigger, carForUpdate}) => {
    const {register, reset, handleSubmit, setValue} = useForm()


    useEffect(()=>{
        if (carForUpdate){
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }

    }, [carForUpdate])
    const save = async (car)=>{
        await carService.create(car)
        setTrigger(prev => !prev)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>Save</button>

        </form>
    );
};

export {CarsForm};

