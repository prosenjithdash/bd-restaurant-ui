import { Link } from "react-router-dom";
import MenuCover from "../../Components/MenuCover";
import MenuItemsCard from "../../Components/MenuItemsCard";

const MenuCategory = ({_id, item, image, title,des}) => {
    return (
        <div className="my-[50px]">

            <div className="mb-[50px]">
                {
                    title && <MenuCover image={image} title={title} des={des} ></MenuCover>
                }
           </div>

            <div className="grid grid-cols-1 md:grid-col-1 md:grid-cols-2 gap-[24px] lg:max-w-[1280px] lg:mx-auto mx-4">
                
                {
                    item.map(item => <MenuItemsCard key={item._id} item={item}></MenuItemsCard>)
                }

                

            </div>

            <div className="text-center mt-[50px] ">
                {/*  */}
                <Link to={`/orderFood/${title}`} >
                    <button className="btn bg-yellow-400  ">Order Food</button>
                </Link>
            </div>

            <div></div>
        </div>
    );
};

export default MenuCategory;