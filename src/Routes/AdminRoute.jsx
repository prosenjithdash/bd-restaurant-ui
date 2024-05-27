import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks.jsx/useAdmin";
import useAuth from "../Hooks.jsx/useAuth";

const AdminRoute = ({children}) => {

    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600 text-center my-[80px]"></div>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }}  replace></Navigate>
};

export default AdminRoute;