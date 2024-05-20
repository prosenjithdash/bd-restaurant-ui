import MenuCover from "../../Components/MenuCover";
import MenuItemsCard from "../../Components/MenuItemsCard";

const MenuCategory = ({item, image, title,des}) => {
    return (
        <div className="my-[50px]">

            <div className="mb-[50px]">
                {
                    title && <MenuCover image={image} title={title} des={des} ></MenuCover>
                }
           </div>

            <div className="grid grid-cols-1 md:grid-col-1 md:grid-cols-2 gap-[24px] max-w-[1280px] mx-auto">
                {
                    item.map(item => <MenuItemsCard key={item.id} item={item}></MenuItemsCard>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;