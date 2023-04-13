import React from "react";
import ReactDOM from "react-dom"
import App from './App'
import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom";
import About from "./routes/About/About";



const router = createHashRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/about",
        element: <About/>
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />);
