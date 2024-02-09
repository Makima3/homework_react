import {useEffect, useState} from "react";
import {postService} from "../../services/postService";
import {Post} from "./Post";

export const Posts = ({postId}) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        postService.getByPostId(postId).then(({data}) => setPosts(data))
    }, [postId])

    return (
        <div>
            {
                Array.isArray(posts) && posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};
