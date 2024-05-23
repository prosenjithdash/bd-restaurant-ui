import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
// import { HiShoppingCart } from "react-icons/hi";
import { IoRestaurantOutline } from "react-icons/io5";
import useCart from "../Hooks.jsx/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    {/*  tan stack query step - 06 (Navbar.jsx) */ }
    const [cart] = useCart();
    console.log(user)

    const handleSignOut = () => {
        logOut()
            .then(() => { 
                toast("SignOut Successfully Completed.")
            })
            .catch(error => {
                console.log(error)
                toast("Wrong SignOut. Please Try again")

        })
    }

    const NavLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Menu</NavLink></li>
        <li><NavLink to='/orderFood/pizza'>Order Food</NavLink></li>
        {/* <li><NavLink to='/signUp'>SignUp</NavLink></li> */}
        {
            user ?
                <>
                    {/* <span>{ user?.displayName}</span> */}
                    <button onClick={handleSignOut} className="ml-2">SignOut</button>
                </>
                    :
                <>
                    <li><NavLink to='/signIn'>SignIn</NavLink></li>
 
                </>
        }

        <li><NavLink to='/g'>
            <div className="flex gap-2 bg-0 items-center  -mb-4 ml-2">
                <IoRestaurantOutline className="w-[20px] h-[20px] text-yellow-400 font-extrabold"/>
                <div className=" bg-black p-1 rounded-xl text-yellow-400 font-extrabold ">
                    +{cart.length}
                </div>
            </div>
        </NavLink></li>



    </>
    return (
        <div className=" ">
            <div className=" fixed z-50  navbar   bg-opacity-30 bg-black text-white ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-extrabold"><span className="text-white">BD</span> <span className="text-orange-600">Restaurant</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/signUp'><button className="btn">Get Started</button></Link>
                </div>
            </div>
       </div>
    );
};

export default Navbar;