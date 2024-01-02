import {CommentForm} from "./CommentForm";
import {Comments} from "./Comments";
import {useEffect, useState} from "react";
import {commentService} from "../Services/commentService";

 export const CommentContainer = () => {
     const [comments, setComments]= useState([])

     useEffect(()=> {
         commentService.getAll().then(({data})=> setComments(data))
     }, [])

    return (
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};


