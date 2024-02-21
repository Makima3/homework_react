import css from './Header.module.css'
import {useAppContext} from "../../hook";

export const Header = () => {

    const {name}=useAppContext()
    return (
        <div className={css.Header}>
                <h1>Rick and Morty</h1>
                <h2>{name}</h2>
        </div>
    );
};

