import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Layouts/Root";
import Error from "../Pages/Error"
import Home from "../Pages/Home/Home";

export const  Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement:<Error/>,
        children: [
            {
                path: '/',
                element:<Home/>
            }
        ]
    },
]);
