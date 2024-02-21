import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout";
import {CharacterPage, EpisodePage} from "./Pages";

export const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'episode'}/>},
            {path: 'episode', element: <EpisodePage/>},
            {path: 'characters/:ids', element: <CharacterPage/>}
        ]
    }
])