import {Posts} from "../Components/PostContain/Posts";
import {useLocation} from "react-router-dom";
import css from "../Components/PostContain/Post.module.css"

export const PostPage = () => {

    const {state: postId} = useLocation()

    return (
        <div className={css.Post}>
           <Posts postId={postId}/>
        </div>
    );
};
