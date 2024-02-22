import css from './Header.module.css'
import {useAppContext} from "../../hook";

export const Header = () => {
    const {name} = useAppContext()

    return (
        <div className={css.Header}>

            {
                <h3>{name}</h3>
            }
            <h1>Rick & Morty</h1>
        </div>
    );
};

