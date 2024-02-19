import css from './Episode.module.css'

export const Episode = ({item}) => {
    const {id, name, episode} = item
    return (
        <div className={css.Episode}>
            <div className={css.Item}>
                <div>ID: {id}</div>
                <div style={{marginBlock: '5px'}}>NAME: {name}</div>
                <div>EPISODE: {episode}</div>
            </div>
        </div>
    );
};
