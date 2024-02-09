import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/mainLayout";
import {ListPage} from "./pages/listPage";
import {AlbumsPage} from "./pages/albumsPage";
import {CommentsPage} from "./pages/commentsPage";
import {PostPage} from "./pages/postsPage";

export const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'todos'}/>},
            {path: 'todos', element: <ListPage/>},
            {path: 'albums', element: <AlbumsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'comments/posts', element: <PostPage/>}
        ]
    }
])