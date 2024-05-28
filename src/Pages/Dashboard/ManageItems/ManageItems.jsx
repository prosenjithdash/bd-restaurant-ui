import { MdDeleteForever } from "react-icons/md";
import SectionTitle from "../../../Components/SectionTitle";
import useMenu from "../../../Hooks.jsx/useMenu";
import { TbEdit } from "react-icons/tb";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks.jsx/useAxiosSecure";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();

    const axiosSecure = useAxiosSecure();

    const handleDelete =  (menu) => {
        console.log('Delete menu: ',menu)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${menu._id}`)
                    
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: ` ${menu.name} has been deleted.`,
                                icon: "success"
                            });
                        }


         

            }
        });
    }

    return (
        <div className=" bg-gray-100 ">
            <div className="max-w-[1000px] mx-auto bg-gray-100 pt-1 mt-0">
                <SectionTitle subHeading={'---Hurry Up!---'} heading={'MANAGE ALL ITEMS'}></SectionTitle>
                <div className="bg-white min-h-screen rounded-xl p-10">
                    <div className="flex justify-between text-[20px] font-bold uppercase items-center">
                        <p>Total items: {menu.length}</p>
                        
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
                                        <th>ITEM IMAGE</th>
                                        <th>ITEM NAME</th>
                                        <th>PRICE</th>
                                        <th>ACTION</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        menu.map((item, index) => <tr key={item._id} className="text-[18px] text-gray-600">
                                            <th>
                                                <label>
                                                    {index + 1}
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask  w-[80px] h-[80px] rounded-lg">
                                                            <img className="" src={item.image} />
                                                        </div>
                                                    </div>

                                                </div>
                                            </td>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>{item.price} /=</td>

                                            <td>
                                                {/* onClick={() => handleDelete(item._id)} */}
                                                <Link to={`/dashboard/updateMenu/${item._id}`}>
                                                    <button className="btn btn-ghost text-white text-[18px] bg-yellow-500"><TbEdit />
                                                    </button>
                                                </Link>
                                            </td>

                                            <td>
                                                
                                                <button onClick={()=> handleDelete(item)}  className="btn btn-ghost text-white text-[18px] bg-red-600"><MdDeleteForever />
                                                </button>
                                            </td>
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

export default ManageItems;