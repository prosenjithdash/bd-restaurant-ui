import { BsCartPlusFill } from "react-icons/bs";
import { FaBook, FaHome, FaUsers } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoRestaurantSharp } from "react-icons/io5";
import { MdContactPhone, MdPayments, MdRateReview, MdRestaurant } from "react-icons/md";
// import { RiMenuUnfoldFill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { TbBrandBooking } from "react-icons/tb";
import { TfiMenuAlt } from "react-icons/tfi";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks.jsx/useAdmin";
// import useCart from "../Hooks.jsx/useCart";

const Dashboard = () => {
    // const [cart] = useCart();

    // TODO: getd isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">

            {/* Dashboard side bar */}
            <div className="w-64 min-h-screen bg-yellow-500">
                <h2 className="text-[30px] text-black font-extrabold mt-24 mb-3 p-4 text-center">BD RESTAURANT</h2>

                {/* For Normal Users */}
                <ul className="menu p-4 text-white">

                    {
                        isAdmin ?
                            <>
                                <li className="text-black"><NavLink to='/dashboard/adminHome'>
                                    <FaHome />ADMIN HOME</NavLink>
                                </li>
                                <li className="text-black"><NavLink to='/dashboard/addItems'>
                                    <MdRestaurant />ADD ITEMS</NavLink>
                                </li>
                                <li className="text-black"><NavLink to='/dashboard/manageItems'>
                                    <TfiMenuAlt />MANAGE ITEMS </NavLink>
                                </li>
                                <li className=" text-black"><NavLink to='/dashboard/bookings'>
                                    <FaBook />MANAGE BOOKINGS</NavLink>
                                </li>
                                <li className="text-black"><NavLink to='/dashboard/users'>
                                    <FaUsers />ALL USERS</NavLink>
                                </li>
                               

                            </>
                                :
                            <>
                                <li className="text-black"><NavLink to='/dashboard/userHome'>
                                    <FaHome />USER HOME</NavLink>
                                </li>
                                <li className="text-black"><NavLink to='/dashboard/reservation'>
                                    <SlCalender />RESERVATION  </NavLink>
                                </li>
                                <li className="text-black"><NavLink to='/dashboard/paymentHistory'>
                                    <MdPayments />PAYMENT HISTORY</NavLink>
                                </li>
                                <li className=" text-black"><NavLink to='/dashboard/cart'>
                                    <BsCartPlusFill />MY CART</NavLink>
                                </li>
                                <li className="text-black"><NavLink to='/dashboard/review'>
                                    <MdRateReview />ADD REVIEW</NavLink>
                                </li>
                                <li className="text-black"><NavLink to='/dashboard/booking'>
                                    <TbBrandBooking />MY BOOKING</NavLink>
                                </li>
   
                            </>
                   }
                    {/* Shared nav links */}

                    <div className="divider"></div>

                    <li className="text-black"><NavLink to='/'>
                        <FaHome />HOME</NavLink>
                    </li>
                    <li className="text-black"><NavLink to='/menu'>
                        <GiHamburgerMenu />MENU</NavLink>
                    </li>
                    <li className="text-black"><NavLink to='/orderFood/kacchi'>
                        <IoRestaurantSharp />ORDER FOOD</NavLink>
                    </li>
                    <li className="text-black"><NavLink to='/contact'>
                        <MdContactPhone />CONTACT</NavLink>
                    </li>

                   
                </ul>
                
            </div>

            {/* Dashboard content */}
            <div className="flex-1">
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;