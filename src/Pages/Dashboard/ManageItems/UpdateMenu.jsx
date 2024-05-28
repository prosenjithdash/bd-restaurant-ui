import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle";
import useAxiosPublic from "../../../Hooks.jsx/useAxiosPublic";
import useAxiosSecure from "../../../Hooks.jsx/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateMenu = () => {

    const item = useLoaderData();
    console.log('Update item: ', item)

    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(res.data)
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // 
            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                // show success popup
                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

    }
    return (
       
        <div className=" bg-gray-100 ">
            <div className="max-w-[1000px] mx-auto bg-gray-100 pt-1 mt-0">
                <SectionTitle subHeading={'---Into Food---'} heading={'UPDATE ITEM'} />
                
                <div className="bg-white min-h-screen rounded-xl p-10">

                    <form onSubmit={handleSubmit(onSubmit)} className=" space-y-6">
                       

                        <div className=" ">
                            <label className="text-[20px] font-bold">First Name</label>
                            <input placeholder="Recipe name" className="p-[24px] mt-2 bg-gray-100 rounded-md w-full" {...register("name", { required: true })} />
                        </div>

                        <div className="flex w-full gap-[24px]">
                            <div className="w-full">
                                <label className="text-[20px] font-bold ">Category*</label>
                                <select  {...register("category", { required: true })} className="select select-warning  mt-2 bg-gray-100 rounded-md h-[70px] w-full">
                                    <option disabled value='default' >Select a category</option>
                                    <option value="offered">Offered</option>
                                    <option value="popular">Popular</option>
                                    <option value="kacchi">Kacchi</option>
                                    <option value="fish">Fish</option>
                                    <option value="chicken">Chicken</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="shop">Shop</option>
                                    <option value="salad">Salad</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="drink">Drink</option>

                                </select>
                            </div>
                            
                            <div className="w-full">
                                <label className="text-[20px] font-bold"> Price*</label>
                                <input placeholder=" Price" className="mt-2 p-[24px] bg-gray-100 rounded-md w-full" {...register("price", { required: true })} />
                            </div>
                        </div>

                        <div className="w-full">
                            <label className="text-[20px] font-bold"> Recipe Details*</label>
                         
                            <textarea placeholder="Recipe name" className="p-[24px] mt-2 bg-gray-100 rounded-md w-full h-[250px]" name="" id="" {...register("recipe", { required: true })}></textarea>
                        </div>
                        

                        <div className="w-full">
                            <input  {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full mt-2" />
                        </div>


                        <div>
                            <button className="btn bg-yellow-500 px-4">Add Item <FaUtensils className="ml-3"/> </button>
                        </div>

                    </form>
                    
                    
                

                </div>
            </div>
        </div>
    );
};

export default UpdateMenu;