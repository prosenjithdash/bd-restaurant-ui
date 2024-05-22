import FoodCard from "./FoodCard";

const OrderTab = ({ items }) => {
    console.log(items)
    return (
        <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 lg:gap-4 md:gap-4 gap-3 '>
            {
                items.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;