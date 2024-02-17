import {useLoaderData} from "react-router-dom";
import {PostDetailContain} from "../Components/PostContain/PostDetailContain";
import {Comment} from "../Components/CommentContain/Comment";
import {useEffect, useState} from "react";
import {commentService} from "../services/commentService";

export const LastCommentPage = () => {

    const {data: onePost} = useLoaderData()
    const {id} = onePost
    const [comments, setComments] = useState([])

    useEffect(() =>{
        commentService.getByPostId(id).then(({data})=> setComments(data))
    },[id])

    return (
        <div>
            <PostDetailContain item={onePost}/>
            <hr/>
            <hr/>
            <hr/>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

