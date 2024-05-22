
const MenuItemsCard = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div className="flex lg:gap-[32px] gap-[15px]">
            <div>
                <img style={{ borderRadius: '0px 200px 200px 200px' }} className="rounded-[0px 200px 200px 200px] lg:w-[100px] lg:h-[100px] w-[100px] h-[80px]" src={image} alt="" />
            </div>
            <div>
                <h2 className="lg:text-[20px] lg:mb-[8px] text-[15px] mb-[6px] font-semibold">{ name}----------</h2>
                <p>{ recipe}</p>
            </div>
            <div className="lg:text-[20px] text-[15px] text-[#BB8506]">
                {price}
            </div>
        </div>
    );
};

export default MenuItemsCard;