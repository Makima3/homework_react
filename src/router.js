import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {MainUserPage} from "./pages/MainUserPage";
import {userService} from "./services/userService";
import {NextUserPage} from "./pages/NextUserPage";
import {BelowPostPage} from "./pages/BelowPostPage";
import {postSrvice} from "./services/postSrvice";

export const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            {path: 'users', loader: () => userService.getAll(), element: <MainUserPage/>},
            {
                path: 'users/:id',
                loader: ({params: {id}}) => userService.getById(id),
                element: <NextUserPage/>,
                children: [
                    {path: 'posts', loader: ({params: {id}}) => postSrvice.getById(id), element: <BelowPostPage/>}
                ]
            }
        ]
    }
])