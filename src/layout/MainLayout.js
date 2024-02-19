import {Outlet} from "react-router-dom";
import {Header} from "../Components/HeaderCompon/Header";

export const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

