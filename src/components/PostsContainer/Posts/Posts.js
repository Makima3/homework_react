import css from "./Posts.module.css"
import {useEffect, useState} from "react";
import {Post} from "../Post/Post";
const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res =>res.json()).then(value => setPosts(value))

    }, [])
    return (
        <div className={css.Posts}>
            {posts.map(post => <Post postItem={post} key ={ post.id}/>)}
        </div>
    );
};

export {Posts};

