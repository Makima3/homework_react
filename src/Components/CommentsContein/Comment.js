import css from './Comment.module.css'
import {useNavigate} from "react-router-dom";

export const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment

    const navigate = useNavigate()

    return (
        <>
            <div className={css.Comment}>
                <div>postId: {postId}</div>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>email: {email}</div>
                <div>body: {body}</div>
                <button onClick={() => navigate('posts', {state: postId})} className={css.Button}>Show posts</button>
            </div>
            <hr/>
        </>
    );
};
