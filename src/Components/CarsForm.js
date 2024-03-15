import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services";
import {carValidator} from "../validators";
import {joiResolver} from "@hookform/resolvers/joi";

export const CarsForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {

    const {register, handleSubmit, reset, formState: {isValid, errors}, setValue} = useForm(
        {
            mode: 'all',
            resolver: joiResolver(carValidator)
        },
    )

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue]);

    const save = async (car) => {
        await carService.create(car)
        setTrigger(prev => !prev)
        reset()
    }
    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        setTrigger(prev => !prev)
        setCarForUpdate(null)
        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type='text' placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type='text' placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <input type='text' placeholder={'brand'} {...register('brand')}/>
                <button disabled={!isValid}>{ carForUpdate ? 'Update' : 'Save'}</button>
            </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </>
    );
};

