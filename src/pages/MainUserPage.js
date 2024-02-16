import {Users} from "../Components/UserContain/Users";
import {useLoaderData} from "react-router-dom";

export const MainUserPage = () => {

    const {data} = useLoaderData()

    return (
        <div>
            <Users users={data}/>
        </div>
    );
};
