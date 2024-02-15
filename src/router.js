import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {UsersPage} from "./pages/usersPage/UsersPage";
import {UserDetailsPage} from "./pages/userDetailsPage/UserDetailsPage";
import {userService} from "./services/userService";

export const router = createBrowserRouter(
    [{
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            {
                path: 'users', element: <UsersPage/>, loader: () => userService.getAll(),
                children: [
                    {path: 'user_details', element: <UserDetailsPage/>}
                ]
            },
            {}
        ]
    }
    ]
)