

import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bd-restaurant-server-weld.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;