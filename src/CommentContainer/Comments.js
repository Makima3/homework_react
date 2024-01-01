import {Comment} from "./Comment";

const Comments = ({comments}) => {
    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} item={comment}/>)}
        </div>
    );
};

export {Comments};

