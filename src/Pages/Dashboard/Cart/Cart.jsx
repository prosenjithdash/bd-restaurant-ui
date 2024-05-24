import { MdDeleteForever } from "react-icons/md";
import SectionTitle from "../../../Components/SectionTitle";
import useCart from "../../../Hooks.jsx/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks.jsx/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure();
    const handleDelete = (id) => {
        console.log(id)
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
                axiosSecure.delete(`/carts/${id}`)
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

    return (
        <div className=" bg-gray-100 ">
            <div className="max-w-[1000px] mx-auto bg-gray-100 pt-1 mt-0">
                <SectionTitle  subHeading={'---My Cart---'} heading={'WANNA ADD MORE?'}></SectionTitle>
                <div className="bg-white min-h-screen rounded-xl p-10">
                    <div className="flex justify-between text-[20px] font-bold uppercase items-center">
                        <p>Total orders: {cart.length}</p>
                        <p>total price: {totalPrice}</p>
                        <button className="bg-yellow-500 p-2 rounded-xl">Pay</button>
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
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        cart.map((item,index) => <tr key={item._id} className="text-[18px] text-gray-600">
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
                                            <th>
                                                <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost text-white text-[18px] bg-red-600"><MdDeleteForever />
</button>
                                            </th>
                                        </tr> )
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

export default Cart;