
// import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks.jsx/useAuth";
import Swal from 'sweetalert2'
// 
import useAxiosSecure from '../../src/Hooks.jsx/useAxiosSecure';

const FoodCard = ({ item }) => {

    const { name, image, price, _id, recipe } = item;


    const navigate = useNavigate();
    const location = useLocation();
    
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    console.log( 'Food Cart User : ',user)

    const handleAddFood = (food) => {
        console.log(food)
        if (user && user.email) {
            //send cart item to the database
            console.log(user.email, food)
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} added to your Food Cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
            })
        }
        else {
            Swal.fire({
                title: "You are not Sign In",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, SignIn!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to the login page
                    navigate('/signIn', {state:{from:location}})
                }
            });
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl relative w-[300px] h-[200px] " />

            </figure>
            <p className="bg-black text-white rounded-md py-1 px-4 text-[12px] absolute ml-[270px] mt-[50px]  ">${price}</p>

           
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name} </h2>
                <p>{recipe} </p>

                <div className="card-actions">
                    <button onClick={()=>handleAddFood(item)} className="btn border-b-4 border-yellow-400 hover:bg-yellow-400 hover:border-blue-400 bg-white border-l-0 border-r-0 border-t-0">Add Food</button>
                </div>

            </div>
        </div>
    );
};

export default FoodCard;