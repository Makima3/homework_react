import css from './Post.module.css'
const Post = ({post}) => {

    const{userid, id, title, body}=post

    return (
        <div className={css.Post}>
            <div>userId:{userid}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
        </div>
    );
};

export {Post};

