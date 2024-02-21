import {Chracters} from "../Components";
import {useNavigate} from "react-router-dom";

export const CharacterPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate(-1)}> Prev page </button>
            <Chracters/>
        </div>
    );
};
