import {useEffect, useState} from "react";
import {postService} from "../../services/postService";
import {Post} from "./Post";

export const Posts = ({postId}) => {

    const [post, setPost] = useState(null)

    useEffect(() => {
        postService.getByPostId(postId).then(({data}) => setPost(data))
    }, [postId])

    return (
        <div>
            {
                post && <Post post={post}/>
            }
        </div>
    );
};
