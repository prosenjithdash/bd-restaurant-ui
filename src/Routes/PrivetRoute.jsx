
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks.jsx/useAuth";

const PrivetRoute = ({ children }) => {
    
    const { user, loading } = useAuth();
    const location = useLocation();
    
    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600 text-center my-[80px]"></div>
    }
    if (user) {
        return children
    }
    return <Navigate state={{from:location}} to='/signIn' replace></Navigate>
};

export default PrivetRoute;