import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {ContextProvider} from "./hoc";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ContextProvider>
        <RouterProvider router={router}/>
    </ContextProvider>
);

