const Comment = ({item}) => {
    const [postId, id, email, name, body] = item
    return (
        <div>
            <div>postId:{postId}</div>
            <div>id:{id}</div>
            <div>email:{email}</div>
            <div>name:{name}</div>
            <div>body:{body}</div>
        </div>
    );
};

export {Comment};

