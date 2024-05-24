import { useQuery } from "@tanstack/react-query";
import { MdDeleteForever } from "react-icons/md";
import useAxiosSecure from "../../../Hooks.jsx/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
            
        }
        
    })
    return (
        <div className=" bg-gray-100 ">
            <div className="max-w-[1000px] mx-auto bg-gray-100 pt-1 mt-0">
                <SectionTitle subHeading={'---My Cart---'} heading={'WANNA ADD MORE?'}></SectionTitle>
                <div className="bg-white min-h-screen rounded-xl p-10">
                    <div className="flex justify-between text-[20px] font-bold uppercase items-center">
                        <p>Total users: {users.length}</p>
                        
                    </div>
                    <div>
                        <div className="overflow-x-auto mt-4">
                            <table className="table">
                                {/* head */}
                                <thead className="bg-yellow-500 text-[20px] text-black">
                                    <tr>
                                        <th>
                                            {/* <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label> */}
                                        </th>
                                        <th>NAME</th>
                                        <th>EMAIL </th>
                                        <th>ROLE</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        users.map((item, index) => <tr key={item._id} className="text-[18px] text-gray-600">
                                            <th>
                                                <label>
                                                    {index + 1}
                                                </label>
                                            </th>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>
                                                {item.email}
                                            </td>
                                            <td>
                                                <button className="btn btn-ghost text-white text-[18px] bg-yellow-600"><FaUsers />
                                                </button>
                                            </td>
                                            {/* onClick={() => handleDelete(item._id)}  */}
                                            <th>
                                                <button className="btn btn-ghost text-white text-[18px] bg-red-600"><MdDeleteForever />
                                                </button>
                                            </th>
                                        </tr>)
                                    }
                                    {/* row 1 */}


                                </tbody>


                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllUsers;