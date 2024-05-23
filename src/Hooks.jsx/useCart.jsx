// api, axios (axios secure), tan stack


// tan stack query step - 02
// tan stack query step - 03 (useCart.jsx)

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCart = () => {
    // tan stack query
    {/*  tan stack query step - 05 (useCart.jsx) */ }
    {/*  tan stack query step - 06 (Navbar.jsx) */ }

    const axiosSecure = useAxiosSecure()

    // spacefic user data
    const { user } = useAuth();
    const { refetch ,data: cart=[] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
    return [cart, refetch]
};

export default useCart;