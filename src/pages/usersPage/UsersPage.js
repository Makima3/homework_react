import {Users} from "../../Components/UserContain/Users";
import {useLoaderData} from "react-router-dom";

export const UsersPage = () => {
    const {data} = useLoaderData()
    return (
        <div>
            <Users users={data}/>
        </div>
    );
};
