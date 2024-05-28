import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks.jsx/useAxiosPublic";

const useMenu = () => {

    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // tan stack query
    {/*  tan stack query step - 05 (useCart.jsx) */ }
    {/*  tan stack query step - 06 (Navbar.jsx) */ }

    const axiosPublic = useAxiosPublic();

    const { data: menu = [], isPending: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu')
            return res.data;
        }
    })
    return [menu, loading, refetch]
    
   
};

export default useMenu;






