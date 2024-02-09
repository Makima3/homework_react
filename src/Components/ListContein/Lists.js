import {List} from "./List";
import {listService} from "../../services/listService";
import {useEffect, useState} from "react";

export const Lists = () => {

    const [lists, setLists] = useState([])

    useEffect(() => {
        listService.getAll().then(({data}) => setLists(data))
    }, [])

    return (
        <div>
            {
                lists.map(list => <List key={list.id} list={list}/>)
            }
        </div>
    );
};

