import {User} from "./User";

const Users = ({users}) => {
    return (
        <div>
            {
                users.map(user=> <User key={user.id} itemUser={user}/>)
            }
        </div>
    );
};

export {Users};

