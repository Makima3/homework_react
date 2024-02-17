import {useLoaderData} from "react-router-dom";
import {PostsContain} from "../Components/PostContain/PostsContain";

export const BelowPostPage = () => {
    const {data: posts} = useLoaderData()
    return (
        <div>
            {posts.map((item) => <PostsContain key={item.id} item={item}/>)}
        </div>
    );
};
