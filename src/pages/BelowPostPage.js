import {useLoaderData} from "react-router-dom";
import {PostsContain} from "../Components/PostContain/PostsContain";

export const BelowPostPage = () => {
    const {data:posts} = useLoaderData()
    return (
        <div>
            {
                posts.map(post => <PostsContain key={post.id} post={post}/>)
            }
        </div>
    );
};
