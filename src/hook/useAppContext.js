import {useContext} from "react";
import {Context} from "../hoc";

export const useAppContext =  ()=>{
    const [name, setName] = useContext(Context)

    return{
        name, setName
    }
}