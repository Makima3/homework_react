import {Albums} from "../components/AlbumsContein/Albums";
import css from "../components/AlbumsContein/Album.module.css"

 export const AlbumsPage = () => {
    return (
        <div className={css.Album}>
            <Albums/>
        </div>
    );
};
