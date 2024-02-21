import css from './Episode.module.css'
import {useNavigate} from "react-router-dom";

export const Episode = ({item}) => {
    const {id, name, episode, characters} = item
    const navigate = useNavigate()

    const episodeCharacters = () => {
        const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',')
        navigate(`/characters/${ids}`)
    }

    return (
        <div className={css.Episode}>
            <div className={css.Item} onClick={episodeCharacters}>
                <div><b>ID:</b> {id}</div>
                <div style={{marginBlock: '5px'}}><b>NAME:</b> {name}</div>
                <div><b>EPISODE:</b> {episode}</div>
            </div>
        </div>
    );
};
