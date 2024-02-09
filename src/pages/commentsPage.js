import {Comments} from "../components/CommentsContein/Comments";
import {Outlet} from "react-router-dom";
import css from "../components/CommentsContein/Comment.module.css"

export const CommentsPage = () => {
    return (
        <div className={css.Comment}>
            <Comments/>
            <Outlet/>
        </div>
    );
};
