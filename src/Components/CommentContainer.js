import {CommentForm} from "./CommentForm";
import {Comments} from "./Comments";

const CommentContainer = () => {
    return (
        <div>
            <CommentForm/>
            <hr/>
            <Comments/>
        </div>
    );
};

export {CommentContainer};

