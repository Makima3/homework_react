import css from "./Posts.module.css"
import {useEffect, useState} from "react";
import axios from "axios";
import {Post} from "../Post/Post";
const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com")
            .then(value => value.data)
            .then(value => setPosts(value))

    }, [])
    return (
        <div className={css.Posts}>
            {posts.map(post =><Post postItem={post} key={post.id}/>)}
        </div>
    );
};

export {Posts};

