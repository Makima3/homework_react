import {UserForm} from "./UserForm";
import {Users} from "./Users";
import {useEffect, useState} from "react";
import {usersService} from "../../Services/UsersService";

const UsersContainer = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))

    }, [])


    return (
        <div>
            <UserForm/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export {UsersContainer};

