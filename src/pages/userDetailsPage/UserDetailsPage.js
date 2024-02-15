import {Detail} from "../../Components/UserContain/Detail";
import {Outlet} from "react-router-dom";

export const UserDetailsPage = () => {
    return (
        <div>
            <Detail/>
            <Outlet/>
        </div>
    );
};


