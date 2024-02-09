import {Header} from "../components/HeaderContain/Header";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

