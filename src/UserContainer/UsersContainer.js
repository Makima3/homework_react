import {useEffect, useState} from "react";
import {UserForm} from "./UserForm";
import {Users} from "./Users";
import {usersService} from "../Services/UsersService";

const UsersContainer = () => {

    const [users, setUser] = useState([])

    useEffect(()=>{
usersService.getAll.then(({data})=> setUser(data))
    }, [])



    return (
        <div>
            <UserForm/>
            <hr/>
            <Users users = {users}/>
        </div>
    );
};

export {UsersContainer};

