import {Chracters} from "../Components";
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../hook";
import css from '../Components/EpisodesCompon/Episode.module.css'

export const CharacterPage = () => {
    const navigate = useNavigate()
    const {setName} = useAppContext()

    const back = () => {
        setName(null)
        navigate(-1)
    }
    return (
        <div>
            <button  className={css.button} onClick={back}> Prev page</button>
            <Chracters/>
        </div>
    );
};
