import css from "./Posts.module.css"
import {useEffect, useState} from "react";
import axios from "axios";
const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.

    }, [])
    return (
        <div className={css.Posts}>
            App
        </div>
    );
};

export {Posts};

