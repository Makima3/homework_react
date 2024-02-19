import {useEffect, useState} from "react";
import {episodeService} from "../../services";
import {Episode} from "./Episode";
import css from "./Episode.module.css";
import {useSearchParams} from "react-router-dom";

export const Episodes = () => {

    const [episodes, setEpisodes] = useState([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const [page, setPage] = useState({prev: null, next: null})

    useEffect(() => {
        episodeService.getAll(query.get('page')).then(({data}) => {
            setEpisodes(data.results)
            setPage({prev: data.info.prev, next: data.info.next})
        })
    }, [query.get('page')])

    const prev = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') - 1}`)
            return prev
        })
    }

    const next = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') + 1}`)
            return prev
        })
    }
    return (
        <>
            <div className={css.Episodes}>
                {
                    episodes.map(item => <Episode key={item.id} item={item}/>)
                }
            </div>
            <div>
                <button disabled={!page.prev} onClick={prev} className={css.button}>Prev</button>
                <button disabled={!page.next} onClick={next} className={css.button}>Next</button>
            </div>
        </>
    );
}
