import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./Layout/MainLayout";
import {ListPage} from "./Pages/ListPage";
import {AlbumsPage} from "./Pages/AlbumsPage";
import {CommentsPage} from "./Pages/CommentsPage";
import {PostPage} from "./Pages/PostSPage";


 export const router = createBrowserRouter([
    {path:'', element: <MainLayout/>, children:[
            {index:true, element:<Navigate to={'todos'}/>},
            {path:'todos', element:<ListPage/>},
            {path:'albums', element:<AlbumsPage/>},
            {path:'comments', element:<CommentsPage/>, children: [
                    {path:'posts', element:<PostPage/>}
                    ]}
        ]}

])