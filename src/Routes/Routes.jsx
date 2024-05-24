import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Layouts/Root";
import Error from "../Pages/Error"
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OrderFood from "../Pages/OrderFood";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivetRoute from'../Routes/PrivetRoute'
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <Menu />
            },
            {
                path: '/orderFood/:category',
                element: <OrderFood />
            },
            {
                path: '/signIn',
                element: <SignIn />
            },
            {
                path: '/signUp',
                element: <SignUp />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivetRoute><Dashboard/></PrivetRoute>,
        errorElement: <Error />,
        children:[
            {
                path: 'cart',
                element:<Cart/>

            },
            // admin routes
            {
                path: 'users',
                element: <AllUsers />

            }
        ]
    }
]);
