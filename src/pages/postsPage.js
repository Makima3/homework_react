import {Posts} from "../components/PostContain/Posts";
import {useLocation} from "react-router-dom";
import css from "../components/PostContain/Post.module.css"

export const PostPage = () => {

    const {state: postId} = useLocation()

    return (
        <div className={css.Post}>
           <Posts postId={postId}/>
        </div>
    );
};
