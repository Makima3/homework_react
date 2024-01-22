import {useEffect, useState} from "react";
import {postService} from "../../Services/postService";
import {Post} from "./Post";

const Posts = () => {

    const [post, setPost]=useState([])

    useEffect(()=>{
        postService.getByPostId().then(({data})=> setPost(data))
    }, [])


    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {Posts};

