import {useEffect, useState} from "react";
import {userService} from "../../services/userService";

export const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(()=>{
        userService.getAll()
    },[])

    return (
        <div>
            App
        </div>
    );
};

