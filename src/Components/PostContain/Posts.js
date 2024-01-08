import {useEffect, useState} from "react";
import {post} from "axios";
import {postService} from "../../Services/postService";
import {Post} from "./Post";

const Posts = () => {

    const [posts, setPosts]=useState([])

    useEffect(()=>{
        postService.getByPostId().then(({data})=> setPosts(data))
    }, [])


    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {Posts};

