import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks.jsx/useAuth";
import useAxiosSecure from "../../../Hooks.jsx/useAxiosSecure";
import { IoWallet } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { BiRestaurant } from "react-icons/bi";
import { GrDeliver } from "react-icons/gr";

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })
    return (
        <div className="m-[24px]">
            <div className="pb-[24px]">
                <h2 className="text-[32px]">
                    <span>
                        Hi! Welcome , 
                    </span>
                    {
                        user.displayName ?  user.displayName : 'Back'
                    }
                </h2>
            </div>

            <div className="grid lg:grid-cols-4 gap-[24px] pb-[32px]">
                <div className="flex  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white items-center gap-[24px] rounded-lg p-[30px]" >
                    <div><IoWallet className="w-[50px] h-[50px]" /></div>
                    <div>
                        <h2 className="text-[40px] font-bold">{stats.revenue}</h2>
                        <p className="text-[24px]">Revenue</p>
                    </div>
                </div>

                <div className="flex  bg-gradient-to-r from-yellow-500 via-yellow-600 to-pink-500 text-white items-center gap-[24px] rounded-lg p-[30px]" >
                    <div><FaUsers className="w-[50px] h-[50px]" /></div>
                    <div>
                        <h2 className="text-[40px] font-bold">{stats.users}</h2>
                        <p className="text-[24px]">Customers</p>
                    </div>
                </div>

                <div className="flex  bg-gradient-to-r from-cyan-500 to-purple-500 text-white items-center gap-[24px] rounded-lg p-[30px]" >
                    <div><BiRestaurant className="w-[50px] h-[50px]" /></div>
                    <div>
                        <h2 className="text-[40px] font-bold">{stats.menuItems}</h2>
                        <p className="text-[24px]">Products</p>
                    </div>
                </div>

                <div className="flex  bg-gradient-to-r from-emerald-500  from-10% via-sky-400 via-30% to-pink-500  text-white items-center gap-[24px] rounded-lg p-[30px]" >
                    <div><GrDeliver className="w-[50px] h-[50px]" /></div>
                    <div>
                        <h2 className="text-[40px] font-bold">{stats.orders}</h2>
                        <p className="text-[24px]">Orders</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminHome;