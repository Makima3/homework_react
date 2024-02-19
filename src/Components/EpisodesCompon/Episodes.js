import {useEffect, useState} from "react";
import {episodeService} from "../../services";
import {Episode} from "./Episode";
import css from "./Episode.module.css";

export const Episodes = () => {

    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        episodeService.getAll().then(({data}) => setEpisodes(data.results))
    }, [])

    return (
        <div className={css.Episodes}>
            {
                episodes.map(item => <Episode key={item.id} item={item}/>)
            }
        </div>
    );
};
