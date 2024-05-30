import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks.jsx/useAuth";
import useAxiosSecure from "../../../Hooks.jsx/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: payments= [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    }) 
    return (
        <div className=" bg-gray-100 ">
            <div className="max-w-[1000px] mx-auto bg-gray-100 pt-1 mt-0">
                <SectionTitle
                    subHeading={'---At a Glance!---'} heading={'PAYMENT HISTORY'}></SectionTitle>
                <div className="bg-white min-h-screen rounded-xl p-10">
                    <div className="flex justify-between text-[20px] font-bold uppercase items-center">
                        <p>Total Payments: {payments.length}</p>

                    </div>
                    <div>
                        <div className="overflow-x-auto mt-4">
                            <table className="table">
                                {/* head */}
                                <thead className="bg-yellow-500 text-[20px] text-black">
                                    <tr>
                                        
                                        <th>EMAIL</th>
                                        <th>TRANSACTION ID </th>
                                        <th>TOTAL PRICE</th>
                                        <th>PAYMENT DATE</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        payments.map((payment) => <tr key={user._id} className="text-[18px] text-gray-600">
                                            {/* <th>
                                                <label>
                                                    {index + 1}
                                                </label>
                                            </th> */}
                                            <td>
                                                {payment.email}
                                            </td>
                                            <td>
                                                {payment.transactionId}
                                            </td>
                                            <td>
                                                {payment.price} /=
                                            </td>
                                            {/*  */}
                                            <td>
                                                {payment.date}
                                            </td>
                                        </tr>)
                                    }


                                </tbody>


                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        // <div>
        //     <p>payment history : {payments.length}</p>
        // </div>
    );
};

export default PaymentHistory;