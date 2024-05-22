
const FoodCard = ({item}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={item.image} alt="Shoes" className="rounded-xl relative w-[300px] h-[200px] " />

            </figure>
            <p className="bg-black text-white rounded-md py-1 px-4 text-[12px] absolute ml-[270px] mt-[50px]  ">${item.price}</p>

           
            <div className="card-body items-center text-center">
                <h2 className="card-title">{item.name} </h2>
                <p>{item.recipe} </p>
                <div className="card-actions">
                    <button className="btn btn-primary">Add Food</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;