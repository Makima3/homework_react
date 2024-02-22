import {Character} from "./Character";
import {useEffect, useState} from "react";
import {characterService} from "../../services/characterService";
import {useParams} from "react-router-dom";

export const Chracters = () => {

    const {ids} = useParams()
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        characterService.getByIds(ids).then(({data}) => setCharacters(data))
    }, [ids])

    return (
        <div>
            {
                characters.map(character => <Character key={character.id} character={character}/>)
            }
        </div>
    );
};
