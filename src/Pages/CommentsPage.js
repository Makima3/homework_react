import {Comments} from "../Components/CommentsContein/Comments";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};

