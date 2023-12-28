import css from "./Post.module.css"
const Post = ({postItem, click}) => {
const {id, title} = postItem



    return (
        <div className={css.Post}>
            <div>id :{postItem.id}</div>
            <div>title:{postItem.title}</div>
            <button onClick={()=>click(id)}>Details</button>
        </div>
    );
};

export {Post};

