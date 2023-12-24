import css from "./Posts.module.css"
import {useEffect, useState} from "react";
import {Post} from "../Post/Post";
import axios from "axios";
import {postService} from "../../../services/postService";
const Posts = () => {


    const [posts, setPosts] = useState([])

    useEffect(() => {
postService.getAll().then(({data})=> setPosts(data))
    }, [])
    return (
        <div className={css.Posts}>
            {posts.map(post => <Post postItem={post} key ={ post.id}/>)}
        </div>
    );
};

export {Posts};

