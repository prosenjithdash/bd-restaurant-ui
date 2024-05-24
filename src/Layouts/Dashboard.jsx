import { BsCartPlusFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoRestaurantSharp } from "react-icons/io5";
import { MdPayments, MdRateReview } from "react-icons/md";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">

            {/* Dashboard side bar */}
            <div className="w-64 min-h-screen bg-yellow-500">

                <ul className="menu p-4 text-white">
                    <li className="text-black"><NavLink to='/dashboard/userHome'>
                        <FaHome />USER HOME</NavLink>
                    </li>
                    <li className="text-black"><NavLink to='/dashboard/reservation'>
                        <SlCalender  />RESERVATION  </NavLink>
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