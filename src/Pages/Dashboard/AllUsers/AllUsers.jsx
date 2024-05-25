import { useQuery } from "@tanstack/react-query";
import { MdDeleteForever } from "react-icons/md";
import useAxiosSecure from "../../../Hooks.jsx/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();
    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;

        }

    })

    const handleDelete = (user) => {
        console.log(user)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        console.log(res)
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }


                    })

            }
        });
    }

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
        })
    }



    return (
        <div className=" bg-gray-100 ">
            <div className="max-w-[1000px] mx-auto bg-gray-100 pt-1 mt-0">
                <SectionTitle subHeading={'---How many??---'} heading={'MANAGE ALL USERS'}></SectionTitle>
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
                                        users.map((user, index) => <tr key={user._id} className="text-[18px] text-gray-600">
                                            <th>
                                                <label>
                                                    {index + 1}
                                                </label>
                                            </th>
                                            <td>
                                                {user.name}
                                            </td>
                                            <td>
                                                {user.email}
                                            </td>
                                            <td>
                                                {
                                                    user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost text-white text-[18px] bg-yellow-600"><FaUsers />
                                                    </button>
                                               }
                                            </td>
                                            {/*  */}
                                            <th>
                                                <button onClick={() => handleDelete(user)} className="btn btn-ghost text-white text-[18px] bg-red-600"><MdDeleteForever />
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