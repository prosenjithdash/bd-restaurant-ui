
const MenuItemsCard = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div className="flex gap-[32px] ">
            <div>
                <img style={{ borderRadius: '0px 200px 200px 200px'}} className="rounded-[0px 200px 200px 200px] w-[118px] h-[104px]" src={image} alt="" />
            </div>
            <div>
                <h2 className="text-[20px] mb-[8px]">{ name}----------</h2>
                <p>{ recipe}</p>
            </div>
            <div className="text-[20px] text-[#BB8506]">
                {price}
            </div>
        </div>
    );
};

export default MenuItemsCard;