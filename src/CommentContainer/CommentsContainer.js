import {useEffect, useState} from "react";
import {CommentForm} from "./CommentForm";
import {Comment} from "./Comment";
import {commentsService} from "../Services/CommentsService";

const [comments, setComment]=useState([])

useEffect(()=> {
    commentsService.getAll().then(({data})=> setComment(data))

}, [])

const CommentsContainer = () => {
    return (
        <div>
            <CommentForm/>
            <hr/>
            <Comment comments={comments}/>
        </div>
    );
};

export {CommentsContainer};

