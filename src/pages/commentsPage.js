import {Comments} from "../Components/CommentsContein/Comments";
import {Outlet} from "react-router-dom";
import css from "../Components/CommentsContein/Comment.module.css"

export const CommentsPage = () => {
    return (
        <div className={css.Comment}>
            <Comments/>
            <Outlet/>
        </div>
    );
};
