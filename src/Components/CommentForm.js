import {useForm} from "react-hook-form";
import css from './CommentContainer.module.css'
import {commentService} from "../Services/commentService";

export const CommentForm = ({setComments}) => {

    const {reset, register, handleSubmit} = useForm()

    const save = async (comment) => {
        const {data} = await commentService.create(comment);
        setComments(prev => [...prev, data])
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)} className={css.Forms}>
            <input type="text" placeholder="name" {...register('name')}/>
            <input type="email" placeholder="email" {...register('email')}/>
            <input type="text" placeholder="body" {...register('body')}/>
            <button>save</button>
        </form>
    );
};


