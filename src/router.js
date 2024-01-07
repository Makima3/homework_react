import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./Layout/MainLayout";
import {ListPage} from "./Pages/ListPage";
import {AlbumsPage} from "./Pages/AlbumsPage";
import {CommentsPage} from "./Pages/CommentsPage";


 export const router = createBrowserRouter([
    {path:'', element: <MainLayout/>, children:[
            {path:'todos', element:<ListPage/>},
            {path:'albums', element:<AlbumsPage/>},
            {path:'comments', element:<CommentsPage/>}
        ]}

])