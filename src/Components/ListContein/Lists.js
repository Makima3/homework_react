import {List} from "./List";
import {listService} from "../../Services/listService";
import {useEffect, useState} from "react";

const Lists = () => {

    const [lists, setLists]= useState([])

    useEffect(()=>{
        listService.getAll().then(({data})=>setLists(data))
    }, [])

    return (
        <div>
            {lists.map(list=> <List key={list.id} list={list}/>)}
        </div>
    );
};

export {Lists};

