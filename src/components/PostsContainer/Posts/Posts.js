import css from "./Posts.module.css"
import {useEffect, useState} from "react";
import {Post} from "../Post/Post";
import {postService} from "../../../services/postService";
import {PostDetails} from "../PostDetails/PostDetails";

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null)

    const click = async (postId) => {
        const {data} = await postService.getById(postId)
        setPostDetails(data)
    }

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, [])
    return (
        <div>
            <div className={css.Posts}>
                {
                    posts.map(post => <Post postItem={post} key={post.id} click={click}/>)
                }
            </div>
            {
                postDetails && <PostDetails postDetails={postDetails}/>
            }
        </div>

    );
};

export {Posts};

