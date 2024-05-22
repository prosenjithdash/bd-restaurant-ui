import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Root = () => {
    const location = useLocation();
    console.log(location)
    const noHeaderFooter = location.pathname.includes('signIn')
    const noHeaderFooter2 = location.pathname.includes('signUp')

    return (
        <div>
            {noHeaderFooter || noHeaderFooter2 || <Navbar/>}
            <Outlet/>
            {noHeaderFooter || noHeaderFooter2 || <Footer />}
        </div>
    );
};

export default Root;