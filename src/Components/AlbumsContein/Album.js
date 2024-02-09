import css from './Album.module.css'

export const Album = ({album}) => {
    const {userId, id, title} = album
    return (
        <>
            <div className={css.Album}>
                <div>userId: {userId}</div>
                <div>id: {id}</div>
                <div>title: {title}</div>
            </div>
            <hr/>
        </>
    );
};
