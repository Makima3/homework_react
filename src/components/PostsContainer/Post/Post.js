import css from "./Post.module.css"
const Post = ({postItem}) => {

    const {id, title} = postItem;
    return (
        <div className={css.Post}>
            <div>Id:{postItem.id}</div>
            <div>Title:{postItem.title}</div>
        </div>
    );
};

export {Post};

