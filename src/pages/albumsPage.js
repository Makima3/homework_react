import {Albums} from "../Components/AlbumsContein/Albums";
import css from "../Components/AlbumsContein/Album.module.css"

 export const AlbumsPage = () => {
    return (
        <div className={css.Album}>
            <Albums/>
        </div>
    );
};
