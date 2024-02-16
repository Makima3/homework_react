import {Detail} from "../Components/UserContain/Detail";
import {Outlet, useLoaderData} from "react-router-dom";

export const NextUserPage = () => {
    const {data} = useLoaderData()
    return (
        <div>
            <Detail user={data}/>
            <Outlet/>
        </div>
    );
};

