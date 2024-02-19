import css from './Header.module.css'

export const Header = () => {
    return (
        <div className={css.Header}>
                <h1>Rick and Morty</h1>
                <h2>Episode name</h2>
        </div>
    );
};

