import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {MainUserPage} from "./pages/MainUserPage";
import {userService} from "./services/userService";
import {NextUserPage} from "./pages/NextUserPage";

export const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            {path: 'users', loader: () => userService.getAll(), element: <MainUserPage/>},
            {path: 'users/:id', element:<NextUserPage/>}
        ]
    }
])