import {useForm} from "react-hook-form";

export const CarsForm = () => {
    const {reset, register, handleSubmit} = useForm()
    return (
        <form>
            <input type='text' placeholder={'brand'} {...register('brand')}/>
            <input type='text' placeholder={'year'} {...register('year')}/>
            <input type='text' placeholder={'price'} {...register('price')}/>
            <button>save</button>
        </form>
    );
};

