// tan stack query step - 02
// tan stack query step - 03 (useCart.jsx)

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    // tan stack query
    {/*  tan stack query step - 05 (useCart.jsx) */ }
    {/*  tan stack query step - 06 (Navbar.jsx) */ }

    const axiosSecure = useAxiosSecure()
    const { data: cart=[] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get('/carts')
            return res.data;
        }
    })
    return [cart]
};

export default useCart;