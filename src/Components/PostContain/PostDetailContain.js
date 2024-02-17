export const PostDetailContain = ({item}) => {
    const {id, userId, title, body} = item
    return (
        <div>
            <div>Id: {id}</div>
            <div>UserId: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

