import css from "./Post.module.css"
const Post = ({postItem}) => {
const {id, title} = postItem
    return (
        <div className={css.Post}>
            <div>id :{postItem.id}</div>
            <div>title:{postItem.title}</div>
            <button>Details</button>
        </div>
    );
};

export {Post};

