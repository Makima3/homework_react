import {useForm} from "react-hook-form";
import css from './UserForm.module.css'
import {usersService} from "../../Services/UsersService";

export const UserForm = ({setUsers}) => {
    const {reset, register, handleSubmit} = useForm();

    const save =  async (user) => {
        const {data}= await usersService.create(user);
        setUsers(prev =>[...prev, data])
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)} className={css.Forms}>
            <input type="text" placeholder="name" {...register('name')}/>
            <input type="text" placeholder="username" {...register('username')}/>
            <input type="email" placeholder="email" {...register('email')}/>
            <button>Save</button>
        </form>
    )
}



