import {useNavigate} from "react-router-dom";

export const PostsContain = ({item}) => {
    const {id, title} = item
    const navigate = useNavigate()
    return (
        <div>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <button onClick={() => navigate(`/posts/${id}`)}>Post detail</button>
        </div>
    );
};
